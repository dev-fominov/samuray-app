import React from "react";
import Post from "./Post/Post";
import s from '../Profile.module.scss';

const MyPosts = () => {
	return (
		<div className={s.postsBlockContent}>
			<div className={s.myPosts}>
				My posts
			</div>
			<div className={s.postsContent}>

				<Post message="First Message" />
				<Post message="Second Message" />

			</div>
		</div>
	)
}

export default MyPosts;