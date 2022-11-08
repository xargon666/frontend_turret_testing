import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Turret } from '../../assets/imgs/turret.svg';
import './style.css';
// import 'animate.css';


const Home = () => {
    const navigate = useNavigate();
    const [phrase, setPhrase] = useState([]);  
        
    let i = 0;
    let arr = [];
        
    function handleMessage() {
        let message = ["expect", "('testing')", ".", "toBe", "('fun');"];
        
        setTimeout(() => {
          arr.push(message[i]);
          setPhrase(arr.toString().split(","));

          i++;
          
          if (i < 5) {
            handleMessage();
          }
        }, 300)
    }


    useEffect(() => {
        handleMessage();
    }, []);
   
    // useEffect(() => {
    //     document.querySelector('#tab-title').innerHTML = 'Turret Testing | Home';       
        
    // }, [])

    return (
        <>
            <div className="page-container">
                <div className="page-hero-title-container">
                    <div className="page-hero-title">
                        <h1 className='homepage-title'>Turret</h1>
                        <h1 className='homepage-title-outlined'>Testing</h1>
                    </div>
                </div>
                <div className="page-hero-content">
                    <div className="turret-img">
                        <Turret className='hero-turret-img' alt="cartoon turret" />
                    </div>
                    <p className='homepage-content-p'>{phrase}</p>
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

