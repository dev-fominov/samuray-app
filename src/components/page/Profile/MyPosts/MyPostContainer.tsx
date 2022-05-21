// import React from "react";

import { addPostActionCreator, changeNewTextActionCreator, PostType } from "../../../../redux/profile-reducer";
import MyPosts from "./MyPost";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../../../redux/redux-store";

type mapStateToPropsType = {
	posts: PostType[]
	newPostText: string
}

type mapDispatchToPropsType = {
	updateNewPostText: (text: string)=>void
	addPost: ()=>void
}

export type MyPostPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
	return {
		updateNewPostText: (text: string)=>{dispatch(changeNewTextActionCreator(text))},
		addPost: ()=>{dispatch(addPostActionCreator())}
	}
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

// export default MyPostsContainer