import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Container, FormFeedback} from "reactstrap";
import Header from "../home/Header";
import Footer from "../home/Footer";
import { Register } from "./Authorise";



const Registration = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [isValidLogin, setIsValidLogin] = useState('');
    const [isValidPassword, setIsValidPassword] = useState('');
    const [isValidPasswordConfirm, setIsValidPasswordConfirm] = useState('');


    let history = useNavigate()

    const handleLogIn = () =>{
        Register({
            login:login,
            password:password
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogIn();
        history("/")
    }

    const validateLogin = (e) =>{
        if(!e.target.value){
            setIsValidLogin('bad');
        }
        else{
            setIsValidLogin('good');
        }
    }

    const validatePassword = (e) =>{
        if(e.target.value.length < 8 || e.target.value.search(/[a-z]/) < 0 || e.target.value.search(/[A-Z]/) < 0 || e.target.value.search(/[0-9]/) < 0){
            setIsValidPassword('bad');
        }
        else{
            setIsValidPassword('good');
        }
    }

    const validatePasswordConfirm = (e) =>{
        if(e === password){
            setIsValidPasswordConfirm('good')
        }
        else{
            setIsValidPasswordConfirm('bad');
        }
    }

    return(
        <div>
        <Header/>
        <Container style={{width:300}}>
            <h3>Registration</h3>
            <Form>
                <FormGroup>
                    <Label for="login">Login</Label>
                    <Input type="text" name="login" id="login" placeholder="Type login" invalid={isValidLogin === 'bad'} valid={isValidLogin === 'good'} onChange={(e) => {setLogin(e.target.value); validateLogin(e)}}/>
                    <FormFeedback>Please type login</FormFeedback>
                    <FormFeedback valid>Oh my gosh what a beautiful name</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Type password" invalid={isValidPassword === 'bad'} valid={isValidPassword === 'good'} onChange={(e) => {setPassword(e.target.value); validatePassword(e); validatePasswordConfirm(passwordConfirm)}}/>
                    <FormFeedback>Your password should have 8 elements, uppercase, lowercase, digits and special characters</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="passwordConfirm">Password</Label>
                    <Input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirm password" invalid={isValidPasswordConfirm === 'bad'} valid={isValidPasswordConfirm === 'good'} onChange={(e) => {setPasswordConfirm(e.target.value); validatePasswordConfirm(e.target.value)}}/>
                    <FormFeedback>Your passwords aren't the same</FormFeedback>
                </FormGroup>
                
                <Link to={"/"}>
                    <Button color="success" onClick={(e) => handleSubmit(e)} disabled={ isValidLogin==='bad' || isValidPassword==='bad' || isValidPasswordConfirm==='bad' ||
                    isValidLogin==='' || isValidPassword==='' || isValidPasswordConfirm===''}>Register</Button>
                </Link>

            </Form>
        </Container>
        <Footer/>
        </div>
    )
}

export default Registration;