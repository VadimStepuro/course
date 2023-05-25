import { useContext, useState } from "react"
import { ProcessorDispatch, ProcessorsContext } from "../../contexts/ProcessorsContext"
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Pagination, PaginationItem, PaginationLink, Table } from "reactstrap";
import isAuthorised from "../../Authorisation/IsAuthorised";
import Header from "../Header";
import Footer from "../Footer";
import { addCartItem, deleteProcessor } from "../../../api/apiCalls";
import { CartDispatch } from "../../contexts/CartContext";
import AddItem from "../Item/AddItem";
import SearchBar from "../SearchBar/Searchbar";

const Processors = ({pageSize, setCurrentProcessor}) =>{
    const processors = useContext(ProcessorsContext);

    const dispatch = useContext(ProcessorDispatch);

    const [currentItem, setCurrentItem] = useState();

    const [activePage, setActivePage] = useState(1);

    const history = useNavigate();

    const totalPages = Math.ceil(processors.length / pageSize);

    const tableData = processors.slice(
        (activePage - 1) * pageSize,
        activePage * pageSize
        
    );

    console.log(processors);  
  

    const handlePageClick = (page) => {
        setActivePage(page);
    };

    const handleDelete = (processorId) => {
        deleteProcessor(processorId);
        dispatch({
          type:"DELETE_PROCESSOR",
          processorId:processorId
        })
        history('/processors')
      }
    
      const handleEdit = (processor) =>{
        console.log(processor);
        setCurrentProcessor(processor);
        
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
            <Link to={"/processors/create"}> 
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
          <th>Frequency</th>
          <th>Cache</th>
          <th>Cors</th>
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
              <th>{row.frequency}</th>
              <th>{row.cache}</th>
              <th>{row.cors}</th>
              <th>
                <Link to={"/processors/edit"}>
                  <Button color="primary" size="sm" onClick={() => handleEdit(row)}>EDIT</Button>
                </Link>
                &nbsp;
                <Button outline color="danger" size="sm" onClick={() => handleDelete(row.processorId)}>DELETE</Button>
                &nbsp;
                {isAuthorised() ?
                  <Button outline color="success" size="sm" onClick={() =>{toggleAddItem(); setCurrentItem(row.product)}}>ADD</Button>:<h1></h1>}
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

    <AddItem toggle={addItem}  setToggle={setAddItem} product={currentItem}/>
    </div>
  )
}

export default Processors