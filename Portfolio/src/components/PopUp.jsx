import Project from "./Project";
import screenshotBh from "../assets/Screenshot_Bhromaon.png"
import screenshotDJ from "../assets/Screenshot_DJ.png"
import screenshotRe from "../assets/screenshot_recipies.png"

function PopUp() {
  return (
        <>
            <div className="Profile_card">
                <Project screenshot={screenshotBh} name={"Bhromaon"} link={"https://github.com/Alva-projects/bhromaon.git"} techUsed= {"This project was created with a time limit using HTML and CSS5."} writeUp= {"The project initially did not go as i planned it too. I tried to create all of the home page rather than only having time to create one part leaving the othe parts blank. It was a good challange wich made me practice prioritizing."}/>
                
                <Project screenshot={screenshotRe} name={"Recepies"} link={"https://github.com/Alva-projects/assignment-7.version1.0.git"} techUsed= {"Media queries were used to make the website dynamic."} writeUp= {"This was my first responsive website which was a good challange."}/>
                
                <Project screenshot={screenshotDJ} name={"DJ Service"} link={"https://github.com/MPLarsson/Group-Project.git"} techUsed= {"The gallery is created using a grid"} writeUp= {"I created the Gallery page for this project."}/>
            </div>
        </>
  )
}

export default PopUp;