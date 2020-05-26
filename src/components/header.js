import React from 'react'
import {Link} from 'gatsby'
import HeaderStyle from './header-module.css'

const Header = () => {
    return (
        <header className="header">
                <Link to='/' className="title">
                <h1> Karun Kanda</h1>
                </Link>
                
            <nav>
                <ul className="nav-list">
                    <li>
                    <Link to="/AboutPage" className="nav-item">About Me</Link>
                    </li>
                    <li>
                    <Link to="/school" className="nav-item">Education</Link>
                    </li>
                    <li>
                    <Link to="/experience" className="nav-item">Work Experience</Link>
                    </li>
                    <li>
                    <Link to="/projects" className="nav-item">Projects/Research Work</Link>
                    </li>
                    <li>
                    <Link to="/skills" className="nav-item">Skills</Link>
                    </li>
                    <li>
                    <Link to="/awards" className="nav-item">Awards</Link>
                    </li>
                    <li>
                    <Link to="/Contact" className="nav-item">Contact</Link>
                    </li>
                    
                </ul>
            </nav>
            
        </header>
    )
}

export default Header