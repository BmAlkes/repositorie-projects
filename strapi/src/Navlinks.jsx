import Submenu from "./Submenu";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Navlinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((link) => {
        const { page, pageId } = link;
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
      <Submenu />
    </div>
  );
};

export default Navlinks;
