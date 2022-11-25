import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Turret } from '../../assets/imgs/turret.svg';
import WordsAnim from '../../components/WordsAnimation';
import './style.css';


const Home = () => {
    const navigate = useNavigate();    
     
    
    // useEffect(() => {
    //     document.querySelector('#tab-title').innerHTML = 'Turret Testing | Home';       
        
    // }, [])

    return (
        <>
            <div className="page-container">
                <div className="page-hero-title-container">
                    <div className="page-hero-title">
                        <h1 className='homepage-title user-select'>Turret</h1>
                        <h1 className='homepage-title-outlined user-select'>Testing</h1>
                    </div>
                </div>
                <div className="page-hero-content">
                    <div className="turret-img">
                        <Turret className='hero-turret-img' alt="cartoon turret" />
                    </div>
                    <div className='homepage-content-p user-select'>
                        <WordsAnim/>
                    </div>
                </div>
                <div className="page-hero-buttons">
                    <button onClick={() => navigate('/settings')} className='hero-btn-outer'>
                        <div className='hero-btn-inner'>
                            <span className='hero-btn-text user-select'>Play</span>
                        </div>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Home;


