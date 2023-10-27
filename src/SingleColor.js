import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor, setSelectedHex, selectedHex }) => {
  
  const bcg = rgb.join();
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})`, border: `2px solid ${'#242424'}`, borderRadius: "10px" }}
      onClick={() => {
        setSelectedHex(hexColor);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {selectedHex === hexColor && <p className="alerta">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
