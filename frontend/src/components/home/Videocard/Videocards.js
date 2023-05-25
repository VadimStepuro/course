import { addCartItem, deleteVideocard } from "../../../api/apiCalls";
import { useContext, useState } from "react"
import { ProcessorDispatch, ProcessorsContext } from "../../contexts/ProcessorsContext"
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Container, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Pagination, PaginationItem, PaginationLink, Table, Col, Row } from "reactstrap";
import isAuthorised from "../../Authorisation/IsAuthorised";
import Header from "../Header";
import Footer from "../Footer";
import { VideocardContext, VideocardDispatch } from "../../contexts/VideoCardContext";
import AddItem from "../Item/AddItem";
import SearchBar from "../SearchBar/Searchbar";

const Videocards = ({pageSize, setCurrentVideocard}) => {
    const videocards = useContext(VideocardContext);

    const dispatch = useContext(VideocardDispatch);

    const [activePage, setActivePage] = useState(1);

    const [currentItem, setCurrentItem] = useState();

    const history = useNavigate();

    const totalPages = Math.ceil(videocards.length / pageSize);

    const tableData = videocards.slice(
        (activePage - 1) * pageSize,
        activePage * pageSize
        
    );

  

    const handlePageClick = (page) => {
        setActivePage(page);
    };

    const handleDelete = (videocardId) => {
        deleteVideocard(videocardId)
        dispatch({
          type:"DELETE_VIDEOCARD",
          videocardId:videocardId
        })  
        history('/videocards')
      }
    
      const handleEdit = (videocard) =>{
        console.log(videocard);
        setCurrentVideocard(videocard);
        
      }

      const [addItem, setAddItem] = useState(false);

      const toggleAddItem = () =>{setAddItem(!addItem)}

  return(
    <div>
    <Header/>
    <Container>
    <div >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom:"1%", marginTop:"1%" }}>
        <Row> 
          <Col> 
            <SearchBar/> 
          </Col> 
          <Col> 
            <Link to={"/videocards/create"}> 
              <Button color="primary">CREATE</Button> 
            </Link> 
          </Col> 
        </Row>
      </div>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Manufacturer</th>
          <th>Cost</th>
          <th>Performance</th>
          <th>Frequency</th>
          <th>Cors</th>
          <th>MemoryType</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <th>{row.product.name}</th>
              <th>{row.product.manufacturer}</th>
              <th>{row.product.cost}</th>
              <th>{row.performance}</th>
              <th>{row.frequency}</th>
              <th>{row.cors}</th>
              <th>{row.memoryType}</th>

              <th>
                <Link to={"/videocards/edit"}>
                  <Button color="primary" size="sm" onClick={() => handleEdit(row)}>EDIT</Button>
                </Link>
                &nbsp;
                <Button outline color="danger" size="sm" onClick={() => handleDelete(row.videocardId)}>DELETE</Button>
                &nbsp;
                {isAuthorised() ?
                  <Button outline color="success" size="sm" onClick={() =>{toggleAddItem(); setCurrentItem(row.product)}}>ADD</Button> :
                <h1></h1>}
              </th>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <PaginationItem disabled={activePage === 1}>
          <PaginationLink previous onClick={() => handlePageClick(activePage - 1)} />
        </PaginationItem>
        {[...Array(totalPages)].map((_, i) => (
          <PaginationItem active={i + 1 === activePage} key={i}>
            <PaginationLink onClick={() => handlePageClick(i + 1)}>{i + 1}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={activePage === totalPages}>
          <PaginationLink next onClick={() => handlePageClick(activePage + 1)} />
        </PaginationItem>
      </Pagination>
    </div>
    </Container>
    <Footer/>
    <AddItem toggle={addItem} setToggle={setAddItem} product={currentItem}/>
    </div>
  )
}

export default Videocards;