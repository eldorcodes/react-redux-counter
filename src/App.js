import logo from './logo.svg';
import './App.css';
import CounterComponent from './components.js/CounterComponent';
import DataCOmponent from './components.js/DataCOmponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <CounterComponent />
       <DataCOmponent />
      </header>
    </div>
  );
}

export default App;
