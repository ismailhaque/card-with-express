const mongoose = require(`mongoose`)

// connect database
const mongoDBConnect = async () =>{
    try {
      await  mongoose.connect(process.env.MONGO_STRING)
        console.log(`mongo DB connect successfully`.bgGreen.black);
    } catch (error) {
        console.log(`${error}`.bgRed.black);
    }
}

// export mongoDBConnect
module.exports = mongoDBConnect;