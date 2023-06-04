import express from "express"

const app = express()
const PORT = 3001
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello from the frontend")
})

app.post("/weather", (req, res) => {
    const cityName = req.body.cityName
    if (!cityName) {
        res.status(400).send("City name is required")
    } else {
        res.send(`You submitted: ${cityName}`)
    }
})

app.listen(PORT, () => {
    console.log(`The server runs at Port ${PORT}`)
})
