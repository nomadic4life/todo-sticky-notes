import React from 'react'

const TodoList = (props) => {

  return (
    <ul>
      {props.isActive ? 
        props.todoList.map(line => {
          if(line.completed) { 
            return <li key={line.id} 
              className={'completed'}
              onClick={(e) => props.changeComplete(e, props.activeId, line.id)}>{line.text}</li>
          } else {
            return <li key={line.id} 
              onClick={(e) => props.changeComplete(e, props.activeId, line.id)}>{line.text}</li>
          }
        } )
      : props.todoList.map(line => {
        if(line.completed) { 
          return <li key={line.id} 
            className={'completed'}>{line.text}</li>
        } else {
          return <li key={line.id}>{line.text}</li>
        }
      } )}
    </ul>
  );
}

export default TodoList;