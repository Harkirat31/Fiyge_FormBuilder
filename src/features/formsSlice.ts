import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Form, FormsState } from "../types";

const initialState:FormsState={
    forms:[]
}

const formsSlice=createSlice({
    name:"forms",
    initialState,
    reducers:{
        addForm:(state,action:PayloadAction<Form>)=>{
            console.log("Hello")
            state.forms.push(action.payload)
        },
        updateForm:(state,action:PayloadAction<Form>)=>{
            const formIndex = state.forms.findIndex((f)=>f.formId===action.payload.formId)
            state.forms[formIndex] = action.payload
        }
    }
})

export const {addForm,updateForm} = formsSlice.actions
export default formsSlice.reducer