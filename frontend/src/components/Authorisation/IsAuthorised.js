import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function isAuthorised(){
    cookies.get("accessToken")
    return cookies.get("accessToken") !== undefined;
}