import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const asyncUpAxios = createAsyncThunk(
    'testCounter/dataFetching',
    async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
        console.log(res.data);
        return res.data;
    }
)

export const asyncUpAxios2 = createAsyncThunk(
    'testCounter/dataFetching2',
    async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(res.data);
        return res.data;
    }
)