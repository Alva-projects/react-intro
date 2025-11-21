import "../styles/projectCard.css"
import "../styles/project.css"

function Project ({screenshot, name, link, techUsed, writeUp}) {
    return(
        <>
            <div className="profile_card">
                <img src={screenshot} alt="" className="image"/>
                <div className="info">
                    <h2 className="title">{name} </h2>
                    <a href={link} className="link" target="_blank" >Git Hub repo</a>
                    <p className="tech">{techUsed}</p>
                    <p className="description">{writeUp}</p>
                </div>
            </div>
        </>
    )
}

export default Project;