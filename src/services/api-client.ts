import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api/',
	params: {
		key: 'd6805aa0047643b38fd5ffaab1203cf5',
	},
});
