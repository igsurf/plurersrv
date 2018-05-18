'use restrict'
let emailTransporter = require('./../../config/emailConfig')
let GenericService = require('./genericService');

class EmailService extends GenericService {    
    constructor(){
        super();
        this.email = emailTransporter;
    } 

    enviarEmail(destino, assunto, conteudo){
        var mailOptions = { from: 'social@plurer.com.br', to: destino, subject: assunto,  html: conteudo};
        return this.email.sendMail(mailOptions)
        .then((response)=>response.response)
        .catch((error)=>console.log(error));
    }
}
module.exports = EmailService;