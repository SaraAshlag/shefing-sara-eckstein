import { combineReducers, createStore } from "redux";
import { postProducer } from "./post_reducer/postData";
import { userProducer } from "./users_reducer/userData";

//combine the reducers
let allInfo = combineReducers({
users:userProducer,
post:postProducer
})

export const store = createStore(allInfo)