
// dotenv config
const dotenv = require(`dotenv`).config()
// express init
const express = require(`express`)
const app = express()
// path init
const path = require(`path`)
// color
const colors = require(`colors`)
const StudentRouter = require("./routes/AllStudentRoutes")

// environment variable
const port = process.env.PORT || 5000

// ejs setup
app.set("view engine", "ejs")

// static folder
app.use(express.static(path.join(__dirname, `assets/`)))

// routes
app.use(`/`, StudentRouter)

// server listen
app.listen(port, () => {
    console.log(`SERVER IS RUNING PORT ${port}`.bgGreen.black);
})