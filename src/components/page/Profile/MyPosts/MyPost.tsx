import React from "react";
import Post from "./Post/Post";
import s from '../Profile.module.scss';

const MyPosts = () => {
	return (
		<div className={s.postsBlockContent}>
			<div className={s.myPosts}>
				<h2>My posts</h2>
				<div className={s.addMessage}>
					<textarea></textarea>
					<button>Add post</button>
				</div>
			</div>
			<div className={s.postsContent}>

				<Post message="First Message" />
				<Post message="Second Message" />

			</div>
		</div>
	)
}

export default MyPosts;