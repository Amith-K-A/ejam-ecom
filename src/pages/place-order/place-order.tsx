import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextInputBox from "../../components/text-input-box/text-input-box";
import "./place-order.scss";
import Orders from "../../api/orders";
import { clearCart } from "../../store/actions/cartActions";
import { connect } from "react-redux";
import { PlaceOrderInterface } from "../../interface/order";

const PlaceOrder:React.FC<PlaceOrderInterface> = ({ address, totalPrice, items, clearCart }) => {
  const [number, setNumber] = useState(0);
  const [date, setDate] = useState(0);
  const [cvv, setCvv] = useState(0);

  const history = useHistory();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let cardDetails = { number, date, cvv };
    const order = { cardDetails, address, items };
    Orders.postOrder(order).then((res) => {
      history.push(`/confirm/${res.data.id}`);
      clearCart();
    });
  };

  return totalPrice ? (
    <form onSubmit={handleSubmit}>
      <div className="address-wrapper">
        <h1 className="card-title">Enter Your Card Details</h1>

        <label htmlFor="username">Card Number</label>
        <div className="card-input-container password">
          <TextInputBox
            placeholder="Enter your Card Number"
            onChange={(event: any) => setNumber(event.target.value)}
            id="number"
            value={number}
            type="number"
            required={true}
          />
        </div>
        <label htmlFor="address">Expiration date</label>
        <div className="card-input-container password">
          <TextInputBox
            placeholder="Enter your card Expiration in MM/YY formate"
            onChange={(event: any) => setDate(event.target.value)}
            id="date"
            value={date}
            required={true}
          />
        </div>
        <label htmlFor="password">CVV</label>
        <div className="card-input-container password">
          <TextInputBox
            placeholder="Enter your card CVV number"
            onChange={(event: any) => setCvv(event.target.value)}
            type="number"
            id="cvv"
            value={cvv}
            required={true}
          />
        </div>
        <div className="buttons">
          <button
            onClick={() => history.push("/checkout")}
            className="next-button"
          >
            BACK
          </button>
          <button type="submit" className="next-button">
            CONFIRM ORDER
          </button>
        </div>
      </div>
    </form>
  ) : (
    <>No Items in cart!!</>
  );
};

const mapStateToProps = (state: any) => {
  return {
    address: state.cart.address,
    totalPrice: state.cart.totalPrice,
    items: state.cart.cartItems,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    clearCart: () => {
      return dispatch(clearCart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder);
