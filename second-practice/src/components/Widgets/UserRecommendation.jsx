import { useState } from "react";

export function UserRecommendation (
	{ userName="JohnDoe", 
		displayName="John Doe", 
		initialIsFollowing=false
	}
) 
{
	const image = `https://unavatar.io/${userName}?fallback=https://avatar.vercel.sh/37t?size=400`;
	
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
	const [isHovered, setIsHovered] = useState(false);
	
	const buttonText = isFollowing 	
		? isHovered 
			? "Unfollow"
			: "Following"
		: "Follow";
	const buttonStatus = isFollowing 
		? 'following' 
		: 'not-following';
	
	const handleFollow = () => {
		setIsFollowing(!isFollowing);
	};
	const handleButtonHoverEnter = () => {
		if (!isFollowing) return;
		
		setIsHovered(true);
	}
	
	const handleButtonHoverLeave = () => {
		if (!isFollowing) return;
		
		setIsHovered(false);
	}
	
	return (
		<section className="UserRecommendation">
			<img src={image} alt="user-avatar image" />
			<div>
				<h3>{displayName}</h3>
				<span>@{userName}</span>
			</div>
			<aside>
				<button 
					onMouseEnter={handleButtonHoverEnter} 
					onMouseLeave={handleButtonHoverLeave}
					onClick={handleFollow} 
					className="FollowButton" 
					data-status={buttonStatus}
				>
					{buttonText}
				</button>
			</aside>
		</section>
	);
}