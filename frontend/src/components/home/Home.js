import Header from "./Header";
import Footer from "./Footer";  
import { Container, Row, Col } from "reactstrap";
import Main from "./Main";
    
function Home(){
    return(
        <div className="Home">
        <Header/>
            <Container style={{paddingTop:20, paddingBottom:20}}>
                <Main/>
            </Container>
        <Footer/>
        </div>
    );
}

export default Home;