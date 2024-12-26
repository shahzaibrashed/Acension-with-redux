import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { persistStore} from "redux-persist";

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistore = persistStore(store)

root.render(
  <Provider store={store}>
 <React.StrictMode>
  <persistGate persistore={persistore} >
  <App />
  </persistGate>
  </React.StrictMode>
  </Provider>
 
);
reportWebVitals();
