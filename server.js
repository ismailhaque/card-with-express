
// dotenv config
const dotenv = require(`dotenv`).config()

// express init
const express = require(`express`)
const app = express()

// path init
const path = require(`path`)

// color
const colors = require(`colors`)

// express layout
const expressLayout = require(`express-ejs-layouts`)

const StudentRouter = require("./routes/AllStudentRoutes")
const mongoDBConnect = require("./config/db")

// mongo connect
mongoDBConnect();

// environment variable
const port = process.env.PORT || 5000

// body data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ejs setup
app.set("view engine", "ejs")
app.set("layout", 'layout/app')
app.use(expressLayout)

// static folder
app.use(express.static(path.join(__dirname, `assets/`)))

// routes
app.use(`/`, StudentRouter)

// server listen
app.listen(port, () => {
    console.log(`SERVER IS RUNING PORT ${port}`.bgGreen.black);
})