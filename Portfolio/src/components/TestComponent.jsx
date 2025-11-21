
function TestComponent({title, info, onClick}) {
    
    return(
        <div className="popup-window">
            <h1 className="title">{title}</h1>
            <p className="info">{info}</p>
            <button className="close-button" onClick={onClick}>Close window</button>
        </div>
    )
}

export default TestComponent;