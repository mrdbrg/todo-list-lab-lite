import React from 'react'

const ToDoCard = (props) => {
  // fetch specific todo, update todo in the database, and send it back up to the parente
  // component to update on the UI
  const handleUpdate = () => {
    fetch(`http://localhost:3000/todos/${props.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({
        completed: !props.completed
      })
    })
    .then(r => r.json())
    .then(updatedTodo => {
      props.updateTodo(updatedTodo)
    })  
  } 

  // onClick fetch todo, delete todo from database, send the same id back up to the parent
  // component to delete from the UI
  const handleRemove = () => {
    fetch(`http://localhost:3000/todos/${props.id}`, {
      method: "DELETE"
    })
    props.removeTodo(props.id)
  }

    return (
    <div className="ui card">
        <div className="content">
          <div className="header">{props.title}</div>
          {/* no unnecessary wrapping or argument on click */}
          <button onClick={handleUpdate} className={`ui button ${props.completed ? "orange" : "blue"}`}>{props.completed ? "Incomplete" : "Complete"}</button>
          <button onClick={handleRemove} className="ui button red">Delete</button>
        </div>
        
    </div>
    )
}

export default ToDoCard