import axios from 'axios'

export default {
	getRaceAPI: () =>{
		return axios.get("/races")
	}
}