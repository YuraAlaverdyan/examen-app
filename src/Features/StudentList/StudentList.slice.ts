import { Student, Examen } from './../../app/types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:Student[] = [
    {
        name:"Norayr", surname:"Hakobyan", examens:[
            {subject:"Math", rate:17},
            {subject:"OOP", rate:14}
        ]
    },
    {
        name:"Sirak", surname:"Ananyan", examens:[
            {subject:"JS", rate:3},
            {subject:"React", rate:17},
            {subject:"DOM", rate:18}
        ]
    },
    {
        name:"Arevik", surname:"Sargsyan", examens:[
            {subject:"DOM", rate:13},
            {subject:"Vue", rate:17},
            {subject:"JS", rate:18}
        ]
    }
]

const StudentListSlice = createSlice({
    name:"StudentList",
    initialState,
    reducers: {
        addStudent:(state, action:PayloadAction<Student>) => {
            state.push(action.payload)
        },
        addExamen:(state, action:PayloadAction<[number,string]>) => {
            const [index, subject] = action.payload
            let taken = state[index].examens.findIndex(a => a.subject === subject)
            if (taken === -1) {
                let obj = {subject, rate:0} as Examen
                state[index].examens.push(obj)
            } else {
                let currentExamen = state[index].examens[taken]
                if (currentExamen.rate === 20) {
                    state[index].examens.splice(taken,1)
                } else {
                    currentExamen.rate++
                }
            }
        }
    }
})

export default StudentListSlice.reducer

export const {addStudent, addExamen} = StudentListSlice.actions