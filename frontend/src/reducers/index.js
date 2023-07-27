import { combineReducers } from "redux";
import GetReducers from './GetReducers'
import authReducer from "./AuthReducer";


export const reducers = combineReducers({authReducer,GetReducers})