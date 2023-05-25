import { Button, Form, FormFeedback, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { addCartItem } from "../../../api/apiCalls";
import { useState } from "react";

const AddItem = ({toggle, setToggle, product}) => {
    const [quantity, setQuantity] = useState(1);
    const [isVailidQuantity, setIsValidQuantiy] = useState('');

    const validateQuantity = (e) =>{
        if(e.target.value > 0){
          setIsValidQuantiy('good');
        }
        else{
          setIsValidQuantiy('bad');
        }
      }

    const handleAddItem = () =>{
      console.log(product);
    addCartItem({
        product:product,
        quantity:quantity
    })
    toggleAddItem();
    } 
    const toggleAddItem = () =>{setToggle(!toggle)}

    return(
    <Modal isOpen={toggle} toggle={toggleAddItem} backdrop={true}>
        <ModalHeader toggle={toggleAddItem}>Choose quantity</ModalHeader>
        <ModalBody>
          <Form>
          <FormGroup>
              <Label for="quantity">Quantity</Label>
              <Input type="number" name="quantity" id="quantity" placeholder="1" valid={isVailidQuantity === 'good'} invalid={isVailidQuantity === 'bad'} onChange={(e) => {setQuantity(e.target.value); validateQuantity(e)}}/>
              <FormFeedback>Please type valid quantity</FormFeedback>
          </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button outline color="success" disabled={isVailidQuantity === 'bad'} onClick={() => {handleAddItem()}}>Submit</Button>
        </ModalFooter>
    </Modal>)

}

export default AddItem;