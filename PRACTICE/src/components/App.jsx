import React, { useState } from "react";

function App() {
  let generatedTime = new Date().toLocaleTimeString();
  var [time, setTime] = useState(generatedTime);

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
