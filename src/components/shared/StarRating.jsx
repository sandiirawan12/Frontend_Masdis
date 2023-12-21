import { useState } from "react";

function StarRating(props) {
    const { rating, setRating } = props
    const [hover, setHover] = useState(0);

    return (
        <div className="d-flex">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <span style={{ fontSize: '18px' }} className={index <= (hover || rating) ? 'text-warning' : 'text-dark'} onClick={() => setRating(index)} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(rating)} key={index}>
                        <i class="fas fa-star    "></i>
                    </span>
                )
            })}
        </div>
    );
}

export default StarRating;