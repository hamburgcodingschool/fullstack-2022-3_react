function Content({ children }) {
  return (
    <article className="p-4 w-full flex flex-col flex-[5] items-center overflow-y-scroll">
      <div className="max-w-2xl bg-red">{children}</div>
    </article>
  );
}

export default Content;
