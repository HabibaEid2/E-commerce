export default function Newsletter(props) {
    return (
        <div className="newsLetterSection">
            <h3 className = "mainTitle">{props.title}</h3>
            <div className="subscribe">
                <p className="p-color">{props.p}</p>
                <div className="subscribe-input">
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    <input type="email" placeholder="your email address"/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}