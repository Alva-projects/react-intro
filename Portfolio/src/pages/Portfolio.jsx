import DetailsComponent from "../components/DetailsComponent.jsx";
import PopUp from "../components/PopUp.jsx";
import "../styles/portfolio.css"


function Portfolio() {
  return (
    <div className="container-portfolio">
        <h2 className="title">My Portfolio</h2>
        <div>
          <PopUp/>
        </div>
    </div>
  )
}

export default Portfolio;