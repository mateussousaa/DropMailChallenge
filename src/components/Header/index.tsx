import { FaCopy } from 'react-icons/fa';
import { RiRefreshFill } from 'react-icons/ri';

interface HeaderProps {
  emailValue: string,
  refreshTime: number,
}

function Header({ emailValue, refreshTime }: HeaderProps) {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex flex-wrap items-center">
        <span className="pl-2 italic text-sm mb-1 text-slate-500">your temporary email</span>
        <div className="flex w-full">
          <input
            type="text"
            className="w-full bg-slate-100 rounded-l px-4 py-2 focus:outline-none"
            value={emailValue}
          />
          <button
            type="button"
            className="bg-slate-400 text-white rounded-r px-6 py-2"
            onClick={() => navigator.clipboard.writeText(emailValue)}
          >
            <FaCopy />
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center mx-auto p-4">
          <p className="mx-auto p-4 text-sm font-light">
            auto refresh in
            {' '}
            {refreshTime}
          </p>
          <button
            type="button"
            className="ml-4 p-2 bg-slate-400 rounded text-white flex items-center gap-2 text-sm font-light"
          >
            <RiRefreshFill size="20" />
            refresh
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
