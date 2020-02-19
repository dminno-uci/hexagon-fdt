import { SET_LOCATION_ASSETS } from "../actions/assets";

export default function assets(state = [], action ) {
    switch(action.type) {
        case SET_LOCATION_ASSETS:
            return [...action.assets];
        default:
            return state;
    }
}
