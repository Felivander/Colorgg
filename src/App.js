import React, { useEffect, useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";
import { HuePicker } from "react-color";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#ff0000").all(10));


  const handleOnChange = (color) =>{
    setColor(color)
    let colors = new Values(color.hex).all(10);
    setList(colors);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  

  return (
    <>
      <section className="container">
          <HuePicker color={color} onChange={handleOnChange}/>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />


          <button className="btn" type="submit">
            submit
          </button>
        </form>

      </section>

      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>;
        })}
      </section>
    </>
  );
}

export default App;
