import React from "react";

type MessageType = {
	message: string
}

function Post(props: MessageType) {
	return (
		<div className="userItem">
			<img className="userImage" src="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" alt="" />
			<div className="itemPost">{props.message}</div>
		</div>
	)
}

export default Post;