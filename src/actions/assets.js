import { getLocationAssetsAPI } from "../utils/api";

export const SET_LOCATION_ASSETS = "SET_LOCATION_ASSETS";

function setLocationAssets(assets) {
    return {
        type: SET_LOCATION_ASSETS,
        assets
    }
}

export function handleGetLocationAssets(location_id) {
    return (dispatch) => {
        let assets = getLocationAssetsAPI(location_id);
        dispatch(setLocationAssets(assets))
    }
}