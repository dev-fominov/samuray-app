import React from "react";
import { ProfileType } from "../../../Types";

import MyPosts from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo";

type ProfilesType = {
	state: ProfileType
	addPost: ()=> void
	updateNewPost: (newPostText: string)=>void
}

const Profile = (props: ProfilesType) => {
	return (
		<>
			<ProfileInfo />
			<MyPosts 
				posts={props.state.posts} 
				newPostText={props.state.newPostText}
				addPost={props.addPost} 
				updateNewPost={props.updateNewPost} />
		</>
	)
}

export default Profile;