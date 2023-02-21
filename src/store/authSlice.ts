import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    data: UserDataInterface,
    isAuth: boolean,
    initialized: boolean
}
export interface UserDataInterface { 
        email: string | null,
        login: string | null,
        avatar: string | null,
}

const initialState: AuthState = {
    data: {
        email: null, // получаем с бекенда
        login: null,
        avatar: null,  // получаем с бекенда
    },
    isAuth: false,
    initialized: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUserData: (state, action: PayloadAction<UserDataInterface> ) => {
            state.data = action.payload
        },
        setToggleLogIn: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },
        setInitialized: (state, action: PayloadAction<boolean>) => {
            state.initialized = action.payload
        },
    },
})

export const { setAuthUserData, setToggleLogIn, setInitialized } = authSlice.actions

export default  authSlice.reducer