import { Component } from "react"
import { Link } from "react-router-dom"
import './index.css'

class Header extends Component{
    render(){
        return(
            <div className="header-container">
                <nav className="nav-container">
                    <div className="portfolio">
                        <h1 >Portfolio</h1>
                    </div>
                    <div className="con">
                     <Link className="nav-item" to="/"><li>HOME</li></Link>
                     <Link className="nav-item" to="/about"><li>ABOUT</li></Link>
                     <Link className="nav-item" to="/projects"><li>PROJECTS</li></Link>
                     <Link className="nav-item" to="/contact"><li>CONTACT</li></Link>
                </div>
                </nav>

            </div>
        )
    }
}

export default Header