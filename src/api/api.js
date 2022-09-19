export const Api = () => {
	return fetch('http://localhost:8080/api/users', {
		method: 'GET',
		mode: 'no-cors', 
		headers: { 'Content-Type': 'application/json'},
})
.then(res => {
if(res.ok) {
		return res.json();
	} else {
		return Promise.reject(res.status);
	}
})
.then((res) => console.log(res))
}