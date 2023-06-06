import { useState } from 'react';
import { Mail, MailProps } from './interfaces';
import MailHeader from './MailHeader';
import MailContent from './MailContent';

interface InboxProps {
  mails: Mail[],
}

function Inbox({ mails }: InboxProps) {
  const [selectedMail, setSelectedMail] = useState<MailProps>({
    fromAddr: 'Lorem@ipsum.dolor',
    headerSubject: 'Lorem, ipsum dolor.',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia dignissimos dolorem quasi sequi. Provident incidunt nesciunt non excepturi illum quaerat! Quo facilis fuga ut vero totam quisquam cum quibusdam?
    Et officia nam modi illum dolorem nisi nulla aperiam rem voluptas voluptatibus fugit, blanditiis error incidunt dolores iusto. Officia explicabo incidunt eveniet libero sequi! Architecto voluptatibus dignissimos officia dolorum doloremque.
    Enim id magnam earum atque fugiat nihil consequatur ut corporis, nisi obcaecati a tempora maxime facilis debitis in quam possimus animi eum adipisci? Aliquam esse accusantium nam nulla veniam animi.
    Accusantium perspiciatis rem dolorem non temporibus, repellendus sit ducimus magnam, voluptas quasi recusandae optio, vero error quia. Aspernatur, fugit, fuga eveniet possimus ut officiis non, ullam dolores ad nostrum inventore?`,
  });
  return (
    <div className="w-full bg-slate-50 lg:max-w-7xl flex-1 mx-auto flex p-2 gap-2 rounded">
      <div className="w-36 sm:w-80 flex flex-col gap-2">
        {
        mails.map((mail) => (
          <MailHeader
            key={mail.downloadUrl}
            headerSubject={mail.headerSubject}
            fromAddr={mail.fromAddr}
            text={mail.text}
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
