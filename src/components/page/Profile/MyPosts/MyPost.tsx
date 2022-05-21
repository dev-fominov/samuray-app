import React, { ChangeEvent } from "react";

import Post from "./Post/Post";
import s from '../Profile.module.scss';
import Button from "../../../Parts/Button/Button";
import { MyPostPropsType } from "./MyPostContainer";

const MyPosts = (props: MyPostPropsType) => {

	const postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />)

	const onAddPost = () => {
		props.addPost()
	}

	const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		props.updateNewPostText(e.currentTarget.value)
	}

	return (
		<div className={s.postsBlockContent}>
			<div className={s.myPosts}>
				<h2>My posts</h2>
				<div className={s.addMessage}>
					<textarea
						onChange={onPostChange}
						value={props.newPostText}
					></textarea>
					<Button name={'Add post'} callBack={onAddPost} />
				</div>
			</div>
			<div className={s.postsContent}>
				{ postsElements }
			</div>
		</div>
	)
}

export default MyPosts;