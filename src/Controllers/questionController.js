import axios from 'axios';

export const getQuestions = async () => {
    const questions = await axios.get('http://localhost:3000/questions');
    return questions;
}
