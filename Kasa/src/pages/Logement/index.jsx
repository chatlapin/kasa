import Accordeon from '@/composants/Accordeon';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Carrousel from './composants/Carrousel';
import Rating from './composants/Rating';

import './logement.scss';
export default function Logement() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [logementEnCours, setLogementEnCours] = useState(null)
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('../data/logements.json');
                const data = await response.json();
                const logement = data.find((logement) => logement.id === id)
                if (!logement) {
                    navigate('/404')
                }
                setLogementEnCours(logement);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])

    if (!logementEnCours) {
        return <div>Chargement...</div>
    }

    //destructuring
    const { title, location, host, pictures, tags, rating } = logementEnCours;
    return (
        <div>
            <Carrousel images={pictures} />
            <div className="info">
                <div className="logement-details">
                    <h3>{title}</h3>
                    <h4>{location}</h4>
                    <div className='tags'>
                        {
                            tags.map((tag, index) => <span key={index}>{tag}</span>)
                        }
                    </div>
                </div>
                <div className="host-rating">
                    <div className="host">
                        <span>{host.name}</span>
                        <img src={host.picture} alt={host.name} />
                    </div>
                    <Rating rating={rating} />
                </div>
            </div>
            <div className="description-equipements">
                <Accordeon titre="Description" contenu={logementEnCours.description} />
                <Accordeon titre="Équipements" equipments={logementEnCours.equipments} />
            </div>

        </div>
    )
}
