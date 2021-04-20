import { routerMiddleware } from "connected-react-router";//监听路由变化，当变化的时候 dispatch一个action
import { createHashHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import createRootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from './saga/index';
import { composeWithDevTools } from "redux-devtools-extension";

export  const history = createHashHistory();
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(createRootReducer(history),
composeWithDevTools(applyMiddleware(routerMiddleware(history),sagaMiddleWare))
);
sagaMiddleWare.run(rootSaga)
export default store;