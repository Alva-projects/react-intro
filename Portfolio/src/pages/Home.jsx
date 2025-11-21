// import Navbar from "../Navbar";
import DetailsComponent from "../components/DetailsComponent";
import screenshot from "../assets/Screenshot_Bhromaon.png"

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <div>
            <h2>Hello</h2>
            <DetailsComponent screenshot={screenshot} name={"Bhromaon"} link={"https://githubcomAlva-projects/bhromaon.git"} techUsed= {"This project was created with a time limit using HTML and CSS5."} writeUp= {"The project initially did not go asiplanned it too. I tried to create all of the home page rather than onlyhavingtime to create one part leaving the othe parts blank. It was a goodchallangewich made me practice prioritizing."}/>
        </div>
    </div>
  )
}

export default Home;