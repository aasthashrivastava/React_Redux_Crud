import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('/api/todos');
    const data = await response.json();
    return data;
});

const initialState = {
    todos: {
        data: [{ id: 1, text: 'Hello' }],
        searchText: null,
        error: null
    },
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.data.push(todo);
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            state.todos.data = state.todos.data.filter((todo) => {
                return todo.id !== id;
            })
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            let editTodo = state.todos.data.find((elem) => elem.id === id);
            if (editTodo) {
                if (text.trim() === "") {
                    alert("Please enter valid text before updating.");
                } else {
                    editTodo.text = text;
                }
            }
        },
        searchTodoData: (state, action) => {
            const searchVal = action.payload;
            if (searchVal === "") {
                state.todos.searchText = null
            } else {
                const filterBySearch = state.todos.data.filter((item) => {
                    return item.text && item.text.toLowerCase().includes(searchVal.toLowerCase())
                })
                state.todos.searchText = filterBySearch;
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo, searchTodoData } = todoSlice.actions

export default todoSlice.reducer;

