import React, { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState();
  const handlerCount = () => setCounter(counter + 1);
  const handleTitle = () => setTitle("Ac Milan");
  const amountRef = useRef();

  useEffect(() => {
    console.log("inside useEffect1");
    document.title = title;

    return () => {
      setTimeout(() => {
        setTitle("");
      }, 1000);
      console.log("cleen up");
    };
  }, [title]);

  useEffect(() => {
    console.log("from useEffect 2");
    document.title = `you haved clicked ${counter} timed`;
  }, [counter]);

  useEffect(() => {
    amountRef.current.focus();
  });

  return (
    <div className="App">
      <div className="container txt-center pt-7">
        <input ref={amountRef} className="pt-7"></input>
        <br />
        <button className="btn-primary mt-3" onClick={handlerCount}>
          count Up
        </button>
        <br />
        <button className="btn-primary mt-3" onClick={handleTitle}>
          Change Title
        </button>
        <br />
        <span className="mt-3 mt-3">{counter}</span>
      </div>
    </div>
  );
}

export default App;
