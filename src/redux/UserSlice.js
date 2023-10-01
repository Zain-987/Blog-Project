import { createSlice } from "@reduxjs/toolkit";

let user = null
const UserSlice = createSlice({
    name : "user",
    initialState : {user},
    reducers : {
        setUser : (state,actions) => {
            let user = actions.payload
            state.user = user
        },
        resetUser : (state) => {
            state.user = null
        },
    } 
})

export const {setUser , resetUser} = UserSlice.actions
export default UserSlice.reducer