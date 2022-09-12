import React from 'react'
import { useTodo } from '../hooks'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'

export const TodoApp = () => {

    const {todos, todosCount, PendingTodosCount,handleDeleteTodo, handleNewTodo, handleToggleTodo} = useTodo();

    return (
        <div>
            <h1>Todo App({ todosCount }), <small>Pendientes: {PendingTodosCount}</small></h1>
            <hr />

            <div className='row'>
                <div className='col-7'>

                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }/>

                </div>

                <div className='col-5'>

                    <h4>Agregar To Do</h4>
                    <hr />
                    <TodoAdd 
                        onNewTodo={handleNewTodo} />

                </div>
            </div>


        </div>
    )
}
