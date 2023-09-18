const nodemailer = require('../config/nodemailer');
const Mail = require('../models/mails');
module.exports.sampleMail = (user) => {

    let htmlString = nodemailer.renderTemplate({}, '/mail1.ejs')

    nodemailer.transporter.sendMail({
        from : 'Archittam Fashion <cs@archittam.com>',
        to: user.mail_id,
        subject: "New Arrivals In Couple Dress Sets",
        html: htmlString
    }, (err,info) => {
        if(err){
            console.log('Error in sending mail', err);
            user.send_status = "error";
            return;
        }
        user.send_status = "Success";
        user.save();
        return;
    })
}