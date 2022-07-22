import axios from "axios";
import { UsersDataType } from "../reducer/users-reducer";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": '1449fb6f-a118-46bc-8b11-af0716488d9c'
	}
})

export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance.get<ResponseType>(`users?page=${currentPage}&count=${pageSize}`)
	},
	follow(userId: number) {
		return instance.post(`follow/${userId}`)
	},
	unfollow(userId: number) {
		return instance.delete(`follow/${userId}`)
	}
}

export type ResponseType = {
	error: string | null, 
	items: UsersDataType[], 
	totalCount: number
}

// export const getUsers = (currentPage:any, pageSize:any) => {
// 	return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
// 		withCredentials: true
// 	})
// 	.then(response => {
// 		return response.data
// 	})
// }

// export const getfollowed = (id:any) => {
// 	return instance.get(`follow/${u.id}`, {
// 		withCredentials: true
// 	})
// 	.then(response => {
// 		return response.data
// 	})
// }