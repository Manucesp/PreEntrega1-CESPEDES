import {BsFillCartFill} from "react-icons/bs";
import "./CartWidget.css";

const CartWidget = () => {
    return(
        <div>
           <div className="carrito"><BsFillCartFill/>0</div>
        </div>
    )
}
export default CartWidget;