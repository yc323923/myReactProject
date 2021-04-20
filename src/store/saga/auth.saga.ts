import axios from "axios";
import { takeEvery,put } from "redux-saga/effects"
import { SIGNUP, SignupAction, signupSuccess, signupFail, SIGNIN, SigninAction } from '../actions/auth.action';
import { API } from "../../config";

function* handleSignup(action:SignupAction){
    try {
        yield axios.post("/api/signup",action.payload)
        yield put(signupSuccess())
    } catch (error) {
        yield put(signupFail(error.response.data.error))
    }

}

function* handleSignin(action:SigninAction){
    try {
        yield axios.post("/api/signin",action.payload)
        yield put(signupSuccess())
    } catch (error) {
        yield put(signupFail(error.response.data.error))
    }

}
export default function* authSaga(){
    //接受注册的action
   yield takeEvery(SIGNUP,handleSignup)
   //接受登陆的action
   yield takeEvery(SIGNIN,handleSignin)
}