import React, { useState } from 'react'

export default function About() {
    // Declare a new state variable, which we'll call "text"
    const [style, setStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const [btn, setBtn] = useState("Enable Dark Mode");
    const toggleState = () => {
        if (style.backgroundColor === 'white'){
            setStyle({
                color: 'white',
                backgroundColor: 'black',
                border : '1px solid white'
                }
            )
            setBtn("Enable Light Mode");
        }
        else{
            setStyle({
                color: 'black',
                backgroundColor: 'white'
                });
            setBtn("Enable Dark Mode");
        }
    }
    return (
        <div>
            <div className='container'>
                <h1 className='my-3'>About Us</h1>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item" style={style}>
                        <h2 class="accordion-header" id="headingOne">
                            <button style={style} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item" style={style}>
                        <h2 class="accordion-header" id="headingTwo">
                            <button style={style} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item" style={style}>
                        <h2 class="accordion-header" id="headingThree">
                            <button style={style} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="my-3 btn btn-primary" onClick={toggleState}>{btn}</button>
            </div>
        </div>
    )
}
