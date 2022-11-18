import { useState } from "react";
import TopBar from "./TopBar";
import Content from "./Content";
import Footer from "./Footer";
import MenuItem from "./MenuItem";

function App() {
  const [messageCounter, setMessageCounter] = useState(6);

  const menu = [
    { text: "Home", target: "#home" },
    { text: "Inbox", target: "#inbox", count: messageCounter },
    { text: "About Me", target: "#about" },
    {
      text: "Submenu",
      target: "#about",
      subMenuItems: ["Sub Menu Item 1", "Sub Menu Item 2"],
    },
  ];

  return (
    <main className="flex flex-col w-full h-full">
      <TopBar
        title="My Cool App"
        msgCounter={messageCounter}
        onResetHandler={() => setMessageCounter(1)}
      />
      <div className="flex h-full">
        <aside className="w-1/4 h-full border-slate-400 border-r p-4">
          <ul className="flex flex-col gap-4 font-semibold">
            {menu.map((menuItem) => (
              <MenuItem
                key={menuItem.text}
                text={menuItem.text}
                target={menuItem.target}
                count={menuItem.count}
                subMenuItems={menuItem.subMenuItems}
              />
            ))}
          </ul>
        </aside>
        <Content>
          Hello Visitor,
          <br />
          <br />
          you have <strong>{messageCounter}</strong> unread messages.
          <br />
          <br />
          Please go to your inbox to read them.
          <div className="flex gap-2">
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => setMessageCounter(messageCounter + 1)}
            >
              Increase Counter
            </button>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => setMessageCounter(messageCounter - 1)}
            >
              Decrease Counter
            </button>
          </div>
        </Content>
      </div>
      <Footer copyright="by Dieter Developer (2022)" />
    </main>
  );
}

export default App;
