import { MailHeaderProps } from '@/interfaces';

function MailHeader({
  headerSubject, fromAddr, text, handleClick,
}: MailHeaderProps) {
  return (
    <button
      type="button"
      className="w-full bg-white rounded p-2
      truncate shadow-md shadow-slate-300 text-left"
      onClick={() => { handleClick({ headerSubject, fromAddr, text }); }}
    >
      <h3 className="font-semibold">{headerSubject}</h3>
      <span className="italic">{fromAddr}</span>
      <p className="text-slate-500">{text}</p>
    </button>
  );
}

export default MailHeader;
