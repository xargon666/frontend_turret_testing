import { createSlice } from "@reduxjs/toolkit";
import { getQuestions } from "../questionController";


export const questionSlice = createSlice({
    name: "question",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {
        setCode: (state, action) => {
            state.value = action.payload;
        }
    },
    extraReducers: {
        [getQuestions.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getQuestions.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.value = action.payload;
        },
        [getQuestions.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }
    }
});

export const { setCode } = questionSlice.actions;

export default questionSlice.reducer;
