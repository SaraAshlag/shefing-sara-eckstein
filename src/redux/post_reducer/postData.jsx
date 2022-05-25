import produce from "immer"
//defining an initial users object
const postInitialState = {
    postList:[]
}
//creating a producer
export const postProducer = produce((state, action) => {
debugger
switch (action.type) {
    case "SET_ALL_POSTS":
        state.postList = action.payload
        break;
        case "ADD_POST":{
             debugger
            state.postList.push(action.payload)
        }
            break;
    default:
        break;
}

},postInitialState)