import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { AddPost, SetAllPosts } from "../redux/post_reducer/postActions"
import { getAllPosts } from "../server_calls/postCalls"
import { AddPostComp } from "./AddPostComp"

export const Posts = () => {
 
    useEffect(() => {
        //function that gets the data from server
        const getDataFromUser = async () => {
            let posts = await getAllPosts()
            //send the data to the store
            dispatch(SetAllPosts(posts))
            setSpinner(false)
        }
        getDataFromUser();
    }, [])
    //get the user list from the store
    let postList = useSelector((data) => {
        debugger
        return data.post.postList
    })
    //define a variable for dispatching
    let dispatch = useDispatch()
    //define a variable to extract the parameter from the queryString
    let params = useParams()
    //define a to specify wether to show the dialog or not
    const [showDialog, setShowDialog] = useState(false)

    const [spinner, setSpinner] = useState(true)

    return <>
    <div style={{}}></div>
        {
            spinner &&
            <CircularProgress color="secondary" />
        }
        {
            // press the button to open bthe dialog
            !showDialog &&
            <input type="button" value="add post" onClick={(e) => {
                setShowDialog(true)
            }} style={style} />
        }
        {
            // the dialog component
            showDialog &&
            <AddPostComp userId={params.id} id={postList[postList.length - 1].id + 1} setShow={setShowDialog}></AddPostComp>
        }
        {/* display the data */}
        <TableContainer >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">title</TableCell>
                        <TableCell align="center">body</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        postList != undefined &&
                        postList.length > 0 &&
                        postList.map((row) => <>
                            {
                                row.userId == params.id &&
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{row.title}</TableCell>
                                    <TableCell align="center">{row.body}</TableCell>
                                </TableRow>
                            }
                        </>)}
                </TableBody>
            </Table>
        </TableContainer>
    </>
}

const style = {
    border: "gray  2px solid",
    backgroundColor: "light-blue",
    color: "gray"
}