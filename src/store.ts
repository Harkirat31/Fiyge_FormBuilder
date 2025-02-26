import { configureStore } from "@reduxjs/toolkit";
import elementReducer from './features/elementsSlice'

import formsReducer from './features/formsSlice'
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer:{
        elements:elementReducer,
        forms:formsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type  AppDispatch = typeof store.dispatch

export const  useAppDispatch = ()=>useDispatch<AppDispatch>()