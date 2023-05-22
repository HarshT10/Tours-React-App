import React, { useState } from "react";

const Tour = ({ id, name, image, info, price, removeTours }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>

      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 250)}...`}

          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTours(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
