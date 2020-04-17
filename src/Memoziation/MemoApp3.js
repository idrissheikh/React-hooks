import React, { useState, useMemo } from "react";
import { DefaultButton } from "./DefaultButton";

export default function MemoApp3() {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount(c => c + 1);
  const memoizedButton = useMemo(
    () => <DefaultButton label="count up" onClick={handleCount} />,
    []
  );

  return (
    <div className="container text-center pt-5">
      <p>count : {count} </p>
      {memoizedButton}
    </div>
  );
}
