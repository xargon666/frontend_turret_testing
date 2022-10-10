import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/imgs/logo.png';
import turretImg from '../../assets/imgs/turret_img.png';
import './style.css';

const KudosPage = () => {
    const navigate = useNavigate();

    return (
        
        <div className='kudos-page-container'>
            <div>
            <img src={logo} alt='logo' />
            </div>

            <div className='congrats-msg-container'>
                <div className="turret-img">
                    <img className='hero-turret-img' src={turretImg} alt="cartoon turret" />
                </div>
                <h1 className='congrats-msg'>Great Work !!!</h1>
            </div>

            <div className='whats-next-container'>
                <h2>What's next ?</h2>
                <h3 onClick={() => navigate('/settings')}>Move on to next level</h3>
                <h3 onClick={() => navigate('/settings')}>Try another language</h3>
            </div>
        </div>
        
    )
}

export default KudosPage;
