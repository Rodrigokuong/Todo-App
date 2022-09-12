import React from 'react'
import { TodoItem } from './TodoItem'


export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {

  return (
    <div>
      <ul className='list-group'>
        {
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todos={todo}
              onDeleteTodo={onDeleteTodo}
              onToggleTodo={onToggleTodo} />
          ))
        }
      </ul>
    </div>
  )
}
