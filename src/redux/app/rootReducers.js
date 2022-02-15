import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import testSlicer from "../slicers/testSlicer";
import regionSlicer from '../slicers/regionSlicer';
import addEducationSlicer from "../slicers/addEducationSlicer";

const testConfig = {
    key: 'test',
    storage
};

const rootReducers = combineReducers({
    testState: persistReducer(testConfig, testSlicer),
    regionState: regionSlicer,
    educationState: addEducationSlicer
})

export default rootReducers;