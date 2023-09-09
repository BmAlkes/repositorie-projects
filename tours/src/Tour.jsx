/* eslint-disable react/prop-types */
import { useState } from "react";

export const Tour = ({ id, image, info, name, price, removeTours }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt="" className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Read Less" : "Read More"}
          </button>
        </p>
        <button
          onClick={() => removeTours(id)}
          className="btn btn-block delete-btn"
          type="button"
        >
          not interessed
        </button>
      </div>
    </article>
  );
};
