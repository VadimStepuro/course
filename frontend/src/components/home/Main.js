import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Card, CardTitle, CardText, Button, Row, Col } from "reactstrap";

const Main = () =>{
    const history = useNavigate();

    return(
        <Container style={{width:600}}>
        <div style={{paddingBottom:20}}>
            <Card body>
                <CardTitle tag="h5">Processor</CardTitle>
                <CardText style={{height:100}}>
                    Choose processor for your needs.
                </CardText>
                <Button outline color="success" onClick={() => {history("/processors")}}>
                    Go
                </Button>
            </Card>
        </div>
        <div style={{paddingBottom:20}}>
            <Card body>
                <CardTitle tag="h5">Video cards</CardTitle>
                <CardText style={{height:100}}>
                    Choose video card for your needs.
                </CardText>
                <Button outline color="success" onClick={() => {history("/videocards")}}>
                    Go
                </Button>
            </Card>
        </div>
        <div>
            <Card body>
                <CardTitle tag="h5">Ram</CardTitle>
                <CardText style={{height:100}}>
                    Choose ram for your needs.
                </CardText>
                <Button outline color="success" onClick={() => {history("/ram")}}>
                    Go
                </Button>
            </Card>
        </div>
        </Container>
    )
}

export default Main;