import { List, ListItem, ListItemText, TextField } from "@mui/material"
import { KeyboardEvent, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/types"
import { addSubject } from "./SubjectList.slice"

const SubjectList = () => {
    const [text, setText] = useState('')
    const subjects = useAppSelector(state => state.subjects)
    const dispatch = useAppDispatch()

    const handleKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            dispatch(addSubject(text))
            setText('')
        }
    }
    return <div>
        <h2>Subject List</h2>
        <TextField
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown = {handleKeyDown}
        />
        <List sx={{width:100, margin:"auto"}}>
            {
                subjects.map((subject, i) => {
                    return <ListItem key={i}>
                        <ListItemText
                            primary={subject}
                        />
                    </ListItem>
                })
            }
        </List>
    </div>
}

export default SubjectList