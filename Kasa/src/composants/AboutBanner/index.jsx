import aboutBanner from '@/assets/images/about-banner.png'

import './style.scss'

export default function AboutBanner() {
    return (
        <div className='about-banner'>
            <img src={aboutBanner} alt="home banner" />
        </div>
    )
}
