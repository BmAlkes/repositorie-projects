import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
export const SingleColor = ({ col, index }) => {
  const { hex, weight } = col;

  const handleSaveToClipboard = async () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`#${hex}`);
      toast.success(` Color Copy #${hex}`);
    } else {
      toast.error("ClipBoard not available");
    }
  };
  return (
    <article
      onClick={handleSaveToClipboard}
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </article>
  );
};
