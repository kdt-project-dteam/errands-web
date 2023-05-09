import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allUserData, asyncUpAxios, helperAll, helperBoardSetter, wanterBoardSetter } from './store/testCounter';

const reducerSlice = createSlice({
  name: 'store',
  initialState: {},
  reducers: {
    someAction: function () {

    },
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
    builder.addCase(helperBoardSetter.pending, (state, action) => {
      state.status = 'Loading'
    })
    builder.addCase(helperBoardSetter.fulfilled, (state, action) => {
      state.helperBoard = action.payload
      state.status = 'complete'
    })
    builder.addCase(helperBoardSetter.rejected, (state, action) => {
      state.status = 'fail'
    })
    builder.addCase(wanterBoardSetter.pending, (state, action) => {
      state.status = 'Loading'
    })
    builder.addCase(wanterBoardSetter.fulfilled, (state, action) => {
      state.wanterBoard = action.payload
      state.status = 'complete'
    })
    builder.addCase(wanterBoardSetter.rejected, (state, action) => {
      state.status = 'fail'
    })
    builder.addCase(helperAll.pending, (state, action) => {
      state.status = 'Loading'
    })
    builder.addCase(helperAll.fulfilled, (state, action) => {
      state.helperAll = action.payload
      state.status = 'complete'
    })
    builder.addCase(helperAll.rejected, (state, action) => {
      state.status = 'fail'
    })
    builder.addCase(allUserData.pending, (state, action) => {
      state.status = 'Loading'
    })
    builder.addCase(allUserData.fulfilled, (state, action) => {
      state.allUserData = action.payload
      state.status = 'complete'
    })
    builder.addCase(allUserData.rejected, (state, action) => {
      state.status = 'fail'
    })
  }
})

export const newStore = createSlice({
  name: "newStore",
  initialState: {
    isLogin: false,
  },
  reducers: {
    userInfoReducers: function (state, action) {
      state.isLogin = action.payload.isLogin;
      state.userInfo = action.payload.userInfo;
    },
    userLogout: function (state, action) {
      state.isLogin = action.payload.isLogin;
      state.userInfo = null;
    }
  }
})

export const store = configureStore({
  reducer: {
    someReducer: reducerSlice.reducer,
    newReducer: newStore.reducer
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