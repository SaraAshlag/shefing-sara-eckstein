import produce from "immer"
//defining an initial users object
const usersInitialState = {
    usersList:[]
}
//creating a producer
export const userProducer = produce((state, action) => {
debugger
switch (action.type) {
    case "SET_ALL_USERS":
        state.usersList = action.payload
        break;

    default:
        break;
}

},usersInitialState)