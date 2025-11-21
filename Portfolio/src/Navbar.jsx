import { Link } from "react-router-dom"
function Navbar () {
    return(
        <>
        <div className="navbar-container">
            <nav className="navbar-items">
                <ul>
                    <li><Link to="/"/>Home</li>
                    <li><Link to="portfolio"/>Project</li>
                    <li><Link to="contact"/>Contact</li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Navbar;