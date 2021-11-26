import * as functions from 'firebase-functions';

export const getCurrentDateTime = functions.https.onRequest((request, response) => {
	const currentDateTime = new Date();
	response.send({ currentDateTime: currentDateTime });
});
