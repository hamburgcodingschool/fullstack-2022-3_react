function MenuItem({ text, target, count, subMenuItems }) {
  function onClickHandler() {
    console.log("HELLO I WAS CLICKED");
  }

  return (
    <li className={`flex justify-between ${subMenuItems && "flex-col"}`}>
      <span
        onClick={onClickHandler}
        className="text-slate-700 hover:text-slate-900"
      >
        {text}
      </span>
      {subMenuItems && (
        <ul>
          {subMenuItems.map((subMenuItem) => (
            <li key={subMenuItem} className="pl-2">{subMenuItem}</li>
          ))}
        </ul>
      )}
      {count && (
        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          {count}
        </span>
      )}
    </li>
  );
}

export default MenuItem;
