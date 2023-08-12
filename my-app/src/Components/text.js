import React,{useState} from 'react'


export default function TextArea(props) {
  const [text, setText] = useState('');
  const handleUpClick=()=>{
    console.log('Uppercase was clicked'+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");
  }
  const handleUpClick2=()=>{
    console.log('Lowecase was clicked'+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");
  }
  const handleUpClick3=()=>{
    console.log('Text was cleared');
    let newText='';
    setText(newText);
    props.showAlert("cleared text","success");
  }
  const handleOnChange=(event)=>
  {
    console.log('OnChange was clicked');
    setText(event.target.value)
  }
  
  // const [myStyle,setMyStyle]=useState({
  //   backgroundColor:'white',
  //   color:'black'
  // })
  // const [myBtn,setMyBtn]=useState("enable dark mode")
  // const toggle=()=>
  // {
  //   if(myStyle.color=='black'){
  //   setMyStyle(
  //   {
  //     backgroundColor:'black',
  //   color:'white'
  //   })
  //   setMyBtn('enable light')
  // }
  //   else{
  //   setMyStyle({
  //     backgroundColor:'white',
  //   color:'black'
  //   })
  //   setMyBtn('enable dark')
  // }
// }
  

  return (
    <>
    <div className="container mb-3" style={{backgroundColor: props.mode==='dark'?'white':'gray'}}>
    <h1>{props.title}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" 
  style={{backgroundColor: props.mode==='dark'?'black':'gray',color: props.mode==='light'?'black':'white'}}></textarea>
  <button type="button" onClick={handleUpClick} className="btn btn-primary my-3">Convert to uppercase</button>
  <button type="button" onClick={handleUpClick2} className="btn btn-primary my-3 mx-3">Convert to lowercase</button>
  <button type="button" onClick={handleUpClick3} className="btn btn-primary my-3 ">Clear Text</button>
  {/* <button type="button" onClick={toggle} className="btn btn-primary my-3 mx-3">{myBtn}</button> */}
    </div>
    <div className="container">
      <h1>Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h1>Preview</h1>
      <p>{text}</p>
    </div>
    </>
  )
}
