import React, { useState } from 'react'

export default function TextForm(props) {
    // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState("");
    //   we can't change the value of state variable directly, instead use function
    //   setText("new text");
    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }
    const handleCapClick = () => {
        let words = text.split(" ");
        let upperCaseWord = ' ';
        words.forEach(element => {
            upperCaseWord += element.charAt(0).toUpperCase() + element.slice(1) + " ";
        });
        setText(upperCaseWord);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container my-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                <button className="my-3 mx-1 btn btn-primary" onClick={handleUpperClick}>Convert to Uppercase</button>
                <button className="my-3 mx-1 btn btn-primary" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="my-3 mx-1 btn btn-primary" onClick={handleCapClick}>Capitalize</button>
                <button className="my-3 mx-1 btn btn-primary" onClick={handleClearClick}>Clear</button>
            </div>

            <div className="container">
                <h2>Your text summary</h2>
                <b><p>{text.split(".").length} sentences, {text.split(" ").length} words and {text.length} characters.</p>
                    <p>{0.008 * text.split(" ").length} Minutes Read.</p></b>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
