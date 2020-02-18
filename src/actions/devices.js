import { locations } from "../utils/data";
import { formatLocations } from "../utils/helper";
import { getLocationDevicesAPI } from "../utils/api";

export const SET_LOCATION_DEVICES = "SET_LOCATION_DEVICES";

function setLocationDevices(devices) {
    return {
        type: SET_LOCATION_DEVICES,
        devices
    }
}

export function handleGetLocationDevices(location_id) {
    return (dispatch) => {
        let devices = getLocationDevicesAPI(location_id);
        dispatch(setLocationDevices(devices))
    }
}