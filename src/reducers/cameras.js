import {
    SET_LOCATION_CAMERAS,
} from "../actions/cameras";

export default function cameras(state = [], action ) {
    switch(action.type) {
        case SET_LOCATION_CAMERAS:
            return [...action.cameras];
        default:
            return state;
    }
}
