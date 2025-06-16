import { UserRecommendation } from './UserRecommendation.jsx'

import '../../styles/Widgets.css'
export function WhoToFollow () {
  const x = { userName: 'x', displayName: 'X', isFollowing: true };
  const KikoBeats = { userName: 'KikoBeats', displayName: 'Kiko Beats', isFollowing: false };
  const YouTube = { userName: 'YouTube', displayName: 'YouTube', isFollowing: false };
  
	return (
		<article className='WhoToFollow'>
      <h2>Who to follow</h2>
      <UserRecommendation {... x} />
      <UserRecommendation {... KikoBeats} />
      <UserRecommendation userName='YouTube' displayName='YouTube' isFollowing={false} />
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