import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper Case was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);

      


    }
    const handleLoClick = () => {
        // console.log("Upper Case was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)


    }
    const handle = () => {
        // console.log("Upper Case was Clicked" + text);
        let arr = text.split("");
        arr = arr.reverse();
        let newText= arr.join("")
        
        setText(newText)


    }
    
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value)

    }
    const [text, setText] = useState("");
    
    return (
        <>   
     <div style ={{color: props.mode==='dark'?'white':'black'}}>

            <div className="mb-3">
                <h1 >{props.heading} - </h1>
        {console.log(props.mode)}
            
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style = {{backgroundColor: props.mode=== 'dark'?'grey':'white'} } rows="8"></textarea>
          
            </div>

            <button  className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
            <button  className="btn btn-primary mx-1" onClick= {handleLoClick}>Convert to Lower Case</button>
            <button  className="btn btn-primary mx-1" onClick={handle}>Reverse </button>

            
    </div>
    
    <div className="container my-3" style ={{color: props.mode ==='light'?('black'):('white')}} >
        <h1>your Text summary</h1>
        <p>No. of Words:{text.split(" ").length}  ||  No. of Characters: {text.length} </p>

        <p>{ 0.008*text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length === 0?"Enter text to preview":text}</p>
    </div>
    </>

  )
}
