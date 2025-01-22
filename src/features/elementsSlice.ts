import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Form, FormElement, FormElementsState } from "../types";

const initialState:FormElementsState={
    elements:[],
    isNew:true
}

const elementsSlice=createSlice({
    name:"elements",
    initialState,
    reducers:{
        addElement:(state,action:PayloadAction<FormElement>)=>{
            state.elements.push(action.payload)
        },
        updateElement:(state,action:PayloadAction<FormElement>)=>{
            const elememtIndex = state.elements.findIndex((e)=>e.id===action.payload.id)
            state.elements[elememtIndex] = action.payload
        },
        deleteElement:(state,action:PayloadAction<string>)=>{
            state.elements = state.elements.filter((element)=>element.id!=action.payload)
        },
        updateAllElements:(state,action:PayloadAction<Form>)=>{
            state.elements = action.payload.formElements
            state.isNew=false
            state.formId = action.payload.formId
        },
        startOver:(state)=>{
            state.elements=[]
            state.isNew=true
            state.formId=undefined

        }
    }
})

export const {addElement,updateElement,updateAllElements,startOver,deleteElement} = elementsSlice.actions
export default elementsSlice.reducer