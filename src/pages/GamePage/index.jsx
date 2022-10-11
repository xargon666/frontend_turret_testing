import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextEditor from '../../components/Editor';
import Terminal from '../../components/Terminal';
import logo from '../../assets/imgs/logo.png';
import './style.css';

const GamePage = () => {
    const [title, setTitle] = useState("placeholder")
    const [instructions, setInstructions] = useState("placeholder")
    const [questionCounter, updateQuestionCounter] = useState(0)
    const navigate = useNavigate();
    const api = 'https://jsonplaceholder.typicode.com/posts/'
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        fetchQuestion();
    }, [])

    const fetchQuestion = async () => {
        let questionIndex = questionCounter + 1
        updateQuestionCounter(questionIndex)
        let res = await fetch(`${api}${questionIndex}`)
        let json = await res.json()
        setInstructions(json.body)
        setTitle(json.title)
    }

    return ( 
        <div id='content'>
            <div className='editor-side'>                
                <img src={logo} alt='logo' />
                
                <h1 className='test-title'>{title}</h1>               
                <p className='test-instructions'>{instructions}</p>
                
                <div className='text-editor'>
                    <TextEditor />
                </div>            
                <button 
                onClick={() => fetchQuestion()} 
                className='next-btn-outer'
                >
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
