import React from "react";
import Preloader from "../../command/Preloader";
import s from './Profile.module.scss';
import { ProfileType } from "./ProfileContainer";

type ProfileInfoType = {
	profile: ProfileType
}

function ProfileInfo(props: ProfileInfoType) {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={s.content}>
			<div className={s.headerContent}>
				<img src={props.profile?.photos?.large} alt="Background" />
			</div>
			<div className={s.userContent}>
				<div className={s.photoUser}>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWfY8lPOjrVhShtfBF5GZyf_CYKPvt4OHEbIgSNfQudHS4ZebueQItGZ1XZrnA6H2mpU&usqp=CAU" alt="User" />
				</div>
				<div className={s.infoUser}>
					<div className={s.name}>Dmitriy</div>
					<ul>
						<li><span>Date of birsday: </span><span>2 january</span></li>
						<li><span>City: </span><span>Minsk</span></li>
						<li><span>Educations: </span><span>BSU</span></li>
						<li><span>Web Site: </span><span>it-kamasutra</span></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo