import React from "react";
import { decrement, increment } from "../Action/action";
import { useDispatch, useSelector } from "react-redux";

export const Incredecrement = () => {
    const numvalue = useSelector((state) => state);
    console.log(numvalue);
    const dispatch = useDispatch();
    let num = 1;

  return (
    <div>
      <button onClick={() => dispatch(increment(num))}>+</button>
      <div>{numvalue}</div>
      <button onClick={() => dispatch(decrement(num))}>-</button>
    </div>
  );
};
