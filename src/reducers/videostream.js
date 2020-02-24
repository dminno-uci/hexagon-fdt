import { SELECT_STREAM } from "../actions/videostream";

export default function videostream( state = "", action ) {
    switch(action.type) {
        case SELECT_STREAM:
            return action.url;
        default:
            return state;
    }
}
