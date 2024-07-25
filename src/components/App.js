import { useState, useEffect } from "react"
import ShoppingList from "./ShoppingList"
import "../styles/Layout.css"
import Banner from "./Banner"
import Cart from "./Cart"
import logo from "../assets/logo.png"
import Footer from "./Footer"

function App(){
	const savedPlant = localStorage.getItem("cart");
	const [cart, updateCart] = useState(savedPlant ? JSON.parse(savedPlant) : []);
	useEffect(
		()=>{
			localStorage.setItem("cart", JSON.stringify(cart))
		},[cart]
	)
	return (
		<div>
			<Banner>
				<h1 className="lmj-title">La maison jungle</h1>
				<img src={logo} alt="logo" className="lmj-logo" />
			</Banner>
			<div className="lmj-layout">
				<Cart cart = {cart} updateCart = {updateCart} />
				<ShoppingList cart = {cart} updateCart = {updateCart}/>
			</div>
			<Footer />
		</div>
	)
}

export default App