const headers = {
    'Content-Type': 'application/json',
    'Key': '64C82EE',
    'SessionId': 'a84dc34e-59d8-4e9c-a890-2550dd57191d'
}

export const GETOPTIONS = {
    method: 'GET',
    headers	
}

export const CREATEOPTIONS = (body) => {
	return {
		method: 'POST',
		headers,
		body: JSON.stringify(body)
	}
}
