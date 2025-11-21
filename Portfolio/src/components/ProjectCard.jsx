import "../styles/popup.css";
import "../styles/projectCard.css";
import Project from "./Project"
import screenshotBh from "../assets/Screenshot_Bhromaon.png";
import screenshotDJ from "../assets/Screenshot_DJ.png";
import screenshotRe from "../assets/screenshot_recipies.png";

function ProjectCard () {
    const handleEvent = () => {
        return (
        <PopUp/>
    )
    }

  return (
        <>
          <div className="Profile_card">
            <Project screenshot={screenshotBh} name={"Bhromaon"} link={"https://githubcomAlva-projects/bhromaon.git"} techUsed= {"This project was created with atimelimit using HTML and CSS5."} writeUp= {"The project initially did not go asiplanned it too. I tried to create all of the home page rather than onlyhavingtime to create one part leaving the othe parts blank. It was a goodchallangewich made me practice prioritizing."}/>
            
            <Project screenshot={screenshotRe} name={"Recepies"} link={"https://githubcomAlva-projects/assignment-7.version1.0.git"} techUsed= {"Media queries wereusedto make the website dynamic."} writeUp= {"This was my first responsivewebsitewhich was a good challange."}/>
            
            <Project screenshot={screenshotDJ} name={"DJ Service"} link={"https://githubcomMPLarsson/Group-Project.git"} techUsed= {"The gallery is created using agrid"}writeUp= {"I created the Gallery page for this project."}/>
          </div>
        </>
  )
}

export default ProjectCard;
