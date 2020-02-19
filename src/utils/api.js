import { cameras, events, assets } from "./data";


//     Get all locations
//                      /locations
//     Get all cameras for location
//                     /location_id/cameras
//     Get all asset for location
//                       /location_id/assets
//     Get all events for location
//                        /location_id/events
//     Get all asset for camera
//                       /location_id/assets?camera_id=
//     Get all events for camera
//                        /location_id/events?camera_id=
//     Get all cameras for asset
//                         /location_id/cameras?asset_id=
//     Get all cameras for event
//                         /location_id/cameras?event_id=
//     ----------------
//         --- GET ONEs ---
//     Get one camera for location
//                        /location_id/camera?camera_id=
//     Get one events for location
//                        /location_id/events?event_id=
//     Get one asset for location
//                       /location_id/assets?asset_id=

// export function getAll

export function getLocationCamerasAPI(location_id) {
    return cameras.filter((camera) => camera.location === location_id)
}

export function getLocationEventsAPI(location_id) {
    return events.filter((event) => event.location === location_id)
}

export function getLocationAssetsAPI(location_id) {
    return assets.filter((asset) => asset.location === location_id)
}