import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promise-middleware';
import { error, loading } from '../components/app/reducers';
import { previews } from '../components/form/reducers';
import { selectedPhoto, essays, selectedEssay } from '../components/blog/reducers';


const rootReducer = combineReducers({
  error,
  loading,
  previews,
  selectedPhoto,
  essays,
  selectedEssay
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    )
  )
);

export default store;