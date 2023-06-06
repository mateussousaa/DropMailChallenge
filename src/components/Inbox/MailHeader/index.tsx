interface MailProps {
  headerSubject: string,
  fromAddr: string,
  text: string,
}

function MailHeader({ headerSubject, fromAddr, text }: MailProps) {
  return (
    <div className="w-full bg-white rounded p-2 truncate shadow-md shadow-slate-300">
      <h3 className="font-semibold">{headerSubject}</h3>
      <span className="italic">{fromAddr}</span>
      <p className="text-slate-500">{text}</p>
    </div>
  );
}

export default MailHeader;
