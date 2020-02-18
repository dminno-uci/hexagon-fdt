import { locations } from "../utils/data";

export function formatLocations() {
    return locations.map((l) => {
        return {
            ...l,
            value: l.name,
            label: l.name
        }
    });
}