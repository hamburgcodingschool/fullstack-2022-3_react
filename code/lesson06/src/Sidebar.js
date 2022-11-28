import MenuItem from "./MenuItem";
import { Link } from "wouter";
import styles from "./Sidebar.module.css";

function Sidebar({ menu }) {
  return (
    <aside className={styles.container}>
      <ul className="flex flex-col gap-4 font-semibold">
        {menu.map((menuItem, index) => (
          <Link key={index} href={menuItem.target}>
            <MenuItem
              key={menuItem.text}
              text={menuItem.text}
              target={menuItem.target}
              count={menuItem.count}
            />
          </Link>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
