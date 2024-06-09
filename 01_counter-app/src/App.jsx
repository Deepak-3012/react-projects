import { useState } from "react";
  
 //useState on of the hooks ..used to manage state varaibles inside a component
function App(){
  let [counter, setCounter] = useState(0) // set default value(can be anything)
  function addVal(){
    counter = counter + 1; //also directly u can do setCounter(Counter + 1)
    setCounter(counter)
  }
  function subVal(){
    if(counter <= 0) setCounter(0);
    else setCounter(counter - 1);
  }
  function reset(){
    setCounter(0);
  }
  
  return(
   <> 
    <h1> Counter App</h1>
    <h2>Count = {counter}</h2>
    <button onClick = {addVal}>Add </button>
    &nbsp;&nbsp;
    <button onClick = {subVal}>Sub</button>&nbsp;&nbsp;
    <button onClick = {reset}>RESET</button>
    <footer>
    footer : {counter}
    </footer>
   </>
  )
}
//change of the state will be reflected everywhere the variable is used
export default App;