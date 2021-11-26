import axios from 'axios';

function queryWorldClockApi(): Promise<any> {
	const currentDateTime = axios
		.get('http://worldclockapi.com/api/json/utc/now')
		.then((res) => res.data.currentDateTime);
	return currentDateTime;
}

export default queryWorldClockApi;
