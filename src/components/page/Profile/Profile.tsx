import React from "react";

import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import { ProfileType } from "./ProfileContainer";
import ProfileInfo from "./ProfileInfo";

type PropsProfileType = {
	profile: ProfileType
}

const Profile = (props: PropsProfileType) => {
	return (
		<>
			<ProfileInfo profile={props.profile} />
			<MyPostsContainer />
		</>
	)
}

export default Profile;