import { DndProvider } from 'react-dnd'
import './App.css'
import { MainPanel } from './canvas-area/MainPanel'
import LeftPanel from './canvas-area/SidePanel'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
  <DndProvider backend={HTML5Backend}>
    <div className='panel'>
      <div className='left-panel'>
        <LeftPanel ></LeftPanel>
      </div>
      <div className='divider'></div>
      <div className='main-panel'>
        <MainPanel></MainPanel>
      </div>
    </div>
    </DndProvider>
  )
}

export default App
