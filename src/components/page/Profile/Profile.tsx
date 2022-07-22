import { ProfileType } from "../../../api/api"

import {MyPostsContainer} from "./MyPosts/MyPostContainer"
import ProfileInfo from "./ProfileInfo"

type PropsProfileType = {
	profile: ProfileType | null
}

const Profile = (props: PropsProfileType) => {
	return (
		<>
			<ProfileInfo profile={props.profile} />
			<MyPostsContainer />
		</>
	)
}

export default Profile