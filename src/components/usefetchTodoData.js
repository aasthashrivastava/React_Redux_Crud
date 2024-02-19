import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../features/todo/todoSlice';;

const useFetchTodoData = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    const getData = async () => {
      try {
         dispatch(fetchTodos());
      } catch (error) {
        console.error('Error fetching todos:',error);
      }
    };

    getData();
  }, [dispatch]);

  return {
    todos: todos.data,
    error: todos.error,
  };
};

export default useFetchTodoData;

