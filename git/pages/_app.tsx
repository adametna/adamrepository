import type { AppProps } from 'next/app';
import { CartProvider } from '../context/cartContext';
import "bootstrap/dist/css/bootstrap.min.css"

export default function App({ Component, pageProps}: AppProps) {
return <CartProvider> <Component {...pageProps} /> </CartProvider>
}
