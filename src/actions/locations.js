import { locations } from "../utils/data";
import { formatLocations } from "../utils/helper";

export const RECEIVE_LOCATIONS = "SELECT_LOCATION";
export const SELECT_LOCATION = "SET_LOCATION";

export function receiveLocations() {
    return {
        type: RECEIVE_LOCATIONS,
        locations: formatLocations(locations)
    }
}

export function selectLocation(id) {
    return {
        type: SELECT_LOCATION,
        id
    }
}