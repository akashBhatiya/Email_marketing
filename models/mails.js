const mongoose = require('mongoose');

const mailSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    mail_id: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    send_status :{
        type: String
    }
},{
    timestamps:true
})

const Mail = mongoose.model('Mail', mailSchema);

module.exports = Mail;