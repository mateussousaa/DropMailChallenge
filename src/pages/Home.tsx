import { SessionInfo, ResponseCreateSession, Mail } from '@/interfaces';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_EMAILS, INTRODUCE_SESSION } from '@/services/querys';
import { useEffect, useState } from 'react';
import {
  getMailsLength, getUserInfo, setMailsLength, updateUserInfo,
} from '@/utils/handleLocalStorage';
import { createNotification } from '@/utils/handleNotifications';
import { ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import Inbox from '../components/Inbox';

function Home() {
  const [mails, setMails] = useState<Mail[]>([]);
  const [getMails, { data: sessionMails, error, refetch }] = useLazyQuery(GET_EMAILS, {
    onCompleted(response) {
      if (response.session.mails.length > getMailsLength()) {
        createNotification();
      }
      setMails(response.session.mails);
      setMailsLength(response.session.mails.length);
    },
  });
  const [timeToRefresh, setTimeToRefresh] = useState<number>(15);
  const [createSession] = useMutation(INTRODUCE_SESSION, {
    onCompleted: (response: ResponseCreateSession) => {
      const { introduceSession: { addresses, id } } = response;
      updateUserInfo({ email: addresses[0].address, id });
      getMails({
        variables: {
          sessionId: id,
        },
      });
    },
  });

  const refreshMails = async () => {
    await refetch({
      sessionId: getUserInfo().id,
    });
    setTimeToRefresh(15);
  };

  const handleRefreshButton = () => refreshMails();

  const validateSession = async (id: string) => {
    const { error: errorResponse, data: dataResponse } = await getMails({
      variables: {
        sessionId: id,
      },
    });

    if (errorResponse || dataResponse.session === null) {
      alert('your temporary email has expired');
      createSession();
    }
  };

  useEffect(() => {
    const userInfo = getUserInfo() as SessionInfo;
    if (!userInfo.id) {
      createSession();
      return;
    }
    validateSession(userInfo.id);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeToRefresh((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (timeToRefresh === 0) {
      refreshMails();
    }
  }, [timeToRefresh]);

  if (error) return <h1>{error.message}</h1>;

  if (!sessionMails) return <h1>Loading Mails</h1>;

  return (
    <div className="h-screen flex flex-col py-4">
      <ToastContainer />
      <Header
        emailValue={getUserInfo().email}
        refreshTime={timeToRefresh}
        handleRefreshButton={handleRefreshButton}
      />
      <Inbox mails={mails} />
    </div>
  );
}

export default Home;
