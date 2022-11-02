import { configureStore } from '@reduxjs/toolkit'
import questionReducer from '../Controllers/redux/questionSlice'
import codeReducer from '../Controllers/redux/codeSlice'

export const store = configureStore({
    reducer: {
        question: questionReducer,
        code: codeReducer
    }
})
