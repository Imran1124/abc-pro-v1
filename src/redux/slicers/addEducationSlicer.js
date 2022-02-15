import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../app/store';

const initialState = {
    addEducation: []
};

const addEducationSlicer = createSlice({
    name: 'education',
    initialState,
    reducers: {
        educationSuccess: (state, { payload }) => {
            state.addEducation.push(payload);
        },
        remove: (state, { payload }) => {
            state.addEducation.splice(payload, 1);
        },
    }
});

export default addEducationSlicer.reducer;

export const { educationSuccess, remove } = addEducationSlicer.actions;

export const addEducationAction = (payload) => {
    dispatch(educationSuccess(payload))
}

export const RemoveAction = (index) => {
    dispatch(remove(index))
};