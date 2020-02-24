import { combineReducers } from "redux";

import locations from './locations'
import cameras from './cameras'
import assets from './assets'
import events from './events'
import videostream from './videostream'

export default combineReducers({
    locations,
    cameras,
    assets,
    events,
    videostream
})