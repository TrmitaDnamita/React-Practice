import './App.css';
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