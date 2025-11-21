import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import "../styles/popup.css";

function PopUp() {
  const [visible, setVisible] = useState(false)
    const changeVisibility = () => {
      setVisible(!visible)
    }  
  return (
            <div className="btn-container">
                <button className="btn-popup" onClick={changeVisibility}> {visible ? "Hide Projects": "Show Projects" }</button> 
                { visible && <ProjectCard/> }
            </div>
    )
}

export default PopUp;