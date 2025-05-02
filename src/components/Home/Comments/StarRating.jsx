import React from "react";
import Icon from "../../Icons";

const StarRating = ({ rating = 0, max = 5 }) => (
  <div className="flex items-center justify-center gap-0.5 mb-2">
    {Array.from({ length: max }).map((_, i) => (
      <Icon
        key={i}
        name="star-fill"
        className={
          (i < rating ? "text-yellow-400" : "text-gray-400/40") + " text-[20px]"
        }
      />
    ))}
  </div>
);

export default StarRating;
