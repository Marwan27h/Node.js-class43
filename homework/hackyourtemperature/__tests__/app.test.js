import supertest from "supertest"
import app from "../app.js"

const request = supertest(app)

describe("POST/weather", () => {
    it("should return weather information for a valid city", async () => {
        const response = await request
            .post("/weather")
            .send({ cityName: "London" })

        expect(response.status).toBe(200)
        expect(response.body.weatherText).toContain("London")
    })

    it("should return an error message for invalid city", async () => {
        const response = await request
            .post("/weather")
            .send({ cityName: "invalidCity" })

        expect(response.status).toBe(404) 
        expect(response.body.weatherText).toContain("City is not found")
    })

    it("should return an error for missing the city name", async () => {
        const response = await request
        .post("/weather")
        expect(response.status).toBe(400)
        expect(response.text).toBe(
            "cityName is required, You have to fill it :)"
        )
    })
})
