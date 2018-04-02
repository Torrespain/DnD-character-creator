import axios from 'axios'

export default {
	getRaceAPI: (race) =>{
		return axios.get(`/races/${race}`)
	},

	getClassAPI: (classes) =>{
		return axios.get(`/classes/${classes}`)
	}
}