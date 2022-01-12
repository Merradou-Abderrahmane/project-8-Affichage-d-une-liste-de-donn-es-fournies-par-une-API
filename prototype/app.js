
fetch('api.openweathermap.org/data/2.5/weather?q=tangier&appid=d78f7c47ab341e4363a663482f4b3470')




.then (function(reponse){
    return reponse.json()
})

.then(function(data){
    console.log(data)
})