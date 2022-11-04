const SibApiV3Sdk = require('sib-api-v3-typescript');
let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = process.env.REACT_APP_SIB_API_KEY_RUTU;

export function TransEmail(params) {

    debugger;
    let sendSmtpEmail = {
        subject: params.subject,
        templateId: 1,
        // TODO : MODIFY THIS
        sender: params.sender,
        to: params.to
    }; 
    
    apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {

      //reply thank you email on inquiry
      replyEmail(params);
      console.log('API called successfully. New Inquiry received: ' + JSON.stringify(data));
    }, function(error) {
      console.error(error);
    });
}

function replyEmail(templateParams) {
    let apiInstance =new SibApiV3Sdk.SendSmtpEmail(); 
    let apiKey = apiInstance.authentications['apiKey'];

    apiKey.apiKey = process.env.REACT_APP_SIB_API_KEY_RUTU;

    let sendSmtpEmail = {
        subject: templateParams.subject,
        templateId: 1,
        // TODO : MODIFY THIS
        to: templateParams.sender,
        params: {"customer_name": templateParams.to[0].name}
    }; 
    
    debugger;
    apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
      console.log('API called successfully. thank you email sent data: ' + JSON.stringify(data));

      //Check if contact already exist in the system
      getContact(templateParams.sender);
    }, function(error) {
      console.error(error);
    });
}

function getContact(identifier) {
    let apiInstance = new SibApiV3Sdk.ContactsApi()
    let apiKey = apiInstance.authentications['apiKey'];

    apiKey.apiKey = process.env.REACT_APP_SIB_API_KEY_RUTU;

    apiInstance.getContactInfo(identifier)
    .then(function (data) {console.log('API called successfully. Contact existed: ' + JSON.stringify(data));})
    .catch(function (error) {

      //if contact doesn't exist
      if(error.response.statusCode === 404){
          createContact(identifier)
      }
   })
}

function createContact(identifier) {
  let apiInstance = new SibApiV3Sdk.ContactsApi();

  let apiKey = apiInstance.authentications['apiKey'];
  apiKey.apiKey = process.env.REACT_APP_SIB_API_KEY_RUTU;
  let createContact = new SibApiV3Sdk.CreateContact();

  createContact.email = identifier;

  apiInstance.createContact(createContact).then(function(data) {
  console.log('API called successfully. contact has been created: ' + JSON.stringify(data));
  }, function(error) {
  console.error(error);
  });
}

export default TransEmail;