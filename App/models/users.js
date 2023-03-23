const mongoose = require ('mongoose')

const UserScheme = new mongoose.Schema({
    name: {
        type: String
    },
    DOB: {
        type: Number
    },
    bio: {
        type: String
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('users', UserScheme)