import React from 'react';
import logo from '../../assets/imgs/logo.png';
import './style.css';

const SettingsPage = () => {

    return (
        <section className='settings-page-container'>
            <img src={logo} alt='logo' />

            <form  method='post' className='settings-content'>
                <div className='settings-cols'>
                    <h2>Languages</h2>                    
                    <label className='select-box'>
                        <div className='select-box-inner'>
                            <input type='radio' name='language'/>
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

                <div>
                    <input type='submit' value='Continue' className='submit-btn' />
                </div>            
            </form>

        </section>
    )
}

export default SettingsPage;
