import emailjs from 'emailjs-com';


export const sendEmail = (from_email, from_name, message) => {
    return new Promise((function (resolve, reject) {
        emailjs.send('service_g08r9gt', 'template_89z3j0e', {
            from_name,
            from_email,
            message,
        },
            'user_0NKMgomXkCiFBTZolgjDK')
            .then((result) => {
                resolve({ type: 'success', message: 'Your contact details have been sent.' });
            }, (error) => {
                reject({ type: 'error', message: 'There was a problem sending this form. Please try again.' });
            });
    }))
}