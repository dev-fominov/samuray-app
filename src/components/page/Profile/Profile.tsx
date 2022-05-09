import React from "react";
import { ActionsTypes, ProfileType } from "../../../Types";

import MyPosts from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo";

type ProfilesType = {
	state: ProfileType
	dispath: (action: ActionsTypes)=>void
}

const Profile = (props: ProfilesType) => {
	return (
		<>
			<ProfileInfo />
			<MyPosts 
				posts={props.state.posts} 
				newPostText={props.state.newPostText}
				dispath={props.dispath.bind(props.state)}
				 />
		</>
	)
}

export default Profile;