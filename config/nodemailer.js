const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",  
    secureConnection: true,
    port: 465,
    secure: true,
    auth: {
      user: "cs@archittam.com",
      pass: "mitta210@m",
    },
});


let renderTemplate = (data,relativePath) => {
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname,'../views/mails',relativePath),
        data,
        function(err,templete){
            if(err){
                console.log('Error in rendoring template',err);
                return;
            }

            mailHTML = templete;
        }
    )
    return mailHTML;
}

module.exports = {
    transporter : transporter,
    renderTemplate : renderTemplate
}