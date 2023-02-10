import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
 //code here
 const [data,setData] = useState("");
 const update= (e)=>{
   const ans = setData(e.target.value);
  return ans;
 }

  return (
    <div id="main">
      <ChildComponent result={ans} /> 
       <input id='input' onChange={()=>update} />
    
      <p id='output'>{result}</p>
    </div>
  )
}


export default App;
