import { createSlice } from "@reduxjs/toolkit";
import { getQuestions } from "../questionController";


export const questionSlice = createSlice({
    name: "question",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder) {
        builder
            .addCase(getQuestions.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getQuestions.fulfilled, (state, action) => {
                const loadedQuestions = action.payload;
                state.data = loadedQuestions;

                state.isLoading = false;
            })
            .addCase(getQuestions.rejected, (state, action) => {
                state.error = action.error;
                state.isLoading = false;
            })
    }
});

export default questionSlice.reducer;
