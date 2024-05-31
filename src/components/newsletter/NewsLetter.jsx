export default function Newsletter(props) {
    return (
        <div className="newsLetterSection">
            <h3 className = "mainTitle">{props.title}</h3>
            <div className="subscribe">
                <p className="p-color">{props.p}</p>
            </div>
        </div>
    )
}