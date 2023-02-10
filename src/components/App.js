import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
 //code here
 const [data,setData] = useState("");

  return (
    <div id="main">
      <ChildComponent /> 
       <input id='input' onChange={()=>setData(e.target.value)} />
    
      <p id='output'>{data}</p>
    </div>
  )
}


export default App;
