import { MailProps } from '../../../interfaces';

function MailContent({ headerSubject, fromAddr, text }: MailProps) {
  return (
    <div className="p-2 flex flex-col flew-wrap break-words">
      <h1 className="p-2 break-words text-black border-b-2 border-slate-100">{headerSubject}</h1>
      <p className="p-2 break-words border-b-2 border-slate-100">
        from:
        {' '}
        <span>{fromAddr}</span>
      </p>
      <p className="text-black p-2 break-words">{text}</p>
    </div>
  );
}

export default MailContent;
