import React from "react";
import cross from "../assets/cross.png";
import circle from "../assets/circle.png";

export default function Block({ num, sign }) {
  return (
    <div className="square-block" data-move-id={num}>
      <div className="img-container" data-move-id={num}>
        {sign && (
          <img
            src={sign === "x" ? cross : circle}
            className="clicked-img"
            data-move-id={num}
          />
        )}
      </div>
    </div>
  );
}
