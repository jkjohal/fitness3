const mongoose = require('mongoose')

const exerciseSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Exercise', exerciseSchema)