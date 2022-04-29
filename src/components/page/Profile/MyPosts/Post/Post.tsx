import React from "react";

import s from '../../Profile.module.scss';

export type PostType = {
  id: string
  message: string
  likesCount: number
}

export type PostsType = {
  posts: PostType[]
}

function Post(props: PostType) {
	return (
		<div className={s.userItem}>
			<img className={s.userImage} src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" />
			<div className={s.itemPost}>
				<span>{props.message}</span>
				<span>Like: {props.likesCount}</span>
			</div>
		</div>
	)
}

export default Post;