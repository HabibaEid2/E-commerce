export default function Rate(props) {
    let $3_5 = <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
        <i className="fa-regular fa-star"></i>
    </div>

    let $4$4_2 = <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
    </div>

    let $4_5 = <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
    </div>

    let $5= <div className="rate">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
    </div>

    return (props.rate==3.5?$3_5 
        :props.rate == 4 || props.rate == 4 ?$4$4_2 
        :props.rate == 4.5 ? $4_5 : $5)
}