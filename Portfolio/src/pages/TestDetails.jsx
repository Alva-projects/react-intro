import { useState } from "react";
import DetailsComponent from "../components/DetailsComponent";

function TestDetails(){
    const [] = useState({
    name: "Project 1",
    link: "Link 1",
    techUsed: "Lorem",
    writeUp: "Lorem",
    });

    const [ setIsOpen] = useState(false);

    return(
        <>
        <h1>Test</h1>
        <button onClick={() => setIsOpen(true)}>Open details</button>
                {isOpen && (
                <DetailsComponent title = {popupInfo.name} info = {popupInfo.link} techUsed = {popupInfo.techUsed} writeUp = {popupInfo.writeUp} />
            )}
        </>
    )
}

export default TestDetails;
/* 
name
link
techUsed
writeUp
*/