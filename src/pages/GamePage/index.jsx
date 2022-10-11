import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextEditor from '../../components/Editor';
import Terminal from '../../components/Terminal';
import logo from '../../assets/imgs/logo.png';
import './style.css';

const GamePage = () => {
    const [title, setTitle] = useState('Test Title');
    const [instructions, setInstructions] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');
    const navigate = useNavigate();


    return ( 
        <div id='content'>
            <div className='editor-side'>                
                <img src={logo} alt='logo' />
                
                <h1 className='test-title'>{title}</h1>               
                <p className='test-instructions'>{instructions}</p>
                
                <div className='text-editor'>
                    <TextEditor />
                </div>            
                <button onClick={() => navigate('/game')} className='next-btn-outer'>
                    <div className='next-btn-inner'>
                        <span className='next-btn-text'>Next</span>
                    </div>
                </button>
                
            </div>
            <div className='terminal-side'>
                <Terminal />
            </div>
        </div>
    )

}

export default GamePage;
