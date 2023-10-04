import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { social, links } from "./data";

export const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  console.log(isSidebarOpen);
  return (
    <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <div className="sidebar-header">
        <h2 className="logo">Sidebar</h2>
        <button onClick={closeSidebar} className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((link) => {
          const { icon, id, url } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
