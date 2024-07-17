const mongoose = require("mongoose")
require("dotenv").config()
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Ze Bluetoof device is connected sexfully")
    })
        .catch((e) => {
            console.log(e.message + "not sexfull")
            process.exit(1)
        })
}

module.exports = dbConnect

//connexion ensurer bw application and db 