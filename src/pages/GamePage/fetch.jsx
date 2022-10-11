import React, { useState, useEffect } from 'react';
import './style.css';

const GamePage = () => {

    const [questionText, updateQuestion] = useState({ title: "placeholder" })
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [questionCounter, updateQuestionCounter] = useState(0)

    useEffect(() => {
        fetchQuestion();
    }, [])

    const fetchQuestion = async () => {
        let questionIndex = questionCounter + 1
        updateQuestionCounter(questionCounter + 1)
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${questionIndex}`,
            {
                method: "GET"
            }
        )
        console.log({ res })
        updateQuestion(await res.json())
    }

    return (
        <>
            <h1>I am the Game page!</h1>
            <div className="gamepage-content">
                <span>{
                    questionText.title
                }
                </span>
                <button
                    className='next-question-button'
                    onClick={() => fetchQuestion()}
                >Next Question</button>
            </div>
        </>
    )
}

export default GamePage;
