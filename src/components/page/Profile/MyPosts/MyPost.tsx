import React, { ChangeEvent } from "react";

import Post from "./Post/Post";
import s from '../Profile.module.scss';
import { ActionsTypes, PostType } from "../../../../Types";
import Button from "../../../Parts/Button/Button";

type MyPostType = {
	posts: PostType[]
	newPostText: string
	dispath: (action: ActionsTypes)=>void
	addPost: () => void
	updateNewPost: (newPostText: string) => void
}



const MyPosts = (props: MyPostType) => {

	const addPost = () => {
		// props.addPost()
		props.dispath({ type: "ADD-POST", newPostText: props.newPostText })
	}

	const updateNewPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		// props.updateNewPost(e.currentTarget.value)
		props.dispath({ type: "CHANGE-NEW-TEXT", newPostText: e.currentTarget.value })
	}

	return (
		<div className={s.postsBlockContent}>
			<div className={s.myPosts}>
				<h2>My posts</h2>
				<div className={s.addMessage}>
					<textarea
						onChange={updateNewPostHandler}
						value={props.newPostText}
					></textarea>
					<Button name={'Add post'} callBack={addPost} />
				</div>
			</div>
			<div className={s.postsContent}>
				{props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount} />)}
			</div>
		</div>
	)
}

export default MyPosts;