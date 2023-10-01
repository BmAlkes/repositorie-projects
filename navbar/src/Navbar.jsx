import { links, social } from "./data";
import logo from "./assets/logo.svg";
import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const handleToggle = () => {
    setShowLinks(!showLinks);
  };
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="" />
          <button className="nav-toggle" onClick={handleToggle}>
            <FaBars />
          </button>
        </div>
        <div
          className={`links-container`}
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { text, url } = link;
              return (
                <li key={link.id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {
          /* {social links} */

          <ul className="social-icons">
            {social.map((social) => {
              const { icon, id, url } = social;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        }
      </div>
    </nav>
  );
};
