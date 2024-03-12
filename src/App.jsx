  import { Link } from 'react-router-dom'
  import { useEffect, useState } from 'react';
  import Item from './componentes/Item';

  function App() {
    const [todos, setTodos] = useState([]);


    useEffect(() => {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    }, []);

    return (
      <div>
        <div>
      <h1>ToDo list </h1>

      {todos.map((todo, index) => (
    <Item key={index} to={`/Detalle/${index+1}`} title={todo.title} />
  ))}

        </div>

        <Link to={'/Add'}> <button>New To-Do</button> </Link>
        
      </div>
    )
  }

  export default App
