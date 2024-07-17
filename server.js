const express = require('express')
const todoRoutes = require("./routes/todos")

const app = express()

require("dotenv").config()

const PORT = process.env.PORT || 4000
// const bodyParser=require("body-parser")
app.use(express.json())

app.use("/api/v1", todoRoutes)

app.listen(PORT, () => {
    console.log("Server is running")
})

const dbConnect = require("./config/database")
dbConnect();

app.get("/", (req, res) => {
    res.send(`<h1>This is home pages</h1>`)
})