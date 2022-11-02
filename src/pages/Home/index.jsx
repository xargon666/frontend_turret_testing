import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import turretImg from '../../assets/imgs/turret_img.png';
// import 'animate.css';
import { useEffect } from 'react';


const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.querySelector('#tab-title').innerHTML = 'Turret Testing | Home';
    })

    return (
        <>
            {/* <h1>Home page</h1>
            <Link to="/">Home</Link>
            <Link to="/GamePage">Game Page</Link>
            <Link to="/KudosPage">Kudos Page</Link>
            <Link to="/SettingsPage">Settings Page</Link> */}

            <div className="page-container">
                <div className="page-hero-title-container">
                    <div className="page-hero-title">
                        <h1 className='homepage-title'>Turret</h1>
                        <h1 className='homepage-title-outlined'>Testing</h1>
                    </div>
                </div>
                <div className="page-hero-content">
                    <div className="turret-img">
                        <img className='hero-turret-img' src={turretImg} alt="cartoon turret" />
                    </div>
                    <p className='homepage-content-p'>
                        expect('testing').toBe('fun');</p>
                </div>
                <div className="page-hero-buttons">
                    <button onClick={() => navigate('/settings')} className='hero-btn-outer'>
                        <div className='hero-btn-inner'>
                            <span className='hero-btn-text'>Play</span>
                        </div>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Home;
