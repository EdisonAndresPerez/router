import { useEffect, useState } from "react";



function Add (){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [creation, setCreation] = useState("");
    const [todos, setTodos] = useState([]);


    //consultar que es esto
    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    //consultar que es esto
    const handleSubmit = (e) => {
        e.preventDefault(); 
    
        const newTodo = { title, description, creation };

        const updatedTodos = [...todos, newTodo];

        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    
        setTitle("");
        setDescription("");
        setCreation("");

        setTodos(updatedTodos);

        window.location.href = "/";
    };


    return(
        <div>
            <h1>formulario</h1>
                <form onSubmit={handleSubmit}>
                    <label>Ingresa El Titulo</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            
                    <label>Ingrese la descripcion</label>
                    <input type="descripcion" value={description} onChange={(e) => setDescription(e.target.value)} />

                    <label>Ingrese la fecha</label>
                    <input type="date" value={creation} onChange={(e) => setCreation(e.target.value)}/>
                   <button type="submit" >Guardar</button>
                </form>
        </div>
        
    )
}

export default Add;