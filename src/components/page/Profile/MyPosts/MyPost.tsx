import React from "react";
import Post from "./Post/Post";
import s from '../Profile.module.scss';
import { PageType } from "../../../../App";

const MyPosts = (props: PageType) => {
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
				{props.posts.map(p=><Post id={p.id} message={p.message} likesCount={p.likesCount} />)}

			</div>
		</div>
	)
}

export default MyPosts;