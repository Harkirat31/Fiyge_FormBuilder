import { useState } from "react"
import { TextInputElement } from "../../types"
import "./input.css"
import { useAppDispatch } from "../../store"
import { deleteElement, updateElement } from "../../features/elementsSlice"

export const Input = ({element}:{element:TextInputElement}) => {

    const [inputElement,setInputElement] = useState<TextInputElement>(element)

    const [isEditOpen,setIsEditOpen] = useState<boolean>(false)

    const dispatch = useAppDispatch()
    
    const handleUpdate = ()=>{
        dispatch(updateElement(inputElement))
        setIsEditOpen(false)
    }

    const handleDelete = (id:string)=>{
        dispatch(deleteElement(id))
    }

    return <div style={{margin:5}}>
        <label className="input-label">{element.label}</label>
        <input className="text"   type="text" placeholder={element.placeHolder}></input>
        <button onClick={()=>setIsEditOpen(true)} style={{marginLeft:5}}>Edit</button>
        <button onClick={()=>handleDelete(element.id)} style={{marginLeft:5}}>Delete</button>
        {isEditOpen && <div className="edit">
            <div>
            <br></br>
            <label>Change Label</label>
            <input value={inputElement.label} onChange={
                (e)=>setInputElement({...inputElement,label:e.target.value})
                }></input>
            </div>
            <br></br>
            <div>
            <label>Change Placeholder</label>
            <input value={inputElement.placeHolder} onChange={
                (e)=>setInputElement({...inputElement,placeHolder:e.target.value})
                }></input>
            </div>
            <br></br>
            <button onClick={handleUpdate} className="submit_button">Submit</button>

            <button onClick={()=>setIsEditOpen(false)} className="submit_button">Cancel</button>

        </div>}
    </div>
}