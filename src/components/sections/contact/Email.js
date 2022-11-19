import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SibApiV3Sdk = require('sib-api-v3-typescript');

export async function TransEmail(params) {
	let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

	let apiKey = apiInstance.authentications['apiKey'];
	apiKey.apiKey = process.env.REACT_APP_SIB_API_KEY_RUTU;

	let sendSmtpEmail = {
		subject: params.subject,
		templateId: 1,
		// TODO : MODIFY THIS
		sender: params.sender,
		to: params.to
	};
	await apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
		
		toast.success('Successfully Submitted Your Inquiry !', {
			position: toast.POSITION.BOTTOM_RIGHT
		});

		//reply thank you email on inquiry
		replyEmail(params);
		console.log('API called successfully. New Inquiry received: ' + JSON.stringify(data));
		return true;

	}, function (error) {
		toast.dismiss();
		toast.error('Something Went Wrong !');
		console.error(error);
		return false;
	});
	//return false;

}

function replyEmail(templateParams) {
	let apiInstance = new SibApiV3Sdk.SendSmtpEmail();
	let apiKey = apiInstance.authentications['apiKey'];

	apiKey.apiKey = process.env.REACT_APP_SIB_API_KEY_RUTU;

	let sendSmtpEmail = {
		subject: templateParams.subject,
		templateId: 1,
		// TODO : MODIFY THIS
		to: templateParams.sender,
		params: { "customer_name": templateParams.to[0].name }
	};

	debugger;
	apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
		console.log('API called successfully. thank you email sent data: ' + JSON.stringify(data));

		//Check if contact already exist in the system
		getContact(templateParams.sender);
	}, function (error) {
		console.error(error);
	});
}

function getContact(identifier) {
	let apiInstance = new SibApiV3Sdk.ContactsApi()
	let apiKey = apiInstance.authentications['apiKey'];

	apiKey.apiKey = process.env.REACT_APP_SIB_API_KEY_RUTU;

	apiInstance.getContactInfo(identifier)
		.then(function (data) {
			toast.success('Thank you for reaching us out again, Successfully Submitted Your Inquiry !', {
				position: toast.POSITION.BOTTOM_RIGHT
			});
			console.log('API called successfully. Contact existed: ' + JSON.stringify(data));
		})
		.catch(function (error) {
			//if contact doesn't exist
			if (error.response.statusCode === 404) {
				createContact(identifier)
			}
		})
	return false;
}

function createContact(identifier) {
	let apiInstance = new SibApiV3Sdk.ContactsApi();

	let apiKey = apiInstance.authentications['apiKey'];
	apiKey.apiKey = process.env.REACT_APP_SIB_API_KEY_RUTU;
	let createContact = new SibApiV3Sdk.CreateContact();

	createContact.email = identifier;

	apiInstance.createContact(createContact).then(function (data) {
		console.log('API called successfully. contact has been created: ' + JSON.stringify(data));
	}, function (error) {
		console.error(error);
	});

	return false;
}

export default TransEmail;