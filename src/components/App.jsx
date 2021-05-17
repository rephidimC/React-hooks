import React, { useState } from "react";

// var count = 0;

// function increase() {
//   count++;
//   console.log(count);
// }

// function App() {
//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//     </div>
//   );
// }

//the problem with the above is that unless I rerender the whole page when the button is clicked, it wont change the value there.

function App() {
  const [count, setCount] = useState(123);

  function increase() {
    setCount(count + 5);
  }

  function decrease() {
    setCount(count - 5);
  }
  // const [count, setCount] = useState(123);
  //what happens is that the system automatically assigns the first element in the useState array the only value in the array trying to generate a result.
  // const [count, men] = useState(123);
  // the above is the right way, which is to put two items in the array, and tap into the names of afterEach.

  // console.log(count);
  //the above result gives the corresponding value in the array

  // const state = useState();
  // console.log(state);
  // the logged value is [undefined, ƒ bound dispatchAction()]

  //const state = useState(0);
  //when the above becomes the const above, the result is [0, ƒ bound dispatchAction()]
  //meaning the first value in the result is the value passed into the state, which is called starting state.

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
