const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = "https://api.darksky.net/forecast/e5bf43507f6aadc19f2af764de5bcc53/" + longitude + ',' + latitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather services', undefined)
        }
        else if (body.error) {
            callback('Location not found, TRY AGAIN!!', undefined)
        }
        else {
            callback(undefined, body.daily.data[0].summary + "It is currently " +
                body.currently.temperature + " degrees out. There is " +
                body.currently.precipProbability + "% chances of rain.")
        }
    })

}
module.exports = forecast
