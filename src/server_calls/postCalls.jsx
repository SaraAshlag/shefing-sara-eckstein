import axios from "axios";
//function that performs a server call and gets all the posts from the server
export const getAllPosts = async () => {
    let list = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return list.data
}