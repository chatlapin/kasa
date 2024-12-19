import grayStar from '@/assets/images/gray-star.svg'
import redStar from '@/assets/images/red-star.svg'
import './rating.scss'
export default function Rating(props) {
    return (

        <div className="stars" data-rating={props.rating}>
            {
                Array(5).fill(0).map((_, index) => {
                    if (index < props.rating) {
                        return <img src={redStar} alt="" key={index} />
                    } else {
                        return <img src={grayStar} alt="" key={index} />
                    }
                })
            }
        </div>
    )
}

