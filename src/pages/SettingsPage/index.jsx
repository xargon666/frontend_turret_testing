import React, { useState } from 'react';
import logo from '../../assets/imgs/logo.svg';
import miniTurret from '../../assets/imgs/miniTurret.svg';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getQuestions } from '../../Controllers/questionController';
import { useSelector } from 'react-redux';

const SettingsPage = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const question = useSelector(state => state.question.data);

    const startGame = () => {
        dispatch(getQuestions(props.lang, "easy"));
        navigate('/game');
    }

    const changeLang = (e) => {
        props.setLang(e.target.value);
    }

    const changeDifficulty = (e) => {
        props.setDifficulty(e.target.value);
    }

    return (
        <section className='settings-page-container'>
            <img src={logo} className='logo user-select' alt='logo' />
            <form onSubmit={startGame} className='settings-content'>
                <div className='settings-options'>
                    <div className='settings-cols'>
                        <h2>Languages</h2>
                        <label className='select-box'>
                            <div className='select-box-inner'>
                                <input onChange={changeLang} type='radio' name='language' value={"javascript"} required />
                                <span>Javascript</span>
                            </div>
                        </label>
                        <label className='select-box'>
                            <div className='select-box-inner'>
                                <input onChange={changeLang} type='radio' name='language' value={"python"} required />
                                <span>Python</span>
                            </div>
                        </label>
                    </div>

                    <div className='settings-cols'>
                        <h2>Level</h2>
                        <label className='select-box'>
                            <div className='select-box-inner'>
                                <input onChange={changeDifficulty} type='radio' name='level' value={"easy"} required />
                                <span>Easy</span>
                            </div>
                        </label>
                        <label className='select-box'>
                            <div className='select-box-inner'>
                                <input onChange={changeDifficulty} type='radio' name='level' value={"medium"} required />
                                <span>Medium</span>
                            </div>
                        </label>
                        <label className='select-box'>
                            <div className='select-box-inner'>
                                <input onChange={changeDifficulty} type='radio' name='level' value={"hard"} required />
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
