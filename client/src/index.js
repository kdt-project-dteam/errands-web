import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { asyncUpAxios, asyncUpAxios2 } from './store/testCounter';

const reducerSlice = createSlice({
  name: 'store',
  initialState: {},
  reducers: {
    someAction: function () {

    }
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpAxios.pending, (state, action) => {
      state.status = 'Loading'
    })
    builder.addCase(asyncUpAxios.fulfilled, (state, action) => {
      state.value = action.payload
      state.status = 'complete'
    })
    builder.addCase(asyncUpAxios.rejected, (state, action) => {
      state.status = 'fail'
    })
    builder.addCase(asyncUpAxios2.pending, (state, action) => {
      state.status = 'Loading'
    })
    builder.addCase(asyncUpAxios2.fulfilled, (state, action) => {
      state.value2 = action.payload
      state.status = 'complete'
    })
    builder.addCase(asyncUpAxios2.rejected, (state, action) => {
      state.status = 'fail'
    })
  }
})

const store = configureStore({
  reducer: {
    someReducer: reducerSlice.reducer
  }
}, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);