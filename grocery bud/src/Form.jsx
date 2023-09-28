/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) return;
    addItem(newItemName);
    setNewItemName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          placeholder="add grocery"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button className="btn">Add Item</button>
      </div>
    </form>
  );
};

export default Form;
