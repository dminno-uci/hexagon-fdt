const location_0 =
    {
        _id: 0,
        devices: [10, 20],
        cameras: [30, 40],
        assets: [50, 60, 62, 64],
        events: [70, 80],
        name: "Factory Blue",
    };

const location_1 =
    {
        _id: 1,
        devices: [11, 21],
        cameras: [31, 41],
        assets: [51, 61, 63, 65],
        events: [71, 81],
        name: "Factory Yellow",
    };



const device_10 =
    {
        _id: 10,
        location_id: 0,
        cameras: [30, 40],
        name: "Device Tengo",
    };

const device_20 =
    {
        _id: 20,
        location_id: 0,
        cameras: [31, 41],
        name: "Device Bravo",
    };

const device_11 =
    {
        _id: 11,
        location_id: 1,
        cameras: [30, 40],
        name: "Device Oscar",
    };

const device_21 =
    {
        _id: 21,
        location_id: 1,
        cameras: [1, 1],
        name: "Device Beta",
    };



const camera_30 =
    {
        _id: 30,
        location_id: 0,
        device_id: 10,
        events: [70, 80],
        assets: [50, 60],
        name: "D10 / Camera 30",
    };

const camera_40 =
    {
        _id: 40,
        location_id: 0,
        device_id: 10,
        events: [71, 81],
        assets: [51, 61],
        name: "D10 / Camera 40",
    };

const camera_31 =
    {
        _id: 31,
        location_id: 1,
        device_id: 20,
        events: [71, 81],
        assets: [51, 61],
        name: "D20 / Camera 31",
    };

const camera_41 =
    {
        _id: 41,
        location_id: 1,
        device_id: 20,
        events: [70, 80],
        assets: [50, 60],
        name: "D20 / Camera 41s",
    };



const event_70 =
    {
        _id: 70,
        u_id: 'E70',
        location_id: 0,
        cameras: [30, 40],
        asset: 60,
        name: "Routine Started",
        timestamp: '2020-02-23 09:57:38 AM'
    };

const event_80 =
    {
        _id: 80,
        u_id: 'E80',
        location_id: 0,
        cameras: [30, 40],
        asset: 50,
        name: "Routine Completed",
        timestamp: '2020-02-23 09:57:38 AM'
    };

const event_71 =
    {
        _id: 71,
        u_id: 'E71',
        location_id: 1,
        cameras: [31, 41],
        asset:  61,
        name: "Routine Started",
        timestamp: '2020-02-23 09:57:38 AM'
    };

const event_81 =
    {
        _id: 81,
        u_id: 'E81',
        location_id: 1,
        cameras: [31, 41],
        asset: 51,
        name: "Routine Completed",
        timestamp: '2020-02-23 09:57:38 AM'
    };



const asset_50 =
    {
        _id: 50,
        location_id: 0,
        cameras: [30, 40],
        events: [80],
        name: "CLT-DCMM1",
    };

const asset_60 =
    {
        _id: 60,
        location_id: 0,
        cameras: [30, 40],
        events: [70],
        name: "DynamicSys942",
    };

const asset_62 =
    {
        _id: 62,
        location_id: 0,
        cameras: [30, 40],
        events: [70],
        name: "DynamicSys942",
    };

const asset_64 =
    {
        _id: 64,
        location_id: 0,
        cameras: [30, 40],
        events: [70],
        name: "DynamicSys942",
    };

const asset_51 =
    {
        _id: 51,
        location_id: 1,
        cameras: [31, 41],
        events: [81],
        name: "HJ_Test1223",
    };

const asset_61 =
    {
        _id: 61,
        location_id: 1,
        cameras: [31, 41],
        events: [71],
        name: "CJ-MT21",
    };


const asset_63 =
    {
        _id: 63,
        location_id: 1,
        cameras: [31, 41],
        events: [71],
        name: "CJ-MT21",
    };

const asset_65 =
    {
        _id: 65,
        location_id: 1,
        cameras: [31, 41],
        events: [71],
        name: "CJ-MT21",
    };



export const locations =
    [
        location_0,
        location_1
    ];

export const devices =
    [
        device_10,
        device_11,
        device_20,
        device_21
    ];

export const cameras =
    [
        camera_30,
        camera_31,
        camera_40,
        camera_41
    ];

export const assets =
    [
        asset_50,
        asset_60,
        asset_51,
        asset_61,
        asset_62,
        asset_63,
        asset_64,
        asset_65,
    ];

export const events =
    [
        event_70,
        event_71,
        event_80,
        event_81
    ];