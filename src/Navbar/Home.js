import { useState } from "react";

const Zero = 0

const Home = () => {
    
    const states = ['Home Page', 'Weird']
    
    const [state, setState] = useState(states[0])
    
    const handleClick = (videoID) => {
        const currentIndex = states.indexOf(state);
        const nextIndex = (currentIndex + 1) % states.length;
        
        if(!(nextIndex === Zero))
            window.open("https://www.youtube.com/watch?v=" + videoID, "_blank");
        
        setState(states[nextIndex]);
    }
    
    return ( 
        <div className="Home">
            <h2> {state} </h2>
            <button onClick={ () => handleClick("CeinUH3jnqw") }>Click me</button>
        </div>
     );
}
 
export default Home;