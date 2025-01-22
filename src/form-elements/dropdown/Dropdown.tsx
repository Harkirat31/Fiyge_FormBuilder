import { DropdownElement } from "../../types";
import "./dropdown.css"

export const Dropdown =({element}:{element:DropdownElement})=>{
    return <div style={{margin:5}}>
    <label className="dropdown-label">{element.label}</label>
    <select>
        {element.options.map((option)=>{
            return <option value={option.value}>{option.text}</option>
        })}
    </select>
</div>
}