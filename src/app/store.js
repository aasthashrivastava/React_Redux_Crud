import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
import {thunk} from 'redux-thunk';

const store = configureStore({
    reducer:todoReducer,
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),

})

export default store;