async function getLatLng(address) {
  var ltg = {}
  const axios = require('axios')

  const options = {
    method: 'GET',
    url: 'https://trueway-geocoding.p.rapidapi.com/Geocode',
    params: {
      address: address,
      language: 'en',
    },
    headers: {
      'X-RapidAPI-Key': 'c93b060f90mshff7101bea4f72d1p19f697jsn72262717a843',
      'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com',
    },
  }

  await axios
    .request(options)
    .then(function (response) {
      ltg = response.data.results[0].location
    })
    .catch(function (error) {
      console.error(error)
    })
  return ltg
}

