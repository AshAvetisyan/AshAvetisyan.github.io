import './App.css';
import { useReducer, useState } from 'react';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';



function App() {

  function reducer(state, action) {

    if(action.type == "add") {

      return [
        ...state,
        {
          id: Math.random(),
          text: action.payload.text,
          isCompleted: false
        }
      ]

    } else if (action.type == "delete") {

      return state.filter((t) =>  t.id !== action.payload.id)

    } else if(action.type == "change") {

      return state.map((todo) => {
        if(todo.id === action.payload.newTodo.id) {
          return action.payload.newTodo;
        }
        return todo;
      })

    } else if(action.type == "deleteCompleted") {
      return state.filter((todo) => !todo.isCompleted )
    }
    
    
  }

  const [todos, dispach] = useReducer(reducer, [
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false
    }
  ])


  return (
    <div className="App">

      <span className='GenSpan'>Todos</span>

      <div className="mainDiv">

      <TodoHeader onAdd={(text) => {
        dispach({
          type: "add",
          payload: {
            text: text
          }
        });
      }} />
      <TodoList
        todos={todos}
        onDelete={(todo) => {

          dispach({
            type: "delete", 
            payload: {
              id: todo.id
            }
          })
        }}

        onChange={(newTodo) => {
          dispach({
            type: "change",
            payload: {
              newTodo: newTodo
            }
          })
        }}

      />
      <TodoFooter 
        todos={todos}
         onClearCompleted={() => {
           dispach({
             type: "deleteCompleted",

           })
         }}
      />
      </div>
    </div>
  )
}

export default App;
