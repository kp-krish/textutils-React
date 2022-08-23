import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase!!","success");
    }
    const handleLoClick=()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase!!","success");
    }
    const handleClearClick=()=>{
        setText('');
        props.showAlert("TextArea Cleared!!","success");
    }
    const handleTrimClick=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space Removed","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const count=(word)=>{
        let c=0
        if(word.length===0){
            return c;
        }
        for(let i=0;i<word.length;i++){
            if((word.charAt(i)=== ' ' && i!==word.length-1)||(word.charAt(i)==='\n' && i!==word.length-1)){
                c=c+1;
            }
        }
        return c+1;
    }
    const [text, setText] = useState('');
    return(
        <>
            <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>    
                <button className="btn btn-primary mt-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2 mt-1" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-2 mt-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2 mt-1" onClick={handleTrimClick}>Remove Extra spaces</button>
            </div>
            <div className="my-2" style={{color:props.mode==='dark'?'white':'black'}}>
                <h3>Your text summery</h3>
                <p>{count(text)} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes Read Time</p>
                <h3>Preview</h3>
                <pre>{text.length>0?text:"Enter something in the above textbox to preview it here"}</pre>
            </div>
        </>
    )
}
