import { getLocationAssetsAPI } from "../utils/api";
import {selectStream} from "./videostream";

export const SET_LOCATION_ASSETS = "SET_LOCATION_ASSETS";
export const SELECT_ASSET = "SELECT_ASSET";
export const UNSELECT_ASSET = "UNSELECT_ASSET";

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

export function handleSelectAsset(asset, ) {
    return (dispatch) => {
        // dispatch(selectStream(url));
        dispatch(selectAsset(asset));
    }
}

export function selectAsset(asset) {
    return {
        type: SELECT_ASSET,
        asset
    }
}

// export function unselectAsset() {
//     return {
//         type: UNSELECT_ASSET,
//     }
// }