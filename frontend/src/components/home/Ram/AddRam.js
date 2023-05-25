import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, FormControl, Label, Input, Container, Row, Col, FormFeedback } from "reactstrap";
import { addProcessor, addRam, addVideocard } from "../../../api/apiCalls";
import Footer from "../Footer";
import Header from "../Header";
import ApiHandler from "../../../api/apiHandler";
import { ProcessorDispatch } from "../../contexts/ProcessorsContext";
import { VideocardContext, VideocardDispatch } from "../../contexts/VideoCardContext";
import { RamDispatch } from "../../contexts/RamContext";


const AddRam = () => {
    const dispatch = useContext(RamDispatch);

    const [name, setName] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [cost, setCost] = useState();

    const [type, setType] = useState('');
    const [timings, setTimings] = useState('');
    const [capacity, setCapacity] = useState();
    const [frequency, setFrequency] = useState();


    const [isValidName, setIsValidName] = useState('');
    const [isValidManufacturer, setIsValidManufacturer] = useState('');
    const [isValidCost, setIsValidCost] = useState('');

    const [isValidType, setIsValidType] = useState('');
    const [isValidTimings, setIsValidTimings] = useState('');
    const [isValidCapacity, setIsValidCapacity] = useState('');
    const [isValidFrequency, setIsValidFrequency] = useState('');


    const validateName = (e) =>{
        if(!e.target.value){
            setIsValidName('bad');
        }
        else{
            setIsValidName('good');
        }
    }

    const validateManufacturer = (e) =>{
        if(!e.target.value){
            setIsValidManufacturer('bad');
        }
        else{
            setIsValidManufacturer('good');
        }
    }

    const validateCost = (e) => {
        if(e.target.value > 0){
            setIsValidCost('good');
        }
        else{
            setIsValidCost('bad');
        }
    }

    const validateTimings = (e) => {
        if(!e.target.value){
            setIsValidTimings('bad');
        }
        else{
            setIsValidTimings('good');
        }
    }

    const validateType = (e) => {
        if(!e.target.value){
            setIsValidType('bad');
        }
        else{
            setIsValidType('good');
        }
    }

    const validateCapacity = (e) => {
        if(e.target.value > 0){
            setIsValidCapacity('good');
        }
        else{
            setIsValidCapacity('bad');
        }
    }

    const validateFrequency = (e) =>{
        if(e.target.value > 0){
            setIsValidFrequency('good');
        }
        else{
            setIsValidFrequency('bad');
        }
    }
    

    let history = useNavigate()

    const createRam = () =>{
        
        return addRam({
            product:{
                name:name,
                manufacturer:manufacturer,
                cost:parseInt(cost)
                },
            timings:timings,
            type:type,
            capacity:parseInt(capacity),
            frequency:parseInt(frequency)
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let ram = createRam();
        ram.then((newRam) => {
        dispatch({
            type:"ADD_RAM",
            item:{
                ramId: newRam.ramId,
                product:{
                    name:name,
                    manufacturer:manufacturer,
                    cost:parseInt(cost)
                    },
                timings:timings,
                type:type,
                capacity:parseInt(capacity),
                frequency:parseInt(frequency)
            }
        });
        history("/ram")});
    }


    return(
        <div>
        <Header/>
        <Container style={{width:300, marginTop:20, marginBottom:20}}>
            <h3>Ram</h3>
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Product name" valid={isValidName === 'good'} invalid={isValidName === 'bad'} onChange={(e) => {setName(e.target.value); validateName(e)}}/>
                    <FormFeedback>Please type name</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="manufacturer">Manufacturer</Label>
                    <Input type="text" name="manufacturer" id="manufacturer" placeholder="Manufacturer" valid={isValidManufacturer === 'good'} invalid={isValidManufacturer === 'bad'} onChange={(e) => {setManufacturer(e.target.value); validateManufacturer(e)}}/>
                    <FormFeedback>Please type manufacturer</FormFeedback>

                </FormGroup>
                <FormGroup>
                    <Label for="cost">Cost</Label>
                    <Input type="number" name="cost" id="cost" placeholder="Cost" valid={isValidCost === 'good'} invalid={isValidCost === 'bad'} onChange={(e) => {setCost(e.target.value); validateCost(e)}}/>
                    <FormFeedback>Please type valid cost</FormFeedback>

                </FormGroup>
                <FormGroup>
                    <Label for="timings">Timings</Label>
                    <Input type="text" name="timings" id="timings" placeholder="Timings" valid={isValidTimings === 'good'} invalid={isValidTimings === 'bad'} onChange={(e) => {setTimings(e.target.value); validateTimings(e)}}/>
                    <FormFeedback>Please type timings</FormFeedback>

                </FormGroup>
                <FormGroup>
                    <Label for="type">Type</Label>
                    <Input type="text" name="type" id="type" placeholder="Type" valid={isValidType === 'good'} invalid={isValidType === 'bad'} onChange={(e) => {setType(e.target.value); validateType(e)}}/>
                    <FormFeedback>Please type type</FormFeedback>

                </FormGroup>
                <FormGroup>
                    <Label for="capacity">Capacity</Label>
                    <Input type="number" name="capacity" id="capacity" placeholder="Capacity" valid={isValidCapacity === 'good'} invalid={isValidCapacity === 'bad'} onChange={(e) => {setCapacity(e.target.value); validateCapacity(e)}}/>
                    <FormFeedback>Please type valid capacity</FormFeedback>

                </FormGroup>

                <FormGroup>
                    <Label for="frequency">Frequency</Label>
                    <Input type="number" name="frequency" id="frequency" placeholder="Frequency" valid={isValidFrequency === 'good'} invalid={isValidFrequency === 'bad'} onChange={(e) => {setFrequency(e.target.value); validateFrequency(e)}}/>
                    <FormFeedback>Please type valid frecuency</FormFeedback>

                </FormGroup>

                <Link to={"/ram"}>
                    <Button color="success" disabled={ isValidName==='bad' || isValidManufacturer==='bad' || isValidCost==='bad' || isValidCapacity==='bad' || isValidType==='bad' || isValidTimings==='bad' || isValidFrequency==='bad' ||
                    isValidName==='' || isValidManufacturer==='' || isValidCost==='' || isValidCapacity==='' || isValidType==='' || isValidTimings==='' || isValidFrequency===''}
                     onClick={(e) => handleSubmit(e)}>Submit</Button>
                </Link>

            </Form>
        </Container>
        <Footer/>
        </div>      
    )
}

export default AddRam;