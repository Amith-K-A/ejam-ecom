import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextInputBox from "../text-input-box/text-input-box";
import "./checkout.scss";
import { setAddress } from "../../store/actions/cartActions";
import { connect } from "react-redux";
import { AddressInterface } from "../../interface/address";

const Address: React.FC<AddressInterface> = ({
  address,
  setAddress,
  totalPrice,
}) => {
  const [firstName, setFirstName] = useState(address?.firstName);
  const [secondName, setSecondName] = useState(address?.secondName);
  const [pin, setPin] = useState(address?.pin);
  const [phoneNumber, setPhoneNumber] = useState(address?.phoneNumber);
  const history = useHistory();
  const [shippingAddress, setShippingAddress] = useState(
    address?.shippingAddress
  );

  const handleSubmit = () => {
    let Address = { firstName, secondName, pin, phoneNumber, shippingAddress };
    setAddress(Address);
    history.push("/place-order");
  };

  return totalPrice ? (
    <form onSubmit={handleSubmit}>
      <div className="address-wrapper">
        <h1 className="card-title">Enter Your Shipping Details</h1>

        <label htmlFor="username">Name</label>
        <div className="card-input-container name">
          <TextInputBox
            value={firstName}
            placeholder="Enter your First Name"
            onChange={(event: any) => setFirstName(event.target.value)}
            id="nameOne"
            required={true}
          />
          <TextInputBox
            value={secondName}
            placeholder="Enter your Last Name"
            onChange={(event: any) => setSecondName(event.target.value)}
            id="nameTwo"
            required={true}
          />
        </div>
        <label htmlFor="address">Shipping Address</label>
        <div className="card-input-container password">
          <TextInputBox
            value={shippingAddress}
            placeholder="Enter your full address"
            onChange={(event: any) => setShippingAddress(event.target.value)}
            id="adders"
            required={true}
          />
        </div>
        <label htmlFor="password">Phone Number</label>
        <div className="card-input-container password">
          <TextInputBox
            value={phoneNumber}
            placeholder="Enter your phone number"
            onChange={(event: any) => setPhoneNumber(event.target.value)}
            type="number"
            id="phone"
            required={true}
          />
        </div>
        <label htmlFor="password">PIN Number</label>
        <div className="card-input-container password">
          <TextInputBox
            value={pin}
            placeholder="Enter your pin number"
            onChange={(event: any) => setPin(event.target.value)}
            type="number"
            id="pin"
            required={true}
          />
        </div>
        <button type="submit" className="next-button">
          NEXT
        </button>
      </div>
    </form>
  ) : (
    <>No Items in cart!!</>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setAddress: (address: any) => {
      return dispatch(setAddress(address));
    },
  };
};

const mapStateToProps = (state: any) => {
  return { address: state.cart.address, totalPrice: state.cart.totalPrice };
};

export default connect(mapStateToProps, mapDispatchToProps)(Address);
