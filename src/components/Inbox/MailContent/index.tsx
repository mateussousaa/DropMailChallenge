import { MailProps } from '../interfaces';

function MailContent({ headerSubject, fromAddr, text }: MailProps) {
  return (
    <div className="p-2 flex flex-col flew-wrap break-words">
      <h1 className="py-1 break-words text-black font">{headerSubject}</h1>
      <p className="py-1 break-words">
        from:
        {' '}
        <span>{fromAddr}</span>
      </p>
      <p className="text-black py-2 break-words">{text}</p>
    </div>
  );
}

export default MailContent;
