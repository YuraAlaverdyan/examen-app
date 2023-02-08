import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { useAppDispatch, useAppSelector } from "../../app/types"
import { addExamen } from "../StudentList/StudentList.slice"

const Book = () => {
    const students = useAppSelector(state => state.students)
    const subjects = useAppSelector(state => state.subjects)
    const dispatch = useAppDispatch()

    const rate = (index:number, subject:string) => {
        dispatch(addExamen([index, subject]))
    }


    return <div>
        <h2>Book</h2>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Student</TableCell>
                    {
                        subjects.map((subject,i) => {
                            return <TableCell key={i} className='verticalText'>{subject}</TableCell>
                        })
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    students.map((student,i) => {
                        return <TableRow key={i}>
                            <TableCell>{student.name} {student.surname}</TableCell>
                            {
                                subjects.map((subject,j) => {
                                    let item = student.examens.find(exam => exam.subject == subject)
                                    let text = item ? item.rate : '-'

                                    return <TableCell style={{textAlign:'center', border:'1px solid black'}} key={j} onClick={() => rate(i, subject)}>
                                        <h3>{text}</h3>
                                    </TableCell>
                                })
                            }
                        </TableRow>
                    })
                }
            </TableBody>
        </Table>
    </div>
}

export default Book