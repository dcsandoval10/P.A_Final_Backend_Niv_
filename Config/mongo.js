const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = { dbConnect }

// , (err,res) => {
//     if (!err) {
//         console.log('***Conexion correcta***', res)
//     }
//     else {
//         console.log('***Error en la conexion***', res)
//     }
// }