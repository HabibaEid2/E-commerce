import loadingImg from './../../images/loading.gif'
import './loading.css'
export default function Loading() {
    return (
        <div className="loading">
            <img src={loadingImg} alt="loading..." />
        </div>
    )
}