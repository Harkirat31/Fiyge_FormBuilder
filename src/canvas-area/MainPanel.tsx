import { useSelector } from "react-redux"
import { Input } from "../form-elements/Input/Input"
import { RootState, useAppDispatch } from "../store"
import { useDrop } from "react-dnd"
import { addElement, startOver, updateAllElements } from "../features/elementsSlice"
import { DropdownElement, ElementType, Form, TextAreaElement, TextInputElement } from "../types"
import { nanoid } from "@reduxjs/toolkit"
import { TextArea } from "../form-elements/text-area/TextArea"
import { Dropdown } from "../form-elements/dropdown/Dropdown"
import { addForm, updateForm } from "../features/formsSlice"

export const MainPanel = () => {
    const elements = useSelector((state: RootState) => state.elements.elements)
    const isNew = useSelector((state: RootState) => state.elements.isNew)
    const formId = useSelector((state: RootState) => state.elements.formId)
    const dispatch = useAppDispatch();

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "element",
        drop: (item: { elementType: ElementType }) => handleDrop(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver
        })
    }))

    const handleFormSave = ()=>{
        if(elements.length>0){
            if(isNew){
                dispatch(addForm({
                    formId:nanoid(),
                    formElements:[...elements]
                }))    
            }else{
                dispatch(updateForm({
                    formId:formId!,
                    formElements:[...elements]
                })) 
            }
          
        }
       
    }

    const startOverAgain = ()=>{  
            dispatch(startOver())
    }

    const handleDrop = (item: { elementType: ElementType }) => {
        if (item.elementType === ElementType.TEXTINPUT) {
            dispatch(addElement({
                id: nanoid(),
                label: "Default Label",
                type: item.elementType,
                placeHolder: "Default Placeholder Text Input"
            }))
        }
        else if (item.elementType === ElementType.TEXTAREA) {
            dispatch(addElement({
                id: nanoid(),
                label: "Default Label",
                type: item.elementType,
                placeHolder: "Default Placeholder TextArea"
            }))
        }
        else if (item.elementType === ElementType.DROPDOWN) {
            dispatch(addElement({
                id: nanoid(),
                label: "Default Label",
                type: item.elementType,
                options: [{ text: "First Value", value: "First Value" }, { text: "Second Value", value: "Second Value" }],
                placeHolder: "Default Placeholder TextArea"
            }))
        }

    }

    return <div className="dropable-area" ref={drop}>
        <h3>Form Builder</h3>
        <div>
            {elements.map((element) => {
                if (element.type === ElementType.TEXTINPUT) {
                    return <Input element={element as TextInputElement}></Input>
                }
                if (element.type === ElementType.TEXTAREA) {
                    return <TextArea element={element as TextAreaElement}></TextArea>
                }
                if (element.type === ElementType.DROPDOWN) {
                    return <Dropdown element={element as DropdownElement}></Dropdown>
                }


            })}
        </div>
        {elements.length > 0 && <>
            <button onClick={handleFormSave}>Save Form</button>
            <br></br>
            <button onClick={startOverAgain}>Start Over</button>
        </>}
    </div>
}


