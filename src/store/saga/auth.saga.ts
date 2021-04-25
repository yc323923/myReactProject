import axios from "axios";
import { takeEvery,put } from "redux-saga/effects"
import { SIGNUP, SignupAction, signupSuccess, signupFail, SIGNIN, SigninAction, signinSuccess, signinFail } from '../actions/auth.action';
import { API } from "../../config";

function* handleSignup(action:SignupAction){
    try {
        yield axios.post("/api/signup",action.payload)
        yield put(signupSuccess())
    } catch (error) {
        yield put(signupFail(error.response.data.error))
    }

}
interface Res{
    data:object
}

export interface JWT{
    name:string
    email:string
    password:string
}

function* handleSignin(action:SigninAction){
    try {
        if(Math.random()>0.5) throw new Error("登录失败")
        // let response:Res = yield axios.post(`${API}/signin`, action.payload)
        yield localStorage.setItem("jwt", JSON.stringify(action.payload))
        yield put(signinSuccess())
    } catch (error) {
        console.dir(error.message,111)
        yield put(signinFail(error.message))
    }

}
export default function* authSaga(){
    //接受注册的action
   yield takeEvery(SIGNUP,handleSignup)
   //接受登陆的action
   yield takeEvery(SIGNIN,handleSignin)
}