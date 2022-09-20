function toMin(time) { // 
	var min = time.split('-');
	return parseInt(min[0]) * 60 + parseInt(min[1]);
};
function toHour(min) {
	let hour = Math.floor(min/60);
	let minutes = min%60;
	return hour+ ':' + (minutes.toString().length === 1 ? '0' + minutes : minutes);
};

const newUsersData = (userData) => {
	let userObj = userData.map(user => {
		let summary = 0;
		let obj = {
			key: user.id,
			Fullname: user.Fullname,
		};
		user.Days.forEach(day => {
			let date = Number(day.Date.replace('2021-05-', ''));
			let min = toMin(day.End) - toMin(day.Start);
			summary += min;
			obj[`Day${date}`] = toHour(min);
		});
		for(let i=1; i<=31; i++) {
			if(!obj[`Day${i}`]) {
				obj[`Day${i}`] = '0:00';
			}
		}
		obj.summary = toHour(summary);
		return obj
	});
	return userObj;
}
export default newUsersData;