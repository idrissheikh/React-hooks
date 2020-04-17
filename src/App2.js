import React, { useState, useEffect, useRef, useCallback } from "react";
import { timeout } from "q";
import { Button } from "./Button";

function Appa2() {
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("");
  const amountRef = useRef();
  const reacMaxRef = useRef(false);
  const listOfCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50, 100];
  useEffect(() => {
    //console.log(" from use effect 1");
    document.title = title;
    return () => {
      setTimeout(() => {
        setTitle("");
        console.log("cleen up");
      }, 1000);
    };
  }, [title]);

  useEffect(() => {
    // console.log(" from use effect 2");
    document.title = `Antall klick er ${counter}`;
    setTimeout(() => {
      setTitle("");
    }, 500);
  }, [counter]);

  useEffect(() => {
    amountRef.current.focus();
  }, [title]);

  const handleTitle = () => {
    setTitle("Ac Milan");
  };

  const handleCounter = () => {
    if (!reacMaxRef.current) {
      if (counter >= 10) {
        reacMaxRef.current = true;
      } else {
        setCounter(c => c + (+amountRef.current.value || 1));
      }
    } else {
      console.log("you  can not click over 10");
    }
  };

  const onClick = useCallback(n => setCounter(c => c + n), [setCounter]);

  return (
    <div className="container txt-center pt-7">
      <input ref={amountRef}></input>
      <Button counterFn={onClick} label="count up" n={1}></Button>
      <br />
      <span className="txt-center  mt-3"> {counter}</span>
      <br />
      <button className="btn-primary mt-3" onClick={handleTitle}>
        change title
      </button>
      <br />
      {listOfCount.map(count => (
        <Button
          counterFn={onClick}
          label={count}
          n={count}
          key={count}
        ></Button>
      ))}
    </div>
  );
}
export default Appa2;
