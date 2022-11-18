import { createSlice } from "@reduxjs/toolkit";


export const codeSlice = createSlice({
    name: "code",
    initialState: {
        codeData: [],
        value: `// starting code...`,
        isLoading: false,
        error: null
    },
    reducers: {
        setCode: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setCode } = codeSlice.actions;

export default codeSlice.reducer;
