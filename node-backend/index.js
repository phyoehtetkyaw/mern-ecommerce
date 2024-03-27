const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const bodyParser = require("body-parser")
const AuthRouter = require("./routes/Auth")

dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "success"
    })
})

app.use("/api/", AuthRouter)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`App is running on 127.0.0.1:${port}`)
})