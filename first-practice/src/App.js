import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Body/Home';

function App() {
    return (
      <div className="App">
        <Navbar />
        <div className="Content">
            <Home />
        </div>
      </div>
    );
  }
  
  export default App;
