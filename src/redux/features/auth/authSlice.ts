import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
    email: null | string;
    token: null | string;
}

const initialState: TInitialState = {
    email: null,
    token: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const {email, token} = action.payload;
            state.email = email;
            state.token = token;
        },
        logOut: (state) => {
            state.email = null;
            state.token = null;
        }
    }
});


export const {setUser, logOut} = authSlice.actions;
export default authSlice.reducer;