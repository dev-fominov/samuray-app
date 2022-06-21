import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": '1449fb6f-a118-46bc-8b11-af0716488d9c'
	}
})

export const getUsers = (currentPage:any, pageSize:any) => {
	return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
		withCredentials: true
	})
	.then(response => {
		return response.data
	})
}

// export const getfollowed = (id:any) => {
// 	return instance.get(`follow/${u.id}`, {
// 		withCredentials: true
// 	})
// 	.then(response => {
// 		return response.data
// 	})
// }