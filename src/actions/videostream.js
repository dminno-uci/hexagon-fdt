export const RECEIVE_LOCATIONS = "SELECT_LOCATION";
export const SELECT_STREAM = "SELECT_STREAM";

export function selectStream(url) {
    return {
        type: SELECT_STREAM,
        url
    }
}


