function Footer({ copyright }) {
  return (
    <footer className="bg-white sticky bottom-0 h-12 shrink-0 border-t border-slate-400 flex items-center px-4 text-sm text-slate-400">
      {copyright}
    </footer>
  );
}

export default Footer;
