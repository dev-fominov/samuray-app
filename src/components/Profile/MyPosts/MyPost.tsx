import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div className="posts-block-content">
			<div className="my-posts">
				My posts
			</div>
			<div className="posts-content">

				<Post message="First Message" />
				<Post message="Second Message" />

			</div>
		</div>
	)
}

export default MyPosts;