import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, FormControl, Label, Input, Container, Row, Col, FormFeedback } from "reactstrap";
import { addProcessor, editProcessor, editVideocard } from "../../../api/apiCalls";
import Footer from "../Footer";
import Header from "../Header";
import ApiHandler from "../../../api/apiHandler";
import { ProcessorDispatch } from "../../contexts/ProcessorsContext";
import { VideocardDispatch } from "../../contexts/VideoCardContext";


const EditVideoCard = ({videocard}) => {
    const dispatch = useContext(VideocardDispatch);

    console.log(videocard);

    const [name, setName] = useState(videocard.product.name);
    const [manufacturer, setManufacturer] = useState(videocard.product.manufacturer);
    const [cost, setCost] = useState(videocard.product.cost);

    const [frecuency, setFrequency] = useState(videocard.frequency);
    const [performance, setPerformance] = useState(videocard.performance);
    const [cors, setCors] = useState(videocard.cors);
    const [memoryType, setMemoryType] = useState(videocard.memoryType);


    const [isValidName, setIsValidName] = useState('');
    const [isValidManufacturer, setIsValidManufacturer] = useState('');
    const [isValidCost, setIsValidCost] = useState('');

    const [isValidFrequency, setIsValidFrequency] = useState('');
    const [isValidPerformance, setIsValidPerformance] = useState('');
    const [isValidCors, setIsValidCors] = useState('');
    const [isValidMemoryType, setIsValidMemoryType] = useState('');


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

    const validatePerformance = (e) => {
        if(e.target.value > 0){
            setIsValidPerformance('good');
        }
        else{
            setIsValidPerformance('bad');
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

    const validateMemoryType = (e) =>{
        if(!e.target.value){
            setIsValidMemoryType('bad');
        }
        else{
            setIsValidMemoryType('good');
        }
    }



    let history = useNavigate()

    const updateVideocard = () =>{
        
        return editVideocard({
            videocardId:videocard.videocardId,
            product:{
                name:name,
                manufacturer:manufacturer,
                cost:parseInt(cost)
                },
            frequency:parseInt(frecuency),
            performance:parseFloat(performance),
            cors:parseInt(cors),
            memoryType:memoryType
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        updateVideocard();
        dispatch({
            type:"UPDATE_VIDEOCARD",
            item:{
                videocardId:videocard.videocardId,
                product:{
                    name:name,
                    manufacturer:manufacturer,
                    cost:parseInt(cost)
                    },
                frequency:parseInt(frecuency),
                performance:parseInt(performance),
                cors:parseInt(cors),
                memoryType:memoryType
            }
        });
        history("/videocards");
    }


    return(
        <div>
        <Header/>
        <Container style={{width:300, marginTop:20, marginBottom:20}}>
            <h3>Videocard</h3>
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder={videocard.product.name} valid={isValidName === 'good'} invalid={isValidName === 'bad'} onChange={(e) => {setName(e.target.value); validateName(e)}}/>
                    <FormFeedback>Please type name</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="manufacturer">Manufacturer</Label>
                    <Input type="text" name="manufacturer" id="manufacturer" placeholder={videocard.product.manufacturer} valid={isValidManufacturer === 'good'} invalid={isValidManufacturer === 'bad'} onChange={(e) => {setManufacturer(e.target.value); validateManufacturer(e)}}/>
                    <FormFeedback>Please type manufacturer</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="cost">Cost</Label>
                    <Input type="number" name="cost" id="cost" placeholder={videocard.product.cost} valid={isValidCost === 'good'} invalid={isValidCost === 'bad'} onChange={(e) => {setCost(e.target.value); validateCost(e)}}/>
                    <FormFeedback>Please type valid cost</FormFeedback>
                </FormGroup> 
                <FormGroup>
                    <Label for="frequency">Frequency</Label>
                    <Input type="number" name="frequency" id="frequency" placeholder={videocard.frequency} valid={isValidFrequency === 'good'} invalid={isValidFrequency === 'bad'} onChange={(e) => {setFrequency(e.target.value); validateFrequency(e)}}/>
                    <FormFeedback>Please type valid frecuency</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="performance">Performance</Label>
                    <Input type="number" name="performance" id="performance" placeholder={videocard.performance} valid={isValidPerformance === 'good'} invalid={isValidPerformance === 'bad'} onChange={(e) => {setPerformance(e.target.value); validatePerformance(e)}}/>
                    <FormFeedback>Please type valid performance</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="cors">Cors</Label>
                    <Input type="number" name="cors" id="cors" placeholder={videocard.cors} valid={isValidCors === 'good'} invalid={isValidCors === 'bad'} onChange={(e) => {setCors(e.target.value); validateCors(e)}}/>
                    <FormFeedback>Please type valid cors</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="memoryType">Memory Type</Label>
                    <Input type="text" name="memoryType" id="memoryType" placeholder={videocard.memoryType} valid={isValidMemoryType === 'good'} invalid={isValidMemoryType === 'bad'} onChange={(e) => {setMemoryType(e.target.value); validateMemoryType(e)}}/>
                    <FormFeedback>Please type memory type</FormFeedback>
                </FormGroup>
                <Link to={"/videocards"}>
                    <Button color="success" disabled={ isValidName==='bad' || isValidManufacturer==='bad' || isValidCost==='bad' || isValidCors==='bad' || isValidPerformance==='bad' || isValidFrequency==='bad' || isValidMemoryType==='bad'} 
                    onClick={(e) => handleSubmit(e)}>Submit</Button>
                </Link>

            </Form>
        </Container>
        <Footer/>
        </div>      
    )
}

export default EditVideoCard;