export function isAuth():boolean|object{
    const jwt = localStorage.getItem('jwt')
    if(jwt){
        return JSON.parse(jwt)
    }
    return false
}