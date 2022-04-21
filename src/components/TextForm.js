import React, { useState } from 'react'

export default function TextForm(props) {
    // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState("");
    //   TODO:
    //   we can't change the value of state variable directly, instead use function
    //   setText("new text");
    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase", "success");
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }
    const handleCapClick = () => {
        let words = text.split(" ");
        let upperCaseWord = ' ';
        words.forEach(element => {
            upperCaseWord += element.charAt(0).toUpperCase() + element.slice(1) + " ";
        });
        setText(upperCaseWord);
        props.showAlert("Text capitalized", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <textarea className="form-control" onChange={handleOnChange} value={text} style={{
                    backgroundColor: props.mode === 'dark' ? 'gray' : 'white',
                    color: props.mode === 'dark' ? 'white' : 'black'
                }} id="myBox" rows="8"></textarea>
                <button disabled={text.length === 0} className={`border border-danger my-3 mx-1 btn btn-${props.mode}`} onClick={handleUpperClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className={`border border-danger my-3 mx-1 btn btn-${props.mode}`} onClick={handleLowerClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className={`border border-danger my-3 mx-1 btn btn-${props.mode}`} onClick={handleCapClick}>Capitalize</button>
                <button disabled={text.length === 0} className={`border border-danger my-3 mx-1 btn btn-${props.mode}`} onClick={handleClearClick}>Clear</button>
            </div>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <b><p>{text.split(".").filter((element) => { return element.length !== 0 }).length} sentences, {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.</p>
                    <p>{(0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length)} Minutes Read.</p></b>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview !!"}</p>
            </div>
        </>
    );
}
