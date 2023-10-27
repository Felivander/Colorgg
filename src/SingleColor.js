import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join();
  const border = rgb.join();  
  console.log(border);
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})`, border: `2px solid ${'#242424'}`, borderRadius: "10px" }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alerta">copied</p>}
    </article>
  );
};

export default SingleColor;
