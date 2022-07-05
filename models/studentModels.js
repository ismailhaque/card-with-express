const mongoose = require(`mongoose`)

// mongoose scama
const studentScama = mongoose.Schema({

    name : {
        type: String,
        required: [true, `Name Field are require`],
        trim: true
    },
    email : {
        type : String,
        required : [true, `Email field are require`],
        trim : true,
        unique: true
    },
    cell : {
        type : String,
        required : [true, `Cell field are require`],
        trim : true,
        unique: true
    },
    photo : {
        type : String,
        default : `avater.png`
    }
}, {
    timestamps : true
})


// export our model

module.exports = mongoose.model(`Student`, studentScama)