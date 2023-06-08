import { FaUserCircle } from 'react-icons/fa';
import { MailProps } from '../../../interfaces';

function MailContent({ headerSubject, fromAddr, text }: MailProps) {
  return (
    <div className="p-2 flex flex-col  flew-wrap break-words">
      <h1 className="p-2 break-words text-black">{headerSubject}</h1>
      <p className="p-2 flex flex-wrap break-words">
        <FaUserCircle size={24} />
        <span className="ml-2">{`from: ${fromAddr}`}</span>
      </p>
      <p className="text-black mt-4 p-2 break-words">{text}</p>
    </div>
  );
}

export default MailContent;
