import axios from "axios";
//function that performs a server call and gets all the users from the server
export const getAllUsers = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/users")
}