import React from 'react';
import { useNavigate } from 'react-router-dom';
import WordsAnim from '../../components/WordsAnimation';
import { ReactComponent as Turret } from '../../assets/imgs/turret.svg';
import logo from '../../assets/imgs/logo.svg';
import './style.css';

const KudosPage = () => {
    const navigate = useNavigate();

    return (
        
        <section className='kudos-page-container'>
            <img src={logo} className='logo user-select' alt='logo' />
            <div className='congrats-msg-content user-select'>
                {/* <div className='turret-img-kudos'>
                    <img className='hero-turret-img' src={turretImg} alt='cartoon turret' />
                </div> */}
                <div className="turret-img">
                    <Turret className='hero-turret-img' alt="cartoon turret" />
                    <div className='congrats-msg'>
                        <WordsAnim phrase={["Great ", "Work", "!", "!", "!"]} />
                    </div>
                </div>
            </div>

            <div className='whats-next-content'>
                <div className='whats-next-inner'>
                    <div className='h2-content'>
                        <h2>What's next ?</h2>
                    </div>
                    <div className='h3-content'>
                        <h3 className='h3-title' onClick={() => navigate('/settings')}>Move on to next level</h3>
                        <h3 className='h3-title' onClick={() => navigate('/settings')}>Try another language</h3>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default KudosPage;
