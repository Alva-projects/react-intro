import ProjectCard from "../components/ProjectCard";
import "../styles/portfolio.css"

function Portfolio() {
  return (
    <div>
        <h2 className="title">My Portfolio</h2>
        <div>
            <ProjectCard/>
        </div>
    </div>
  )
}

export default Portfolio;