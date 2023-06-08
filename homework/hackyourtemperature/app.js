import express from "express"
import fetch from "node-fetch"
import keys from "./sources/keys.js"

const app = express()

app.use(express.json()) // middleware is used to parse JSON data in the request body
//app.post() method is used to define a route handler for HTTP POST requests
app.post("/weather", async (req, res) => {
    try {
        const cityName = req.body.cityName
        if (!cityName) {
            return res
                .status(400)
                .send("cityName is required, You have to fill it :)")
        }

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keys.API_KEY}`
        )
        const data = await response.json()

        if (data.cod === "404") {
            return res.status(404).json({ weatherText: "City is not found!" }) 
        }

        const temperature = data.main.temp
        const weatherText = `The temperature in ${cityName} is ${temperature}°C`

        return res.json({ weatherText })
    } catch (err) {
        console.error("Error:", err)
       return res.status(500).json({ error: err.message })
    }
})

export default app
