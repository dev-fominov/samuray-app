import React from "react";

import { PageType } from "../../../App";
import MyPosts from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo";

const Profile = (props: PageType) => {
	return (
		<>
			<ProfileInfo/>
			<MyPosts posts={props.posts} />
		</>
	)
}

export default Profile;