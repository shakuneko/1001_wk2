import React from "react";
import { Badge } from "antd";
import { CartIcon } from "./Icons";
import { StoreContext } from "../store"
import { useState, useContext } from "react";
import CartModal from "./CartModal";

export default function CartSummary() {
  const { state: { cartItems } } = useContext(StoreContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const count = (cartItems.length > 0) ?
  cartItems.reduce((sum, item) => sum + item.qty, 0)
  : 0;

  return (
    <>
      <nav onClick={toggleModal} className="header-cart-summary" >
        <Badge count={count}  style={{ color: 'white', backgroundColor: '#6366F2'}}>
          <CartIcon />
        </Badge> 
        <p className="cart-summary-text" style={{color: '#fff'}}> Shopping bag </p>         
      </nav>
      < CartModal
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
          />
    </>
  );
}