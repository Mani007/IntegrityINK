import logo from './logo.svg';
import './App.css';
import Counter from './Components/Testzustand';

function App() {
  return (
    <div className="text-3xl font-bold underline">
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> <br />
        <Counter/>
     
    </div>
  );
}

export default App;
