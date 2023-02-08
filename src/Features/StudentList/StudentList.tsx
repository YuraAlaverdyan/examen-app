import { List, ListItem, ListItemText, TextField } from "@mui/material"
import { KeyboardEvent, useState } from "react"
import { Student, useAppDispatch, useAppSelector } from "../../app/types"
import { addStudent } from "./StudentList.slice"

const StudentList = () => {
    const students = useAppSelector(state => state.students)
    const dispatch = useAppDispatch()
    const [text, setText] = useState('')
    const handleKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            const [name, surname] = text.split(' ')
            let student = {name, surname, examens:[]} as Student
            dispatch(addStudent(student))
            setText('')
        }
    }
    return <div>
        <h2>Student List</h2>
        <TextField
            value={text}
            onChange = {e => setText(e.target.value)}
            onKeyDown={handleKeyDown}
        />
        <List sx={{width:200, margin: "auto"}}>
            {
                students.map((student, i) => {
                    return <ListItem key={i}>
                        <ListItemText
                            primary={student.name + " " + student.surname}
                        />
                    </ListItem>
                })
            }
        </List>
    </div>
}

export default StudentList