import homeBanner from '@/assets/images/home-banner.png'

import './style.scss'

export default function HomeBanner() {
    return (
        <div className='home-banner'>
            <h1>Chez vous, partout et ailleurs</h1>
            <img src={homeBanner} alt="home banner" />
        </div>
    )
}
