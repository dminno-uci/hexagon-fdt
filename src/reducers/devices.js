import {
    SET_LOCATION_DEVICES,
} from "../actions/devices";

export default function devices( state = [], action ) {
    switch(action.type) {
        case SET_LOCATION_DEVICES:
            return {
                ...state,
                locationDevices: [...action.devices]
            };
        default:
            return state;
    }
}
