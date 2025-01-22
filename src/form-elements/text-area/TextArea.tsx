import { TextAreaElement} from "../../types"
import "./text-area.css"
export const TextArea = ({element}:{element:TextAreaElement}) => {
    return <div style={{margin:5}}>
        <label className="text-area-label">{element.label}</label>
        <textarea className="text-area" placeholder={element.placeHolder}></textarea>
    </div>
}