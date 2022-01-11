const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jmontero@soin.co.cr',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jmontero@soin.co.cr',
        subject: 'Why Cancel ?',
        text: `Hi, ${name}. why canceled the account?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}


