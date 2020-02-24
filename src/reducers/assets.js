import {
    SELECT_ASSET,
    SET_LOCATION_ASSETS,
    UNSELECT_ASSET } from "../actions/assets";

export default function assets(state = {}, action ) {
    switch(action.type) {
        case SET_LOCATION_ASSETS:
            return [...action.assets];
        case SELECT_ASSET:
            return {
                ...state,
                selectedAsset: action.asset
            };
        // case UNSELECT_ASSET:
        //     return {
        //         ...state,
        //         selectedAsset: ""
        //     };
        default:
            return state;
    }
}
