import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, FormControl, Label, Input, Container, Row, Col, FormFeedback } from "reactstrap";
import { addProcessor } from "../../../api/apiCalls";
import Footer from "../Footer";
import Header from "../Header";
import ApiHandler from "../../../api/apiHandler";
import { ProcessorDispatch } from "../../contexts/ProcessorsContext";


const AddProcessor = () => {
    const dispatch = useContext(ProcessorDispatch);

    const [name, setName] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [cost, setCost] = useState();

    const [frecuency, setFrequency] = useState();
    const [cache, setCache] = useState();
    const [cors, setCors] = useState();

    const [isValidName, setIsValidName] = useState('');
    const [isValidManufacturer, setIsValidManufacturer] = useState('');
    const [isValidCost, setIsValidCost] = useState('');

    const [isValidFrequency, setIsValidFrequency] = useState('');
    const [isValidCache, setIsValidCache] = useState('');
    const [isValidCors, setIsValidCors] = useState('');

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

    const validateFrequency = (e) => {
        if(e.target.value > 0){
            setIsValidFrequency('good');
        }
        else{
            setIsValidFrequency('bad');
        }
    }

    const validateCache = (e) => {
        if(e.target.value > 0){
            setIsValidCache('good');
        }
        else{
            setIsValidCache('bad');
        }
    }

    const validateCors = (e) => {
        if(e.target.value > 0){
            setIsValidCors('good');
        }
        else{
            setIsValidCors('bad');
        }
    }

    let history = useNavigate()

    const createProcessor = () =>{
        
        return addProcessor({
            product:{
                name:name,
                manufacturer:manufacturer,
                cost:parseInt(cost)
                },
            frequency:parseInt(frecuency),
            cache:parseInt(cache),
            cors:parseInt(cors),
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let processor = createProcessor();
        processor.then(newProcessor =>{ 
        dispatch({
            type:"ADD_PROCESSOR",
            item:{
                processorId:newProcessor.processorId,
                product:{
                    name:name,
                    manufacturer:manufacturer,
                    cost:parseInt(cost)
                    },
                frequency:parseInt(frecuency),
                cache:parseInt(cache),
                cors:parseInt(cors) 
            }
        });
        history("/processors")});
    }


    return(
        <div>
        <Header/>
        <Container style={{width:300, marginTop:20, marginBottom:20}}>
            <h3>Processor</h3>
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
                    <Label for="frequency">Frequency</Label>
                    <Input type="number" name="frequency" id="frequency" placeholder="Frequency" valid={isValidFrequency === 'good'} invalid={isValidFrequency === 'bad'} onChange={(e) => {setFrequency(e.target.value); validateFrequency(e)}}/>
                    <FormFeedback>Please type valid frecuency</FormFeedback>

                </FormGroup>
                <FormGroup>
                    <Label for="cache">Cache</Label>
                    <Input type="number" name="cache" id="cache" placeholder="Cache" valid={isValidCache === 'good'} invalid={isValidCache === 'bad'} onChange={(e) => {setCache(e.target.value); validateCache(e)}}/>
                    <FormFeedback>Please type valid cache</FormFeedback>

                </FormGroup>
                <FormGroup>
                    <Label for="cors">Cors</Label>
                    <Input type="number" name="cors" id="cors" placeholder="Cors" valid={isValidCors === 'good'} invalid={isValidCors === 'bad'} onChange={(e) => {setCors(e.target.value); validateCors(e)}}/>
                    <FormFeedback>Please type valid cors</FormFeedback>

                </FormGroup>
                <Link to={"/processors"}>
                    <Button color="success" disabled={ isValidName==='bad' || isValidManufacturer==='bad' || isValidCost==='bad' || isValidCors==='bad' || isValidCache==='bad' || isValidFrequency==='bad' ||
                    isValidName==='' || isValidManufacturer==='' || isValidCost==='' || isValidCors==='' || isValidCache==='' || isValidFrequency===''}
                     onClick={(e) => handleSubmit(e)}>Submit</Button>
                </Link>

            </Form>
        </Container>
        <Footer/>
        </div>      
    )
}

export default AddProcessor;