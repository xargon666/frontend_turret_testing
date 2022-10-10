import React, { useState } from 'react';
import TextEditor from '../../components/Editor';
import Terminal from '../../components/Terminal';
import logo from '../../assets/img/logo.png';
import './style.css';

const GamePage = () => {
    const [title, setTitle] = useState('Test Title');
    const [instructions, setInstructions] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');


    return ( 
        <div id='content'>
            <div id='editor-side'>                
                <img src={logo} alt='logo' />
                
                <h1>{title}</h1>               
                <p>{instructions}</p>
                
                <div className='text-editor'>
                    <TextEditor />
                </div>            
                <button className='button next-button'>Next</button>
                
            </div>
            <div className='terminal-side'>
                <Terminal />
            </div>
        </div>
    )

}

export default GamePage;
