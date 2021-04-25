import React, { FC } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { isAuth } from '../helpers/auth';


interface PrivateRouteProps extends RouteProps{
    component:React.ComponentType<any>

}
export const PrivateRoute:FC<PrivateRouteProps> = ({component:Component,...rest}) => {
    console.log(rest,4455)
    return (
        <Route {...rest} render={(props)=>{
            const auth = isAuth()
            if(auth){
                return <Component {...props}></Component>
            }else{
                return <Redirect to="/signin"></Redirect>
            }
        }}></Route>
    )
}
