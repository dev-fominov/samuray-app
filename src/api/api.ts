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
		return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
			.then(res => res.data)
	},
	follow(userId: number) {
		return instance.post<FollowUnfollowType>(`follow/${userId}`)
			.then(res => res.data.resultCode)
	},
	unfollow(userId: number) {
		return instance.delete<FollowUnfollowType>(`follow/${userId}`)
			.then(res => res.data.resultCode)
	}
}

export const profileAPI = {
	getProfile(userId: string) {
		return instance.get<ProfileType>(`profile/` + userId)
			.then(res => res.data)
	},
	getStatus(userId: string) {
		return instance.get(`status/` + userId)
	},
	updateStatus(status: string) {
		return instance.put(`status`, {status})
	}
}

export const authAPI = {
	getAuth() {
		return instance.get<GetAuthType<{ id: number | null, email: string | null, login: string | null }>>(`auth/me`)
			.then(res => res.data)
	}
}


type GetAuthType<D = {}> = {
	data: D
	messages: Array<string>
	fieldsErrors: Array<string>
	resultCode: 0 | 1
}

export type GetUsersType = {
	error: string | null
	items: UsersDataType[]
	totalCount: number
}

export type FollowUnfollowType = {
	resultCode: number
}

export type ProfileType = {
	aboutMe: string
	contacts: ContactsType
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	userId: number
	photos: PhotosType
}

export type ContactsType = {
	facebook: string
	website: string | null
	vk: string
	twitter: string
	instagram: string
	youtube: string | null
	github: string
	mainLink: string | null
}

export type PhotosType = {
	small: string
	large: string
}