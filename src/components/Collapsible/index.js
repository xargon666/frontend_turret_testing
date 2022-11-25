import React, { useState } from 'react';
import JestModal from '../JestModal';
import './style.css';

function Collapsible() {
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className='toggle-container'>
            <button className='toggle-btn' onClick={toggle}>Need a hint?
            <span className='triangle-down'> </span></button>
            {open && (
                <div className='toggle-content'>
                    <button className='modal-btn' onClick={() => setOpenModal(true)}>Intro to Jest</button>
                    <JestModal open={openModal} onClose={() => setOpenModal(false)} />

                    <div className='hint'> Placeholder for HINT</div>
                </div>
            )}
        </div>
    )
}

export default Collapsible;
