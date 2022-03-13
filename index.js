const express = require('express')
const router = require("./src/routes/routes")

const app = express()

const port = 5000

app.get("/", (req, res) => {
    res.send("Hello Express!")
})

app.use("api/v1/", router)

app.listen(port, () => console.log(`LISTENING ON PORT ${5000}!`))