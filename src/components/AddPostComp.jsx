import { useDispatch } from "react-redux"
import { AddPost } from "../redux/post_reducer/postActions"

export const AddPostComp = (props) => {

    //define a variable for dispatching
   let dispatch = useDispatch()
    return<>
    <form onSubmit={(e) => {
        e.preventDefault()
        props.setShow(false)
        //creating a new
        let newPost = {
            userId:props.userId,
            id:props.id,
            title:e.target["title"].value,
            body:e.target["body"].value
        }
        //adding the new post
        dispatch(AddPost(newPost))
    }}>
        <input type="text" name="" id="title" placeholder="insert title" style={style}/>
        <br />
        <textarea name="" id="body" cols="30" rows="10" placeholder="insert body..." style={style}>
        </textarea>
        <br />
        <input type="submit" value="send" style={style}/>
    </form>
    </>
}

const style = {
    border: "gray  2px solid",
    backgroundColor:"light-blue",
    color:"gray"
}