import { UserRecommendation } from './UserRecommendation.jsx'

import '../../styles/Widgets.css'

export function WhoToFollow ( {
  recommendedUsers= [{
    userName: "JohnDoe", 
    displayName: "John Doe", 
    userBio: "Lorem ipsum dolor sit amet consectetur.", 
    initialIsFollowing: false}]
}) 
{
	return (
		<article className='WhoToFollow'>
      <h2>Who to follow</h2>
      {
        recommendedUsers.map((user) => 
          <UserRecommendation key={user.userName}
          userName={user.userName} 
          displayName={user.displayName} 
          userBio={user.userBio} 
          initialIsFollowing={user.initialIsFollowing} 
          />
        )
      }
      <a href="https://x.com/explore/tabs/for-you">
        <span className="ShowMore">Show more</span>
      </a>
    </article>
	);
}

{/* <UserRecommendation>children</UserRecommendation> 
    children: any element structure or component, can be nested.
    we could remove usernName and write it as children, then we 
    could remove displayName and write it as children in UserRecommendation
*/}