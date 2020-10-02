const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
app.get('/gem', (req, res) => {
    let random = Math.floor(5000 * Math.random());
    let url = "https://api.spotify.com/v1/search?q=tag:hipster&type=album&limit=1&offset=" + random
    let token = "BQDMqbZtWavZdp3jY4pX6-fmdmkcJRGa_N67-Nl0tOJTCyhhWKAGovpoWHj7_pM-xzV3ZlUXZlZlC1ICfDvTVnqMSvn9lQZJhcNVX0ttANNw0K715bxn2Ymqwm7uF4oJPpF3LvG2z6icHmmqKijyaieMQhNYZBMOb42mKFS36vY"
    axios.get(url, {
        headers: {
            "Authorization": "Bearer " + token
        }
    }).then((data) => {
        console.log(data)
        res.send(JSON.stringify(data.data));
    }).catch((e) => res.send(e));
});

app.listen(3000)
