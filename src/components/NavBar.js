import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg" style={{background: 'rgb(40 0 92 / 43%)', color: 'white'}}>
                <div className="container-fluid" >
                    <Link className="navbar-brand" style={{color: 'white'}} to="/">NewsLelo</Link>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" style={{color: '#b8b8b8'}} aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general" style={{color: '#b8b8b8'}}>General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business" style={{color: '#b8b8b8'}}>Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment" style={{color: '#b8b8b8'}}>Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health" style={{color: '#b8b8b8'}}>Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science" style={{color: '#b8b8b8'}}>Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports" style={{color: '#b8b8b8'}}>Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology" style={{color: '#b8b8b8'}}>Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}
