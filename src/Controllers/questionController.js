import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const base_URL = 'http://localhost:5050/questions';

export const getQuestions = createAsyncThunk('question/getQuestions', async () => {
    try {
        const response = await axios.get(base_URL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const getQuestionById = createAsyncThunk('question/getQuestionById', async (id) => {
    try {
        const response = await axios.get(`${base_URL}/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});
