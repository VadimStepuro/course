import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, FormControl, Label, Input, Container, Row, Col } from "reactstrap";
import { CategoryContext, ProductDispatch } from "../contexts/ProductContextProvider";
import Header from "../home/Header";
import Footer from "../home/Footer";
import { Authorise } from "./Authorise";



const Login = ({error}) => {
    const dispatch = useContext(ProductDispatch);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    

    let history = useNavigate()

    const handleLogIn = () =>{
        return Authorise({
            login:login,
            password:password
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let product = handleLogIn();

        history("/")
    }


    return(
        <div>
        <Header/>
        <Container style={{width:300}}>
            <h3>Log In</h3>
            <Form>
                <FormGroup>
                    <Label for="login">Login</Label>
                    <Input type="text" name="login" id="login" placeholder="Type login" onChange={(e) => {setLogin(e.target.value)}}/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Type password" onChange={(e) => {setPassword(e.target.value)}}/>
                </FormGroup>
                
                <Link to={"/"}>
                    <Button color="success" onClick={(e) => handleSubmit(e)}>Log in</Button>
                </Link>

            </Form>
        </Container>
        <Footer/>
        </div>
    )
}

export default Login;