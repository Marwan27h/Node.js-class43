import express from "express"
import routes from "./routes/router.js"

const app = express()
const PORT = 3001

app.use(express.json())
app.use("/", routes)

app.listen(PORT, () => {
    console.log(`The server runs at Port ${PORT}`)
})
