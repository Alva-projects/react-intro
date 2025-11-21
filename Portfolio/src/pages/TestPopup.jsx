import { useState } from "react";
import TestComponent from "../components/TestComponent";

function TestPopup(){
    const [popupInfo, setPopupInfo] = useState({
        title: "This is a title",
        info: "This is my info",
    });

    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <h1>Test</h1>
        <button onClick={() => setIsOpen(true)}>Open details</button>
                {isOpen && (
                <TestComponent title = {popupInfo.title} info = {popupInfo.info} />
            )}
        </>
    )
}

export default TestPopup;