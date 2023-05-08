import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const asyncUpAxios = createAsyncThunk(
    'testCounter/dataFetching',
    async () => {
        const res = await axios.get('/api/wanter');
        console.log(res.data);
        return res.data;
    }
)

export const helperAll = createAsyncThunk(
    'testCounter/helperFetching',
    async () => {
        const res = await axios.get('/api/helper');
        console.log(res.data);
        return res.data;
    }
)

export const helperBoardSetter = createAsyncThunk(
    'testCounter/helperBoardSetter',
    async () => {
        const res = await axios.get('/api/mainHelper');
        console.log(res.data);
        return res.data;
    }
)

export const wanterBoardSetter = createAsyncThunk(
    'testCounter/wanterBoardSetter',
    async () => {
        const res = await axios.get('/api/mainWanter');
        console.log(res.data);
        return res.data;
    }
)



export const allUserData = createAsyncThunk(
    'testCounter/allUserData',
    async () => {
        const res = await axios.get('/api/user');
        console.log(res.data);
        return res.data;
    }
)