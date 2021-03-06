'use strict';

import {createStore, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,  
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
