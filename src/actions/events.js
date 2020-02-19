import { getLocationEventsAPI } from "../utils/api";

export const SET_LOCATION_EVENTS = "SET_LOCATION_EVENTS";

function setLocationEvents(events) {
    return {
        type: SET_LOCATION_EVENTS,
        events
    }
}

export function handleGetLocationEvents(location_id) {
    return (dispatch) => {
        let events = getLocationEventsAPI(location_id);
        dispatch(setLocationEvents(events))
    }
}