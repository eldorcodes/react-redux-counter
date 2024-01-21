import logo from './logo.svg';
import './App.css';
import CounterComponent from './components.js/CounterComponent';
import DataCOmponent from './components.js/DataCOmponent';
import CounterPage from './reduxExamples/redux/CounterPage';
import MyComponent from './MyStore/MyComponent';
import ChatRoom from './MyStore/ChatRoom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <CounterComponent />
       <DataCOmponent /> */}
       <ChatRoom />
      </header>
    </div>
  );
}

export default App;
