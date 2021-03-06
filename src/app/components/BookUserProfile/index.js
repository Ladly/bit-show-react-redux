import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

export const BookUserProfile = ({profile, displayModal}) => {

	const displayButton = () => {
		if(typeof displayModal !== 'undefined') {
			return <button onClick={displayModal} className="btn btn-primary btn-sm">Update profile</button>
		}
	}

	return (
		<div className="profile-holder">
			<img className="profile-avatar" src={profile.avatarUrl} alt="profile avatar" />
			<div className="profile-details">
				<h2>{profile.name}</h2>
				{displayButton()}
				<p>{profile.aboutShort}</p>
			</div>
			<div className="profile-holder-footer">
				<div className="pc">
					 <div className="pc-circle">P</div> <span>{profile.postsCount}</span>
				</div>
				<div className="pc">
					<div className="pc-circle">C</div> <span>{profile.commentsCount}</span>
				</div>
			</div>
		</div>
	)
}

BookUserProfile.propTypes = {
	profile: PropTypes.object,
	displayModal: PropTypes.func
}