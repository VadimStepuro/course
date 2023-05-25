import { getCartItem } from "../../../api/apiCalls"
import ApiHandler from "../../../api/apiHandler";
import { useApiCall } from "../../../api/fetchData"
import CartProvider from "../../contexts/CartContext";
import Footer from "../Footer";
import Header from "../Header";
import Cart from "./Cart";

const CartWrapper = () => {
    const [loadingCart, cart, errorCart] = useApiCall(getCartItem);

    return(
        <div>
            <Header/>
            <ApiHandler loading={loadingCart} error={errorCart}>
                <CartProvider initialCart={cart}>
                    <Cart/>
                </CartProvider>
            </ApiHandler>
            <Footer/>
        </div>
    )
}

export default CartWrapper;