const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoiaGFmc2EtbmFkaXIyMSIsImEiOiJjanVsbXFlaG0yMjM3NDRxanV3ODl0MGN1In0.RiximN9OsRv3c8AR052ARg"

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to the weather services', undefined)
        }
        else if (response.body.error) {
            callback('Location not found, TRY AGAIN!!', undefined)
        }
        else {
            callback(undefined,
                {
                    latitude: response.body.features[0].center[1],
                    longitude: response.body.features[0].center[0],
                    location: response.body.features[0].place_name
                })
        }
    })
}
module.exports = geocode