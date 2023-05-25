import React, { useContext, useState } from "react";
import "./SearchBar.css";
import { ProductContext } from "../../contexts/ProductContextProvider";
import { Close, Search } from "@mui/icons-material";
import AddItem from "../Item/AddItem";
import isAuthorised from "../../Authorisation/IsAuthorised";
import { Button, Row, Col } from "reactstrap";

function SearchBar() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [toggle, setToggle] = useState(false);

  const products = useContext(ProductContext);

  const [product, setProduct] = useState();

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = products.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const toggleAddItem = () => {setToggle(!toggle)} 

  return (
    <div className="search" style={{zIndex:9999}}>
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search accessories"
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Row key={key}>
                <Col><p>{value.name} </p></Col>
                <Col><p>{value.manufacturer}</p></Col>
                {isAuthorised() ?
                <Col>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom:"1%", marginTop:"1%", marginRight:"5%" }}>
                  <Button outline color="success" size="sm" style={{}} onClick={() =>{setProduct(value); toggleAddItem();}}>ADD</Button> 
                </div>
                </Col>:
                <h1></h1>}
              </Row>
            );
          })}
        </div>
      )}
    <AddItem toggle={toggle} setToggle={setToggle} product={product}/>
    </div>
  );
}

export default SearchBar;
