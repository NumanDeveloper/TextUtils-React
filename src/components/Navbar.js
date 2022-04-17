import React from 'react'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-md navbar-${props.mode === 'green' || props.mode === 'pink' || props.mode === 'gold' || props.mode === 'coffee' ? 'dark' : props.mode} bg-${props.mode === 'green' || props.mode === 'pink' || props.mode === 'gold' || props.mode === 'coffee' ? 'dark' : props.mode}`}>
            <div className="container">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.about}</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Find" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'white'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="switch" onClick={props.toggleMode} />
                        <label className="form-check-label" htmlFor="switch">Dark Mode</label>
                    </div>

                    {/* Green toggle switch  */}
                    <div className={`form-check mx-2 form-switch text-${props.mode === 'light' ? 'dark' : 'white'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="switch" onClick={props.toggleGreenMode} />
                        <label className="form-check-label" htmlFor="switch">Green Mode</label>
                    </div>

                    {/* Pink toggle switch  */}
                    <div className={`form-check mx-2 form-switch text-${props.mode === 'light' ? 'dark' : 'white'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="switch" onClick={props.togglePinkMode} />
                        <label className="form-check-label" htmlFor="switch">Pink Mode</label>
                    </div>

                    {/* Gold toggle switch  */}
                    <div className={`form-check mx-2 form-switch text-${props.mode === 'light' ? 'dark' : 'white'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="switch" onClick={props.toggleGoldMode} />
                        <label className="form-check-label" htmlFor="switch">Gold Mode</label>
                    </div>

                    {/* Coffee toggle switch  */}
                    <div className={`form-check mx-2 form-switch text-${props.mode === 'light' ? 'dark' : 'white'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="switch" onClick={props.toggleCoffeeMode} />
                        <label className="form-check-label" htmlFor="switch">Coffee Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}
