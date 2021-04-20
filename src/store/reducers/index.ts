import { connectRouter, RouterState } from "connected-react-router";
import { combineReducers } from "redux";
import testReducer from './test.reducer';
import authReducer from './auth.reducer';
import { AuthState } from './auth.reducer';


export interface AppState {
    router:RouterState,
    auth:AuthState
}
const createRootReducer =(history:any)=> combineReducers({
    auth:authReducer,
    router: connectRouter(history)
})

export default createRootReducer;
