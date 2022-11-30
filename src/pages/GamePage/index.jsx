import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Collapsible, Terminal, TextEditor } from '../../components';
import { setCode } from '../../Controllers/redux/codeSlice';
import { getQuestions } from '../../Controllers/questionController';
import { ReactComponent as RunBtn } from '../../assets/imgs/runBtn.svg';
import logo from '../../assets/imgs/logo.svg';
import './style.css';

const GamePage = (props) => {
    // react-router-dom hook to navigate to other pages and dispatch to redux store
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // local state declarations
    const [title, setTitle] = useState("placeholder")
    const [instructions, setInstructions] = useState("placeholder")
    const [jsFunction, setJsFunction] = useState("placeholder")
    const [hint, setHint] = useState("");
    const [codeQuestion, setCodeQuestion] = useState("placeholder")
    const [questionCounter, setQuestionCounter] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [answerCheckFeedbackMsg, setAnswerCheckFeedbackMsg] = useState("");

    // redux state calls to get code and questions
    const { question } = useSelector(state => state);
    const code = useSelector((state) => state.code.value);

    // Check to see if the answer the user provided is the correct answer
    const checkCorrectAnswer = () => {
        if (
            code.replace(/(\r\n|\n|\r|\s|\n\s*\n)/gm, '')
            ===
            question.data[questionCounter].code_answer.replace(/(\r\n|\n|\r|\s|\n\s*\n)/gm, '')
        ) {
            console.log('correct answer');
            setCorrectAnswer(true);
            setAnswerCheckFeedbackMsg(question.data[questionCounter].success_message);
        } else if (
            code.replace(/\n\s/g, '')
            !==
            question.data[questionCounter].code_answer.replace(/\n\s/g, '')
        ) {
            console.log('incorrect answer');
            setCorrectAnswer(false);
            setAnswerCheckFeedbackMsg(question.data[questionCounter].failed_message)
        }
    }

    // progress to the next question, if there are no more questions, navigate to the end page. 
    const nextQuestion = () => {
        if (questionCounter < question.data.length - 1 && correctAnswer) {
            setQuestionCounter(questionCounter + 1);
            setValues(question.data);
            setCorrectAnswer(false);
            setAnswerCheckFeedbackMsg("");
        }

        if (questionCounter === question.data.length - 1) {
            navigate('/kudos');
        }
    }
    function setValues(data) {
        new Promise((resolve, reject) => {
            setTitle(data[questionCounter].title);
            setInstructions(data[questionCounter].description);
            setJsFunction(data[questionCounter].function);
            setHint(data[questionCounter].hint);
            setCodeQuestion(data[questionCounter].code_question);
            dispatch(setCode(data[questionCounter].code_question));
            resolve();
        })
    }

    useEffect(() => {
        console.log(question.data.length);
        if (question.data.length === 0) {
            navigate('/kudos');
        }
        try {
            console.log('getting questions');
            let queryParams = {
                language: props.lang,
                difficulty: props.difficulty
            }
            dispatch(getQuestions(queryParams)).then((res) => {
                console.log('questions received');
                setValues(res.payload);
            });
        } catch (error) {
            console.log(error);
        }
    }, [dispatch, questionCounter]);


    return (
        <div className='game-page'>
            <img src={logo} className='logo user-select' alt='logo' />
            <section className='game-container'>

                <div className='left-col'>
                    <h1 className='test-title'>{title}</h1>
                    <p className='test-instructions'>{instructions}</p>

                    <div className='test-help'>
                        <Collapsible counter={questionCounter} hint={hint} question={question} />
                    </div>
                </div>

                <div className='right-col'>
                    <div className='text-editor1'>
                        <TextEditor readOnly={true} function={jsFunction} />
                    </div>
                    <div className='text-editor2'>
                        <TextEditor code={codeQuestion} />
                    </div>


                    {/* <div className="question-function">
                        <h1 className='test-title'>Question Function</h1>
                        <TextEditor code={question[questionCounter].code_question} />
                    </div> */}
                    <div className='terminal-row'>
                        <div className='run-btn-container'>
                            <button className='run-btn'>
                                <RunBtn alt='run button' onClick={checkCorrectAnswer} />
                            </button>
                        </div>
                        <div className='terminal-window'>
                            <div className='terminal'>
                                <Terminal correctAnswer={correctAnswer} answerCheckFeedbackMsg={answerCheckFeedbackMsg} />
                            </div>
                        </div>
                        <div className='next-btn'>
                            <button className={correctAnswer ? 'next-btn-outer' : 'next-btn-disabled-outer'}
                                onClick={nextQuestion}
                            >
                                <div className={correctAnswer ? 'next-btn-inner' : 'next-btn-disabled-inner'}>
                                    <span className='next-btn-text user-select'>Next</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default GamePage;
