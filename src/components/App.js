import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
 //code here
 const [data,setData] = useState("");
const update = ()=>{
    setData(e.target.value)
}
  return (
    <div id="main">
      <ChildComponent result={data} /> 
       <input id='input' onChange={()=>update} />
    
      <p id='output'>{data}</p>
    </div>
  )
}


export default App;
