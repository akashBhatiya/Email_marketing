const mailer = require('../mailer/mail');
const Mail = require('../models/mails');


module.exports.home = (req,res) => {
    return res.render('home');
}

module.exports.sendMail = async (req,res) => {
    

    const usersInRange = await Mail.find({
        user_id: { $gte: 801, $lte: 900}
    });

    // usersInRange.forEach((user) => {
    //     setTimeout(()=>{
    //         console.log(user.user_id + " " +user.mail_id);
    //         mailer.sampleMail(user);
    //     },10000);
    // })
    // mailer.sampleMail("abhishek.kumar@blitzscale.co");


    for (const user of usersInRange) {
        await new Promise((resolve) => {
            setTimeout(async () => {
                console.log(user.user_id + " " + user.mail_id);
                await mailer.sampleMail(user);
                resolve();
            }, 10000); // 10 seconds delay
        });
    }

    return res.redirect('/');
}