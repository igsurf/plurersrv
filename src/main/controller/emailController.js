'use restrict'
let ActionResponse = require('./../util/actionResponse');
let Logger = require('./../util/logger');
let EmailService = require('./../service/emailService');

module.exports = (app) => {
    let emailService = new EmailService();
    app.post('/email/enviar', async function (req, res) {
        
        try {
            let email = req.body;
            let emailResponse = await emailService.enviarEmail(email.destino, email.assunto, email.conteudo);
            let response = new ActionResponse().sucesso(200, 'E-mail enviado com sucesso. ', emailResponse);
            res.json(response);

        } catch (error) {
            Logger.errorlog.error(error);
            res.end();
        } 
    });
}