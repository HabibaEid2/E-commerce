import papper_plane_img from './../../images/paper-plane.png'
import './newsLetter.css'
export default function Newsletter(props) {
    return (
        <div className="newsLetterSection">
            <h3>{props.title}</h3>
            <div className="subscribe">
                <p className="p-color">{props.p}</p>
                <form>
                    <div>
                        <img src={papper_plane_img} alt="send icon" />
                        <input type="email" placeholder='Your email address'/>
                    </div>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    )
}