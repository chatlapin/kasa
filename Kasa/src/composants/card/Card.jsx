import { Link } from 'react-router-dom'
import './card.scss'
export default function Card(props) {
    return (
        <Link to={`/logement/${props.logementId}`} className="card">
            <img src={props.image} alt={props.titre} />
            <h3>
                {props.titre}
            </h3>
        </Link>
    )
}
