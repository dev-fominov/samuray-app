import React from "react";
import MyPosts from "./MyPosts/MyPost";
import './Profile.css';

const Profile = () => {
	return (
		<>
			<div className="content">
				<div className="header-content">
					<img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" alt="Background" />
				</div>
				<div className="user-content">
					<div className="photo-user">
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWfY8lPOjrVhShtfBF5GZyf_CYKPvt4OHEbIgSNfQudHS4ZebueQItGZ1XZrnA6H2mpU&usqp=CAU" alt="User" />
					</div>
					<div className="info-user">
						<div className="name">Dmitriy</div>
						<ul>
							<li><span>Date of birsday: </span><span>2 january</span></li>
							<li><span>City: </span><span>Minsk</span></li>
							<li><span>Educations: </span><span>BSU</span></li>
							<li><span>Web Site: </span><span>it-kamasutra</span></li>
						</ul>
					</div>
				</div>
			</div>
			<MyPosts />
		</>
	)
}

export default Profile;