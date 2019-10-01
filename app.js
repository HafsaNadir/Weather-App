const request = require('request')

// const url = "https://api.darksky.net/forecast/e5bf43507f6aadc19f2af764de5bcc53/37.8267,-122.4233"

// request({url: url, json: true}, (error,response) => {
//     if(error){
//         console.log('Unable to connect to the weather services')
//     }
//     else if (response.body.error){
//         console.log('Location not found, TRY AGAIN!!')
//     }
//     else{
//         console.log(response.body.daily.data[0].summary + "It is currently " +
//         response.body.currently.temperature + " degrees out. There is " + 
//         response.body.currently.precipProbability+ "% chances of rain.")
//     }
// })

const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGFmc2EtbmFkaXIyMSIsImEiOiJjanVsbXFlaG0yMjM3NDRxanV3ODl0MGN1In0.RiximN9OsRv3c8AR052ARg"

request({url: url, json: true} ,(error,response) => {
        if(error){
            console.log('Unable to connect to the weather services')
        }
        else if (response.body.error){
            console.log('Location not found, TRY AGAIN!!')
        }
        else {
            console.log('latitude:' + response.body.features[0].center[0])
            console.log('longitude:' + response.body.features[0].center[1])
            console.log('location:' + response.body.features[0].place_name)
        }
})

