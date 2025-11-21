
import "../styles/details.css";
import ProjectCard from "./ProjectCard.jsx";


function DetailsComponent({ProjectData, onClose}) {
    
    return(
        <div className="popup-window">
            <div>
                <img src={data.screenshot} alt="" className="image"/>
                <h1 className="title">{data.name}</h1>
                <p className="link">{data.link}</p>
                <p className="techUsed">{data.techUsed}</p>
                <p className="writeUp">{data.writeUp}</p>
                <button className="close-button" onClose={onClose}>Close window</button>            
            </div>
        </div>
    )
}

export default DetailsComponent;

// Start here Saturday  
