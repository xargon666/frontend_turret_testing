import React from 'react';
import './style.css';

const JestModal = ({open, onClose}) => {
    if(!open) return null;

    return (
        <div className='overlay' onClick={onClose}>
            <div className='modal-container' onClick={(e) => e.stopPropagation()}>
                <p onClick={onClose} className='close-btn'>X</p>
                <div className='modal-content'>
                    <h1 className='modal-h1'>Intro to Jest</h1>
                    <h2>What you should know before you start</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default JestModal;
