async function getLatLong(address) {
  const API_KEY = 'c93b060f90mshff7101bea4f72d1p19f697jsn72262717a843' // Replace with your RapidAPI key
  const URL = `https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q=${encodeURIComponent(
    address,
  )}`

  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'forward-reverse-geocoding.p.rapidapi.com',
      'X-RapidAPI-Key': 'c93b060f90mshff7101bea4f72d1p19f697jsn72262717a843',
    },
  })

  response
    .json()
    .then((data) => {
      if (data.length > 0) {
        console.log({ lat: data[0].lat, lon: data[0].lon })
        return { lat: data[0].lat, lon: data[0].lon }
      } else {
        throw new Error('Could not find coordinates for address: ' + address)
      }
    })
    .catch((err) => {})
}

var res = await getLatLong('Indrapuri, Bhopal, Madhya Pradesh 462021')
console.log(res)
