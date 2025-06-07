import './App.css';
<<<<<<< HEAD
//A constant export should be imported with { }
import { Greet } from './components/Greet'

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1><Greet /></h1>
      </div>
    </div>
  );
}

export default App;
=======
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
>>>>>>> c9339d5fb8f49f720a6bffb488b9568553924de6
