import { combineReducers } from "redux";

import locations from './locations'
import cameras from './cameras'

export default combineReducers({
    locations,
    cameras
})