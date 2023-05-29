import express from "express"
const app = express()
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hello from the frontend")
})

router.post("/weather", (req, res) => {
    const cityName = req.body.cityName
    res.send(`You submitted: ${cityName}`)
})

export default router
