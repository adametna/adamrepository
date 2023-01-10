import { useState } from "react";
import { Stack } from "react-bootstrap";
import { useCart } from "../context/cartContext"

type CartItemProps = {
    id: number,
    quantity: number,
}

export function  CartItem({ id, quantity}: CartItemProps)  {
const { removeFromCart }  =  useCart();
const [product]: any = useState();
const item = product.find(i  =>  i.id  ===  id)
if (item === null)  return null


return  (
    <Stack direction="horizontal" gap={2}>
        <img 
        src={item.image}
        style={{width: "125px", height: "75px", objectFit: "cover"}} />
    </Stack>
)
}