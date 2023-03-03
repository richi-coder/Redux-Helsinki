import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import App from './App'
import './index.css'
import filterReducer, { filterChange } from './reducers/filterReducer'
import noteReducer, { createNote } from "./reducers/noteReducer"

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  }
})
console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

