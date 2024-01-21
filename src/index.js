import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import { Store } from './reduxExamples/redux/Store';
import { MyStore } from './MyStore/MyStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={MyStore}>
    <App />
  </Provider>
);

reportWebVitals();
