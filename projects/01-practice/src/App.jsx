import { WhoToFollow } from './components/Widgets/WhoToFollow.jsx'
import './styles/App.css'

const usersByInterest = [
  {
    userName: 'x',
    displayName: 'X',
    userBio: 'Lorem ipsum dolor sit amet consectetur.',
    isFollowing: false
  },
  {
    userName: 'KikoBeats',
    displayName: 'Kiko Beats',
    userBio: 'Lorem ipsum dolor sit amet consectetur.',
    isFollowing: false
  },
  {
    userName: 'YouTube',
    displayName: 'YouTube',
    userBio: 'Lorem ipsum dolor sit amet consectetur.',
    isFollowing: false
  },
  {
    userName: 'FRIEREN_PR',
    displayName: '『葬送のフリーレン』公式',
    userBio: 'Lorem ipsum dolor sit amet consectetur.',
    isFollowing: false
  },
  {
    userName: 'charborgg',
    displayName: 'charborgg 🐟',
    userBio: 'Lorem ipsum dolor sit amet consectetur.',
    isFollowing: false
  }
];

const recommendations = () => {
  const recommendation = [];
  const usedRecommendation = new Set();
  
  const usersByInterestLength = usersByInterest.length;
  let index = 0;
  
  while (recommendation.length < 3) {
    const user = usersByInterest[index % usersByInterestLength].userName;
    if (Math.random() * 100 > 50 && !usedRecommendation.has(user)) {
      recommendation.push(usersByInterest[index % usersByInterestLength]);
      usedRecommendation.add(user);
    }
    index++;
  }
  return recommendation;
};

export function App () {
	return (
    <div className="App">
      <WhoToFollow recommendedUsers={recommendations()}/>
    </div>
	);
}