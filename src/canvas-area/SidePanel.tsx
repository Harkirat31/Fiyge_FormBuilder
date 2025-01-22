import { useDrag } from "react-dnd"
import { ElementType } from "../types"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../store"
import { updateAllElements } from "../features/elementsSlice"

const LeftPanel = () => {
    return <div>
        <div>
            <h3>Available Components</h3>
            {Object.values(ElementType).map(element => {
                return <div><DragableComponent elementType={element}></DragableComponent></div>
            })}
        </div>

        <div>
            <h3>Forms</h3>
            <Forms ></Forms>
        </div>
    </div>

}

export default LeftPanel


const DragableComponent = ({ elementType }: { elementType: ElementType }) => {
    const [isDragging, drag] = useDrag(() => ({
        type: "element",
        item: { elementType: elementType },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging
        })
    }))
    return <button className="component-button" ref={drag}>{elementType}</button>
}


const Forms = ()=>{
     const forms = useSelector((state: RootState) => state.forms.forms)
      const dispatch = useAppDispatch();
     

     if(forms.length===0){
        return <p>No Form is generated</p>
     }else{
        return <div>
        {forms.map((form,index)=>{
            return <div><button onClick={()=>{
                dispatch(updateAllElements(form))
            }}>{"Form "+index+1}</button></div>
        })}
        </div>
     }
}