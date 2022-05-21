import React from "react";

import {MyPostsContainer} from "./MyPosts/MyPostContainer";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
	return (
		<>
			<ProfileInfo />
			<MyPostsContainer />
		</>
	)
}

export default Profile;