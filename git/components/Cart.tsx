import { Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/cartContext";
import { CartItem } from "./CartItem";

type CartProps = {
  isOpen: boolean;
};

export function Cart({isOpen}: CartProps) {
  const { closeCart, cartItems } = useCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map(item => (
              <CartItem key={item.id} {...item}/>  ))}
          </Stack>
        </Offcanvas.Body>
      </Offcanvas.Header>
    </Offcanvas>);
  
}
