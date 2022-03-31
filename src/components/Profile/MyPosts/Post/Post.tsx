import React from "react";
import s from '../../Profile.module.scss';

type MessageType = {
	message: string
}

function Post(props: MessageType) {
	return (
		<div className={s.userItem}>
			<img className={s.userImage} src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" />
			<div className={s.itemPost}>{props.message}</div>
		</div>
	)
}

export default Post;