import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../app/store';

const initialState = {
    user: {}
};

const testSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        success: (state, { payload }) => {
            state.user = payload
        }
    }
});

export default testSlicer.reducer;

export const { success } = testSlicer.actions;

export const testAction = () => {
    try {
        const users = { name: 'imran', email: 'imran@gmail.com' }
        dispatch(success(users))
    } catch (error) {
        console.log(error)
    }
}