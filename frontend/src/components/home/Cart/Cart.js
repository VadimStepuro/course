import { deleteCartItem, deleteVideocard } from "../../../api/apiCalls";
import { useContext, useState } from "react"
import { ProcessorDispatch, ProcessorsContext } from "../../contexts/ProcessorsContext"
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Pagination, PaginationItem, PaginationLink, Table, Row, Col } from "reactstrap";
import isAuthorised from "../../Authorisation/IsAuthorised";
import Header from "../Header";
import Footer from "../Footer";
import { VideocardContext, VideocardDispatch } from "../../contexts/VideoCardContext";
import { CartContext, CartDispatch } from "../../contexts/CartContext";
import EditItem from "../Item/EditItem";

const Cart = () => {
    const cart = useContext(CartContext);

    const dispatch = useContext(CartDispatch);

    const [toggle, setToggle] = useState(false);

    const [currentItem, setCurrentItem] = useState();

    const history = useNavigate();

    const handleDelete = (itemId) => {
        deleteCartItem(itemId)
        dispatch({
          type:"DELETE_CART_ITEM",
          itemId:itemId
        })  
        history('/cart')
      }
    
      const handleEdit = (item) =>{
        setCurrentItem(item)
        setToggle(!toggle)
      }
      console.log(cart);

      let totalCost = 0;

      cart.forEach((item) => totalCost += item.product.cost * item.quantity);

      

  return(
    <div>
    <Container>
    <div >
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom:"1%", marginTop:"1%" }}>
    </div>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Manufacturer</th>
          <th>Cost</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
          {cart.map((row, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <th>{row.product.name}</th>
              <th>{row.product.manufacturer}</th>
              <th>{row.product.cost}</th>
              <th>{row.quantity}</th>

              <th>
                  <Button color="primary" size="sm" onClick={() => handleEdit(row)}>EDIT</Button>
                &nbsp;
                <Button outline color="danger" size="sm" onClick={() => handleDelete(row.itemId)}>DELETE</Button>
              </th>
            </tr>
          ))}
        </tbody>
        </Table>
        <Row>
        <Col>
            <h3>Total cost: {totalCost}$</h3>
        </Col>
        <Col>
            <Button color='warning' outline>Buy</Button>
        </Col>
        </Row>
    </div>
    </Container>
    <EditItem toggle={toggle} setToggle={setToggle} item={currentItem}/>
    </div>
  )
}

export default Cart;