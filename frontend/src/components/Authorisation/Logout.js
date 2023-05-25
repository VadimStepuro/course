import { useState } from "react";
import { Button } from "reactstrap";
import Cookies from "universal-cookie";

export default function Logout(){

    const [log, setLog] = useState(true);

     const handleButtonClik = () => {
        let cookies = new Cookies();
        cookies.remove('accessToken');
    }
    return(
        <Button outline color="danger" onClick={() =>{handleButtonClik(); setLog(!log)}}>Log Out</Button>
    )
}