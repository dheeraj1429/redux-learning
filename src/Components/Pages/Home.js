import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Inc, Dec } from "../Redux/Action/Action.js";

function Home() {
  const myRedux = useSelector((state) => state.ChangeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className="homeContent">
      <h1>Increment/Decrement counter</h1>

      <div className="incDiv">
        <button className="decButton" onClick={() => dispatch(Dec())}>
          -
        </button>
        <p>{myRedux}</p>
        <button className="IncButton" onClick={() => dispatch(Inc(10))}>
          +
        </button>
      </div>
    </div>
  );
}

export default Home;
