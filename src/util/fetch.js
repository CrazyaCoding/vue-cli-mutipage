/**
 * Created by shangpanpan on 2017/9/20.
 */
let getHeaders = new Headers({
	method: 'GET',
	mode: 'cors',
	credentials: 'include'
});

function getFetch (url, data) {
	return fetch(url, getHeaders)
		.then(checkStatus)
		.then(parseJson)
		.then((data) => data)
		.catch((err) => err);
}

// let postHeaders = new Headers()
function postFetch (url, data) {
	return fetch(url, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		mode: 'cors',
		method: 'POST',
		body: JSON.stringify(data)
	}).then((response) => {
		return response.json();
	}).catch((e) => {
		console.log('oops , error!') // 跨域在这里报错
	});
}

function checkStatus (response) {
	if (response.ok === true && ((response.status >= 200 && response.status < 300) || (response.status === 304))) {
		return response;
	}
	let error = new Error(response.statusText);
	error.response = response;
	throw error;
}
function parseJson (response) {
	return response.json();
}

export default {
	postFetch,
	getFetch
}
