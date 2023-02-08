import { Button } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/types"
import { switchPage } from "./Navbar.slice"

const Navbar = () => {
    const currentPage = useAppSelector(state => state.navbar.activePage)
    const dispatch = useAppDispatch()
    return <div>
        <h2>Navbar - {currentPage}</h2>
        <Button onClick={() => dispatch(switchPage("Book"))}>Book</Button>
        <Button onClick={() => dispatch(switchPage("Students"))}>Student List</Button>
        <Button onClick={() => dispatch(switchPage("Subjects"))}>Subject List</Button>
    </div>
}

export default Navbar