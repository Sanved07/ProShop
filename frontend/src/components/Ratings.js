import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { yellow } from "@material-ui/core/colors";

function Ratings({ value, text }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((index) =>
        value >= index ? (
          <StarIcon style={{ color: yellow[500] }} key={index} />
        ) : value >= index - 0.5 ? (
          <StarHalfIcon style={{ color: yellow[500] }} key={index} />
        ) : (
          <StarBorderIcon style={{ color: yellow[500] }} key={index} />
        )
      )}
      <span>{text}</span>
    </div>
  );
}

export default Ratings;
