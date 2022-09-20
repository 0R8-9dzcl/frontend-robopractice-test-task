export const getUsersData = () => {
	return fetch('http://localhost:8080/api/users', {
		method: 'GET',
})
.then(res => {
	if(res.ok) {
		return res.json();
	} else {
		return Promise.reject(res.status);
	}
})
}