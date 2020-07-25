import {applyMiddleware, combineReducers, createStore} from "redux";
import {usersInstructions} from "../Reducers/usersReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    usersReducer: usersInstructions
})

export const store = createStore(reducers, applyMiddleware(thunk))

window.store = store
