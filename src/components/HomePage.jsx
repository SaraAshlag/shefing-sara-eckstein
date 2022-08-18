import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { GetAllUsers, SetAllUsers } from "../redux/users_reducer/userActions"
import { getAllUsers } from "../server_calls/UsersCalls"
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { border, color } from "@mui/system"

export const HomePage = () => {

    useEffect(() => {
        debugger
        //function that gets the data from server
        const getDataFromUser = async () => {
            let users = await getAllUsers()
            let data = users.data
            //send the data to the store
            dispatch(SetAllUsers(data))
            setSpinner(false) 
        }
        getDataFromUser();
    }, [])

    //define a variable for dispatching
    let dispatch = useDispatch()
    //get the user list from the store
    let usersList = useSelector((data) => {
        return data.users.usersList
    })

    //define variables to set the required email or name that is looked for
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [spinner,setSpinner] = useState(true)

    return <>
    {
            spinner &&
            <CircularProgress color="secondary" />
    }
        {/* inputs to enter email and name to search on changing updates the matching variable*/}
        <input type="email" name="" id="" placeholder="search by email" onChange={(e) => {
            setEmail(e.target.value)
        }} style={style}/>
        <input type="text" name="" id="" placeholder="search by name" onChange={(e) => {
            setName(e.target.value)
        }} style={style}/>
        {/* display the data */}
        <TableContainer >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Company Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        usersList != undefined &&
                        usersList.length > 0 &&
                        usersList.map((row) => <>
                            {
                                // display only if it matches the search request
                                row.email.indexOf(email) != -1 &&
                                row.name.indexOf(name) != -1 &&
                                <TableRow 
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="center">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">{row.company.name}</TableCell>
                                    {/* routes to the posts display with a parameter - the users id */}
                                    <TableCell align="center"><Link to={`Posts/${row.id}`} style={style}>posts</Link></TableCell>

                                </TableRow>
                            }

                        </>)}
                </TableBody>
            </Table>
        </TableContainer>
        <div>this I added now</div>
    </>
}
const style = {
    border: "gray  2px solid",
    backgroundColor:"light-blue",
    color:"gray"
}