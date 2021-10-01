import React from "react";

function Home() {
  return (
    <div className="homeContent">
      <h1>Increment/Decrement counter</h1>

      <div className="incDiv">
        <button className="decButton">-</button>
        <p>00</p>
        <button className="IncButton">+</button>
      </div>
    </div>
  );
}

export default Home;
