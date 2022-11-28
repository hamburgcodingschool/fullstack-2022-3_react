import MessageIcon from "./MessageIcon";

function TopBar({ title, msgCounter }) {
  return (
    <header className="w-full bg-gray-100 border-b border-slate-400 h-16 shrink-0 flex items-center px-4 justify-between">
      <div className="text-xl font-bold">{title}</div>
      <MessageIcon msgCounter={msgCounter} />
    </header>
  );
}

export default TopBar;
