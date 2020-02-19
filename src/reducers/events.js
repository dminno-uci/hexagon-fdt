import { SET_LOCATION_EVENTS } from "../actions/events";

export default function events(state = [], action ) {
    switch(action.type) {
        case SET_LOCATION_EVENTS:
            return [...action.events];
        default:
            return state;
    }
}
