import {compose, createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import users from "redux/modules/users"
import {connectRouter, routerMiddleware} from 'connected-react-router'
import {composeWithDevTools} from 'redux-devtools-extension'
import {i18nState} from "redux-i18n";

const env = process.env.NODE_ENV;

const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (env === 'development') {
  const {logger} = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  users,
  router:connectRouter(history),
  i18nState
});

let store;
if(env==='development'){
  store = initialState =>
      createStore(
          connectRouter(history)(reducer),
          composeWithDevTools(applyMiddleware(...middlewares))
      );
}else{
  store = initialState =>
      createStore(
          connectRouter(history)(reducer),
          compose(applyMiddleware(...middlewares))
      );

}

export {history};

export default store();
