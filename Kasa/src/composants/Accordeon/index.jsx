import arrowDown from 'assets/images/arrow-down.png'
import { useState } from 'react'
import './style.scss'

export default function Accordeon(props) {
    const [open, setOpen] = useState(false)
    return (
        <div className={open ? 'accordeon open' : 'accordeon'} >
            <button className="header" onClick={() => setOpen(!open)}>
                <span>{props.titre}</span>
                <img src={arrowDown} alt="icon arrow" className={open ? 'rotate' : ''} />
            </button>
            <div className='content'>
                <p>{
                    props.equipments ?
                        (<ul>
                            {props.equipments.map((equipment, index) => (<li key={index}>{equipment}</li>))}
                        </ul>) :
                        null
                }
                    {
                        props.contenu ? props.contenu : null
                    }
                </p>
            </div>

        </div>
    )
}
