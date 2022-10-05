import React, { useState, useEffect } from 'react';
import './style.css';

const GamePage = () => {

    const [questionText, updateQuestion] = useState('placeholder text')
    const [questionCounter, updateQuestionCounter] = useState(0)

    useEffect(() => {
        nextQuestion();
    }, [])

    const nextQuestion = async () => {
        let questionIndex = questionCounter + 1
        updateQuestionCounter(questionCounter + 1)
        const res = fetch(`https://jsonplaceholder.typicode.com/posts/${questionIndex}`)
        updateQuestion(await res.json())
    }

    return (
        <>
            <h1>I am the Game page!</h1>
            <span>{questionText}</span>
            <button
                className='next-question-button'
                onClick={() => nextQuestion()}
            ></button>
        </>
    )
}

export default GamePage;
