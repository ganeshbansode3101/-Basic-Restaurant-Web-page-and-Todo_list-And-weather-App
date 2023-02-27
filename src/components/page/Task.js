import React from 'react'
import { useState } from 'react';
import App from '../../App';
// import App from '../'

const Task = (style,name,) => {

  console.log("style", name);


  const [message, setMessage] = useState('');
  const [show, setshow] = useState(true);


  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>

{ show ?
      <input className={show ? "show" : null}
        style={{ width: style.width, color: style.color, height:style.height,marginLeft:style.marginLeft,fontSize:style.fontSize,backgroundColor:style.backgroundColor}}
        // style={{backgroundColor:"red"}}
        type="text"
        placeholder='Enter Text'
        onChange={handleChange}
        value={message}
      />: null }

      <button onClick={() => {setshow(!show);}}>Show/hide</button>



      <h2>Message: {message}</h2>


      <button>Submit</button>

      
    </div>


  )
}

export default Task;