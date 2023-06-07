import { useState } from 'react';
import Header from '../components/Header';
import Inbox from '../components/Inbox';
import { mails } from './mockedMails';

interface UserInfo {
  email: string,
  id: string,
}

function Home() {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  return (
    <div className="h-screen flex flex-col py-4">
      <Header emailValue="user@user.com" refreshTime={15} />
      <Inbox mails={mails} />
    </div>
  );
}

export default Home;
