import './card.scss'
export default function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.titre} />
            <h3>
                {props.titre}
            </h3>
        </div>
    )
}
