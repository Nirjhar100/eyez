import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/firestore' // <- needed if using firestore
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase'

  
const config = {
    apiKey: "AIzaSyDkJqA81scRpINtQiH8f6nistwJVD7c4KE",
    authDomain: "eyez-faec9.firebaseapp.com",
    databaseURL: "https://eyez-faec9.firebaseio.com",
    projectId: "eyez-faec9",
    storageBucket: "eyez-faec9.appspot.com",
    messagingSenderId: "392872339039",
    appId: "1:392872339039:web:80576a1a2ee822cc3f5dea",
    measurementId: "G-BBF4CVLBPC"
  };
  firebase.initializeApp(config);
  
const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
));

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }
 const rrfProps = {
      firebase,
      config: rrfConfig,
      dispatch: store.dispatch,
      createFirestoreInstance // <- needed if using firestore
    }
ReactDOM.render(<Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><App /></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
