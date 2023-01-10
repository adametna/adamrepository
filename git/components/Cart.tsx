import { Offcanvas, OffcanvasTitle } from "react-bootstrap";
import { useCart } from "../context/cartContext";

// type CartProps = {
//   isOpen: boolean;
// };

export function Cart() {
  return (
    <Offcanvas show={true}  placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
}
