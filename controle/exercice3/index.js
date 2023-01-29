import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
// import App from '../exercice2/App';
// import ComposantButeurs from '../Buteurs';
import reducer from './reducers';
import Tasks from './Tasks';

const myStore=legacy_createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  // <ComposantButeurs/>
  // <App/>

<Provider store={myStore}>
  <Tasks/>
</Provider>
);


