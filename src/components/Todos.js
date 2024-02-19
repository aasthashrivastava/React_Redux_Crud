import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = ({error, todos ,handleEditId,setInput}) => {

  const dispatch = useDispatch();

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='ml-72'>
      <h1 className='mr-80 p-2'>Todos</h1>
      <ul className='ml-40 w-96 center bg-gray-600'>
        {todos.map((elem) => {
          return <li
            className='flex justify-between item-center text-white p-2'
            key={elem.id}>
            <div>{elem.text}</div>
            <div>
              <button className='mr-2'
                onClick={() => {
                  setInput(elem.text)
                 handleEditId(elem.id);
                }}
              >✏</button>
              <button onClick={() => dispatch(removeTodo(elem.id))}>X</button>
            </div>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Todos