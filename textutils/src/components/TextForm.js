import  React  from "react"
import { useState } from "react";





export default function TextForm(props){
  

const handleExtraSpace = () => {
  let newText = text.split(/[]+/);
  setText(newText.join(" "));
};

const handleCopy = () =>{
  var text= document.getElementById('myBox');
  text.select();
  navigator.clipboard.writeText(text.value);
}


  const handleOnChange=(event) =>{
setText(event.target.value);

  }

  const handleUpClick = () => {
  let newText = text.toUpperCase();
  setText(newText)
  }

  const handleDownClick = () => {
  let newText = text.toLowerCase();
  setText(newText)
  }

  

  const [text, setText]= useState("Enter text here");
return( 
<>
<div className="container" style={{color: props.mode==='light'?'black':'white'}} >
  <h1>{props.Heading}</h1>
<div className="mb-3">
  <textarea className="form-control"  onChange={handleOnChange} id="myBox" rows="8" value={text} style={{backgroundColor:props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} ></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button  className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to Lowercase</button>
<button  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
<button  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>No extra space</button>
</div>

<div className="container my-3"style={{color: props.mode==='light'?'black':'white'}}>
<h1>Text Summary</h1>
<p>{text.length} characters and {text.split(" ").filter((element)=>{return element.length!==0}).length}  words</p>
<p>It will take you {text.length>0 ? 0.08 * text.split(" ").length : 0} minutes to read. </p>
<h2>Preview</h2>
<p>{text.length>0 ? text : 'Type something to see preview text.'}</p>
</div>
</>
)
}