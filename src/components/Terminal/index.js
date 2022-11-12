import React, { useState } from 'react';
import './style.css';

export default function Terminal(props) {

    const displayMessagesColors = {
        correct: '#00ff00',
        incorrect: '#ff0000'
    }

    // state declaration for user feedback in the terminal


    return (
        <div className='console'>
            <h1>Console Output</h1>
            <h2
                style={
                    props.correctAnswer ? { color: displayMessagesColors.correct } : { color: displayMessagesColors.incorrect }
                }
            >
                {props.answerCheckFeedbackMsg}
            </h2>
        </div>
    );
}





