import {
    RECEIVE_LOCATIONS,
    SELECT_LOCATION
} from "../actions/locations";

export default function locations( state = {}, action ) {
    switch(action.type) {
        case RECEIVE_LOCATIONS:
            return {
                ...state,
                locations: action.locations
            };
        case SELECT_LOCATION:
            return {
                ...state,
                selectedLocation: action.id
            }
        default:
            return state;
    }
}
