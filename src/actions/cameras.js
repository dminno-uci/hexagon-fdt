import { locations } from "../utils/data";
import { formatLocations } from "../utils/helper";
import { getLocationCamerasAPI } from "../utils/api";

export const SET_LOCATION_CAMERAS = "SET_LOCATION_CAMERAS";


function setLocationCameras(cameras) {
    return {
        type: SET_LOCATION_CAMERAS,
        cameras
    }
}

export function handleGetLocationCameras(location_id) {
    return (dispatch) => {
        let cameras = getLocationCamerasAPI(location_id);
        dispatch(setLocationCameras(cameras))
    }
}