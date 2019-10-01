const request = require('request')
const url = "https://api.darksky.net/forecast/e5bf43507f6aadc19f2af764de5bcc53/37.8267,-122.4233"

request({url: url, json: true}, (error,response) => {
    if(error){
        console.log('Unable to connect to the weather services')
    }
    else if (response.body.error){
        console.log('Location not found, TRY AGAIN!!')
    }
    else{
        console.log(response.body.daily.data[0].summary + "It is currently " +
        response.body.currently.temperature + " degrees out. There is " + 
        response.body.currently.precipProbability+ "% chances of rain.")
    }
})

