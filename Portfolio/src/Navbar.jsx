import { Link } from "react-router-dom"
function Navbar () {
    return(
        <>
            <div className="navbar-container">
                <nav className="navbar-items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="portfolio">Project</Link></li>
                        <li><Link to="contact"> Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;