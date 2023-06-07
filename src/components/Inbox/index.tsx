import { useState } from 'react';
import { InboxProps, MailProps } from '@/interfaces';
import MailHeader from './MailHeader';
import MailContent from './MailContent';

function Inbox({ mails }: InboxProps) {
  const [selectedMail, setSelectedMail] = useState<MailProps>();
  return (
    <div className="w-full bg-slate-50 lg:max-w-7xl flex-1 mx-auto flex p-2 gap-2 rounded shadow-md shadow-slate-300">
      <div className="w-36 sm:w-80 flex flex-col gap-2">
        {
        mails.map((mail) => (
          <MailHeader
            key={mail.downloadUrl}
            headerSubject={mail.headerSubject}
            fromAddr={mail.fromAddr}
            text={mail.text}
            handleClick={setSelectedMail}
          />
        ))
      }
      </div>
      <div className="w-full bg-white rounded shadow-md shadow-slate-300">
        {
        selectedMail && (
        <MailContent
          headerSubject={selectedMail.headerSubject}
          fromAddr={selectedMail.fromAddr}
          text={selectedMail.text}
        />
        )
      }
      </div>
    </div>

  );
}

export default Inbox;
