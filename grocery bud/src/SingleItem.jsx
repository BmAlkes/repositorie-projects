import { useState } from "react";

/* eslint-disable react/prop-types */
export const SingleItem = ({ item, removeItem, editItem }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        value={item.completed}
        onChange={() => editItem(item.id)}
      />

      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <button className="btn remove-btn" onClick={() => removeItem(item.id)}>
        Delete
      </button>
    </div>
  );
};
