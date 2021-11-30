import axios from "axios";
import { Order } from "../interface/order";

const postOrder = (order: Order) => {
  try {
    const result = axios.post(
      "https://test.ejam.com/api/recruitment/frontendtask1/order",
      JSON.stringify(order)
    );
    return result;
  } catch (e) {
    throw e;
  }
};

const Orders = {
  postOrder,
};

export default Orders;
