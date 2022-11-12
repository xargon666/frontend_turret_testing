import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextEditor from '../../components/Editor';
import Terminal from '../../components/Terminal';
import logo from '../../assets/imgs/logo.png';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCode } from '../../Controllers/redux/codeSlice';
import { getQuestions } from '../../Controllers/questionController';

const GamePage = () => {
    // react-router-dom hook to navigate to other pages and dispatch to redux store
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // local state declarations
    const [title, setTitle] = useState("placeholder")
    const [instructions, setInstructions] = useState("placeholder")
    const [questionCounter, setQuestionCounter] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [answerCheckFeedbackMsg, setAnswerCheckFeedbackMsg] = useState("")

    // redux state calls to get code and questions
    const { question } = useSelector(state => state);
    const code = useSelector((state) => state.code.value);

    // Check to see if the answer the user provided is the correct answer
    const checkCorrectAnswer = () => {
        console.log('checking answer');
        if (code === question.data[questionCounter].jest_function_complete) {
            console.log('correct answer');
            setCorrectAnswer(true);
            setAnswerCheckFeedbackMsg("Correct Answer!")
        } else if (code !== question.data[questionCounter].jest_function_complete) {
            console.log('incorrect answer');
            setCorrectAnswer(false);
            setAnswerCheckFeedbackMsg("Incorrect answer, try again!")
        }
    }

    // progress to the next question, if there are no more questions, navigate to the end page. 
    const nextQuestion = () => {
        if (questionCounter < question.data.length - 1 && correctAnswer) {
            console.log(question.data[questionCounter].jest_function_incomplete);
            setQuestionCounter(questionCounter + 1);
            dispatch(setCode(question.data[questionCounter].jest_function_incomplete));
            setCorrectAnswer(false);
            setAnswerCheckFeedbackMsg("");
        }

        if (questionCounter === question.data.length - 1 && correctAnswer) {
            navigate('/kudos');
        }
    }

    useEffect(() => {
        try {
            dispatch(getQuestions()).then((res) => {
                setTitle(res.payload[questionCounter].title)
                setInstructions(res.payload[questionCounter].description)
                dispatch(setCode(res.payload[questionCounter].jest_function_incomplete))
            });
        } catch (error) {
            console.log(error);
        }
    }, [dispatch, questionCounter]);

    return (
        <div id='content'>
            <div className='editor-side'>
                <img src={logo} alt='logo' />

                <h1 className='test-title'>{title}</h1>
                <p className='test-instructions'>{instructions}</p>

                <div className='text-editor'>
                    <TextEditor code={code} />
                </div>
                <button
                    className='check-btn-outer'
                    onClick={checkCorrectAnswer}
                >
                    <div className='check-btn-inner'>
                        <span className='next-btn-text'>Check</span>
                    </div>
                </button>
                <button
                    className={correctAnswer ? 'next-btn-outer' : 'next-btn-disabled-outer'}
                    onClick={nextQuestion}
                >
                    <div className={correctAnswer ? 'next-btn-inner' : 'next-btn-disabled- inner'}>
                        <span className='next-btn-text'>Next</span>
                    </div>
                </button>

            </div>
            <div className='terminal-side'>
                {/* <div className="question-function">
                    <h1 className='test-title'>Question Function</h1>
                    <TextEditor code={question[questionCounter].jest_function_incomplete} />
                </div> */}
                <div className='terminal-window'>
                    <Terminal correctAnswer={correctAnswer} answerCheckFeedbackMsg={answerCheckFeedbackMsg} />
                </div>
            </div>
        </div>
    )

}

export default GamePage;
