import { Link } from "react-router-dom"
import "./styles/navbar.css"
function Navbar () {
    return(
        <>
            <div className="navbar-container">
                <nav className="navbar">
                    <ul className ="navbar-items">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="portfolio">Project</Link></li>
                        <li><Link to="contact"> Contact</Link></li>
                        <li><Link to ="testpopup">Test Popup</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;