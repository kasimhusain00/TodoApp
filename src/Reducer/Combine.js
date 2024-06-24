import {combineReducers} from 'redux';
import { numvalue, tododata } from './Reducer';

export const rootReducer = combineReducers ({
    numvalue,
    tododata,
})