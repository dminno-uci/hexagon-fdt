import { cameras, events, assets } from "./data";

export function getLocationDevicesAPI(location_id) {
    return cameras.filter((device) => device.location === location_id)
}

export function getLocationEventsAPI(location_id) {
    return events.filter((event) => event.location === location_id)
}

export function getLocationAssetsAPI(location_id) {
    return assets.filter((asset) => asset.location === location_id)
}