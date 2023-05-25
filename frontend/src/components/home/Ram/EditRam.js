import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, FormControl, Label, Input, Container, Row, Col, FormFeedback } from "reactstrap";
import { addProcessor, editProcessor, editRam, editVideocard } from "../../../api/apiCalls";
import Footer from "../Footer";
import Header from "../Header";
import ApiHandler from "../../../api/apiHandler";
import { ProcessorDispatch } from "../../contexts/ProcessorsContext";
import { VideocardDispatch } from "../../contexts/VideoCardContext";
import { RamDispatch } from "../../contexts/RamContext";


const EditRam = ({ram}) => {
    const dispatch = useContext(RamDispatch);

    console.log(ram);

    const [name, setName] = useState(ram.product.name);
    const [manufacturer, setManufacturer] = useState(ram.product.manufacturer);
    const [cost, setCost] = useState(ram.product.cost);

    const [type, setType] = useState(ram.type);
    const [timings, setTimings] = useState(ram.timings);
    const [capacity, setCapacity] = useState(ram.capacity);
    const [frequency, setFrequency] = useState(ram.frequency);


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

    const validateType = (e) => {
        if(!e.target.value){
            setIsValidType('bad');
        }
        else{
            setIsValidType('good');
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

    const updateRam = () =>{
        
        return editRam({
            ramId:ram.ramId,
            product:{
                name:name,
                manufacturer:manufacturer,
                cost:parseInt(cost)
                },
            type:type,
            timings:timings,
            capacity:parseInt(capacity),
            frequency:parseInt(frequency)
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        updateRam();
        dispatch({
            type:"UPDATE_RAM",
            item:{
                ramId:ram.ramId,
                product:{
                    name:name,
                    manufacturer:manufacturer,
                    cost:parseInt(cost)
                    },
                type:type,
                timings:timings,
                capacity:parseInt(capacity),
                frequency:parseInt(frequency)
            }
        });
        history("/ram")
    }


    return(
        <div>
        <Header/>
        <Container style={{width:300, marginTop:20, marginBottom:20}}>
            <h3>Ram</h3>
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder={ram.product.name} valid={isValidName === 'good'} invalid={isValidName === 'bad'} onChange={(e) => {setName(e.target.value); validateName(e)}}/>
                    <FormFeedback>Please type name</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="manufacturer">Manufacturer</Label>
                    <Input type="text" name="manufacturer" id="manufacturer" placeholder={ram.product.manufacturer} valid={isValidManufacturer === 'good'} invalid={isValidManufacturer === 'bad'} onChange={(e) => {setManufacturer(e.target.value); validateManufacturer(e)}}/>
                    <FormFeedback>Please type manufacturer</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="cost">Cost</Label>
                    <Input type="number" name="cost" id="cost" placeholder={ram.product.cost} valid={isValidCost === 'good'} invalid={isValidCost === 'bad'} onChange={(e) => {setCost(e.target.value); validateCost(e)}}/>
                    <FormFeedback>Please type valid cost</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="type">Type</Label>
                    <Input type="text" name="type" id="type" placeholder={ram.type} valid={isValidType === 'good'} invalid={isValidType === 'bad'} onChange={(e) => {setType(e.target.value); validateType(e)}}/>
                    <FormFeedback>Please type type</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="timings">Timings</Label>
                    <Input type="text" name="timings" id="timings" placeholder={ram.timings} valid={isValidTimings === 'good'} invalid={isValidTimings === 'bad'} onChange={(e) => {setTimings(e.target.value); validateTimings(e)}}/>
                    <FormFeedback>Please type timings</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="capacity">Capacity</Label>
                    <Input type="number" name="capacity" id="capacity" placeholder={ram.capacity} valid={isValidCapacity === 'good'} invalid={isValidCapacity === 'bad'} onChange={(e) => {setCapacity(e.target.value); validateCapacity(e)}}/>
                    <FormFeedback>Please type valid capacity</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="frequency">Frequency</Label>
                    <Input type="number" name="frequency" id="frequency" placeholder={ram.frequency} valid={isValidFrequency === 'good'} invalid={isValidFrequency === 'bad'} onChange={(e) => {setFrequency(e.target.value); validateFrequency(e)}}/>
                    <FormFeedback>Please type valid frequency</FormFeedback>
                </FormGroup>
                <Link to={"/ram"}>
                    <Button color="success" disabled={ isValidName==='bad' || isValidManufacturer==='bad' || isValidCost==='bad' || isValidCapacity==='bad' || isValidTimings==='bad' || isValidType==='bad' || isValidFrequency==='bad'} 
                    onClick={(e) => handleSubmit(e)}>Submit</Button>
                </Link>

            </Form>
        </Container>
        <Footer/>
        </div>      
    )
}

export default EditRam;