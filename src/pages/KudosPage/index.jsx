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

            <div className='congrats-msg-content'>
                <div className='turret-img-kudos'>
                    <img className='hero-turret-img' src={turretImg} alt='cartoon turret' />
                </div>
                <h1 className='congrats-msg'>Great Work !!!</h1>
            </div>

            <div className='whats-next-content'>
                <div className='whats-next-inner'>
                    <div className='h2-title'>
                        <h2>What's next ?</h2>
                    </div>
                    <ul className='h3-title'>
                        <li><h3 onClick={() => navigate('/settings')}>Move on to next level</h3></li>                        
                        <li><h3 onClick={() => navigate('/settings')}>Try another language</h3></li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default KudosPage;
