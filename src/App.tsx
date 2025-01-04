import './App.css'
import Column from './components/Column/Column'
import { mockToDoList } from './utils/data'
function App() {


  return (
    <>
        <h1>Drag and Drop Example</h1>
      <div className="grid-container">
        <Column title="to-do" items={mockToDoList} type="todo"></Column>
        <Column title="in progress" type="in-progress"></Column>
        <Column title="complete" type="todo"></Column>
      </div>
    </>
  );
}

export default App
