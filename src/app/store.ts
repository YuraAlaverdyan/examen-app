import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import StudentListReducer from '../Features/StudentList/StudentList.slice'
import SubjectListReducer from '../Features/SubjectList/SubjectList.slice'
import NavbarReducer from '../Features/Navbar/Navbar.slice'

const root = combineReducers({
    students:StudentListReducer,
    subjects:SubjectListReducer,
    navbar:NavbarReducer
})

export const store = configureStore({reducer:root})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>