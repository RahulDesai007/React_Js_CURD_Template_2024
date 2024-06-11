//root reducer
//if there are more than one reducers they can me mapped here...
import createData from "./CustomerData";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    createData
})

export default rootReducer;