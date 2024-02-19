import { useDispatch, useSelector } from 'react-redux';
import Todos from './Todos';
import useFetchTodoData from './usefetchTodoData';
import { useState } from 'react';
import { addTodo, searchTodoData, updateTodo } from '../features/todo/todoSlice';
import Search from './Search';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch();
  const { todos, error } = useFetchTodoData();

  const handleEditId = (id) => {
    setEditId(id)
    handleAddTodo()
  }

  const handleAddTodo = () => {
    if (editId !== null) {
      dispatch(updateTodo({ id: editId, text: input }));
      setEditId(null)
    } else {
      input ? dispatch(addTodo(input)) : console.log("");
    }
  }

  const handleSearchTodo = (searchVal) => {
    setSearchValue(searchVal)
    dispatch(searchTodoData(searchVal))
  }

  const filterBySearch = todos.filter((item) =>
    item.text.toLowerCase().includes(searchValue.toLowerCase()));

  // console.log(todos)

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        handleAddTodo()
        setInput('');
      }}
        className='text-2xl font-bold m-5'
      >
        <input type='text'
          placeholder='Enter....'
          className='border m-2 text-md'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'
          className='m-2 '>
          {editId !== null ? "Update" : "Add"}
        </button>
      </form>
      <Search searchValue={searchValue} handleSearchTodo={handleSearchTodo} />
      <Todos error={error} todos={filterBySearch} handleEditId={handleEditId} setInput={setInput} />
    </div>
  )
}

export default AddTodo