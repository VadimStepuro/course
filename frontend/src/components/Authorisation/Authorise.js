import { authorise, register } from "../../api/apiCalls";

export function Authorise(user){

    authorise({
        login:user.login,
        password:user.password
    })
}

export function Register(user){
    console.log(user);
    register({
        login:user.login,
        password:user.password,
        weight:user.weight,
        height:user.height,
        birthdate:user.birthdate
    })
}