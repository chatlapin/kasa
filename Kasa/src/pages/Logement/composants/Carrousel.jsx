import arrowLeft from '@/assets/images/arrow-left.svg'
import arrowRight from '@/assets/images/arrow-right.svg'
import { useState } from 'react'
import './carrousel.scss'
export default function Carrousel(props) {
    const [currentIndex, setCurrentIndex] = useState(0)
    function next() {
        if (currentIndex < props.images.length - 1) {
            setCurrentIndex(currentIndex + 1)
            return;
        }
        setCurrentIndex(0)//on retourne au premier
    }

    function previous() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
            return;
        }
        setCurrentIndex(props.images.length - 1)//on retourne au dernier
    }

    return (
        <div className="carrousel">
            <img src={props.images[currentIndex]} alt="" />
            <button className='previous' onClick={previous}>
                <img src={arrowLeft} alt="" />
            </button>
            <button className='next' onClick={next}>
                <img src={arrowRight} alt="" />
            </button>
        </div>
    )
}
