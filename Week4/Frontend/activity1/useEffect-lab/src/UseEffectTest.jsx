import React, { useEffect, useState } from "react";

const UseEffectTest = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);

  // New state for the count
  const [count, setCount] = useState(0);

  // New state for storing the interval ID
  const [myInterval, setMyInterval] = useState(null);

  useEffect(() => {
    console.log("UseEffect1 Ran");
  }, []);

  useEffect(() => {
    console.log("UseEffect2 Ran");
    if (toggleTwo) console.log("Toggle two has been activated");
  }, [toggleTwo]);

  // This useEffect listens for changes in the 'count' state.
  useEffect(() => {
    // Clear any previous interval if it exists.
    if (myInterval) {
      clearInterval(myInterval);
    }

    // Create a new interval and store its ID in 'myInterval'.
    const newInterval = setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} is running`);
    }, 1000);

    setMyInterval(newInterval);

    // Clean up the interval when this effect unmounts or when 'count' changes.
    return () => {
      console.log(
        `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
      );
      clearInterval(newInterval);
    };
  }, [count]);

  return (
    <div>
      {console.log("rendered or re-rendered")}
      <h1>UseEffectTest Component</h1>
      <button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>ToggleTwo</button>

      {/* Button to increment 'count' */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default UseEffectTest;
