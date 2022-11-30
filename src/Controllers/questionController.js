import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const base_URL = 'http://localhost:5050/questions';

export const getQuestions = createAsyncThunk('question/getQuestions', async ({ language, difficulty }) => {

    try {
        const response = await axios.get(`${base_URL}?language=${language}&difficulty=${difficulty}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const getQuestionById = createAsyncThunk('question/getQuestionById', async (id) => {
    try {
        const response = await axios.get(`${base_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
