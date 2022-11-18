import MessageIcon from "./MessageIcon";

function TopBar({ title, msgCounter, onResetHandler }) {
  return (
    <header className="w-full bg-gray-100 border-b border-slate-400 h-16 flex items-center px-4 justify-between">
      <div className="text-xl font-bold">{title}</div>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={onResetHandler}>Reset Counter</button>
      <MessageIcon msgCounter={msgCounter} />
    </header>
  );
}

export default TopBar;
