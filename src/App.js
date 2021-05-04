import React,{useState,useEffect} from 'react';
import './App.css';
import  Form  from './containers/chat';

function App () {

  const [msgs,setMsg] = useState([{
    msg1:true,
    msg2:false,
    msg3:false,
    msg4:false,
    msg5:false
  }]);


  useEffect(()=>{
   
  });

  function setMsgs(msg,estado){
    const copy = [...msgs];
    
    copy[0][msg]=estado;
    setMsg(copy);
  }


  return (
    <div className="App">
      < Form msgs={msgs} setMsg={(msg,estado)=> setMsgs(msg,estado)}/>
    </div>
  );
}

export default App;

