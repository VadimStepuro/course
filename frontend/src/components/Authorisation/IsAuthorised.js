import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function isAuthorised(){
    return cookies.get("accessToken") !== undefined;
}