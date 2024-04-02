const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const bodyParser = require("body-parser")
const AuthRouter = require("./routes/Auth")

dotenv.config()

mongoose.connect(process.env.MONGO_DB)
.then(res => console.log("DB connected!"))
.catch(err => console.log(err))

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "success"
    })
})

app.use("/api/admin", AuthRouter)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`App is running on 127.0.0.1:${port}`)
})