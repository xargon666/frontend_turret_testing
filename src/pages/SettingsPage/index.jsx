import React from 'react';
import logo from '../../assets/imgs/logo.svg';
import miniTurret from '../../assets/imgs/miniTurret.svg';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getQuestions } from '../../Controllers/questionController';
import { useSelector } from 'react-redux';

const SettingsPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const question = useSelector(state => state.question.data);
    const startGame = () => {
        console.log('start game');
        dispatch(getQuestions());
        navigate('/game');
    }

    return (
        <section className='settings-page-container'>
            <img src={logo} className='logo user-select' alt='logo' />
            <form onSubmit={() => navigate('/game')} className='settings-content'>
                <div className='settings-options'>
                    <div className='settings-cols'>
                        <h2>Languages</h2>
                        <label className='select-box'>
                            <div className='select-box-inner'>
                                <input type='radio' name='language' />
                                <span>Javascript</span>
                            </div>
                        </label>
                        <label className='select-box'>
                            <div className='select-box-inner'>
                                <input type='radio' name='language' />
                                <span>Python</span>
                            </div>
                        </label>
                    </div>

                    <div className='settings-cols'>
                        <h2>Level</h2>
                        <label className='select-box'>
                            <div className='select-box-inner'>
                                <input type='radio' name='level' />
                                <span>Easy</span>
                            </div>
                        </label>
                        <label className='select-box'>
                            <div className='select-box-inner'>
                                <input type='radio' name='level' />
                                <span>Medium</span>
                            </div>
                        </label>
                        <label className='select-box'>
                            <div className='select-box-inner'>
                                <input type='radio' name='level' />
                                <span>Hard</span>
                            </div>
                        </label>
                    </div>
                </div>

                <div className='submit-container'>
                    <p className='submit-btn'>Continue</p>
                    <input type='image' src={miniTurret} alt='continue button' className='mini-turret-img' />
                </div>
            </form>

        </section>
    )
}

export default SettingsPage;
