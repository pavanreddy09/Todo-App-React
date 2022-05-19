import { useState } from 'react';
import './App.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {
  const [val,setVal] = useState("");
  const [todo,setTodo] = useState([]);

  const handleChange = (e) => {
     setVal(e.target.value)
  }

  const handleClick = () => {
    setTodo([...todo,val])
    setVal("")
  }
  return (
    <div className="App">
      <TodoList data={todo}/>
      <TodoInput value={val} onchange={handleChange} onclick={handleClick}/>
      
    </div>
  );
}

export default App;
