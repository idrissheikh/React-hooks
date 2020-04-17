import React, { useState, useRef } from "react";

const MemoObj = {};

const sumFn = (x, y) => {
  return new Promise((resolve, reject) => {
    if (MemoObj[x + "x " + y]) resolve(MemoObj[x + "x " + y]);
    setTimeout(() => {
      console.log(MemoObj);
      const result = x + y;
      MemoObj[x + "x " + y] = result;
      resolve(result);
    }, 2000);
  });
};

function Memoziation() {
  const [sum, setSum] = useState(0);
  const firstNum = useRef();
  const lastNum = useRef();
  const handleSum = () => {
    sumFn(+firstNum.current.value, +lastNum.current.value).then(result =>
      setSum(result)
    );
  };

  return (
    <div className="container text-center mt-5 ">
      sum: {sum}
      <br />
      <input ref={firstNum} />
      <br />
      <input ref={lastNum} />
      <br />
      <button className="btn btn-success" onClick={handleSum}>
        Calc
      </button>
    </div>
  );
}
export default Memoziation;
