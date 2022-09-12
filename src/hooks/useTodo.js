import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";




const initialState = [];

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) || [] );
    },[todos])

    const handleNewTodo = (todo) => {
        //console.log({ todo })

        const action = {
            type: '[Todo] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = ( id ) => {
        //console.log({id})
        dispatch({
            type: '[Todo] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[Todo] Toggle Todo',
            payload: id
        })
    }

    const todosCount = todos.length;
    
    const PendingTodosCount = todos.filter(todos=> !todos.done).length;

    return{
        todos,
        todosCount,
        PendingTodosCount,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}
