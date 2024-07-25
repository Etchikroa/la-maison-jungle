import { useState } from "react";
import PlantList from "../Datas/PlantList"
import PlantItem from "./PLantItem"
import Categories from "./Categories"
function ShoppingList({cart, updateCart}){
	const [categorie, setCategory] =useState("");
// get only the category
const categories = PlantList.reduce(
	(acc, plant)=>acc.includes(plant.category)? acc : acc.concat(plant.category),[]
)
function addToCart(name, price){
	const currentSavedPlant = cart.find(
		(plant)=>plant.name === name
	)
	if(currentSavedPlant){
		const cartFilter = cart.filter(
			(plantFilter)=>plantFilter.name !== name
		)
		updateCart([
			...cartFilter, {name, price, amount:currentSavedPlant.amount + 1}
		])
	}else{
		updateCart(
			[
				...cart, {name, price, amount:1}
			]
		)
	}
}

return (
	<div>
	<Categories 
	categories={categories}
	categorie  = {categorie}
	setCategory = {setCategory}
	/>
	<div className="lmj-plant-item">
		{
			PlantList.map(({name, id, cover, price,category,light,water})=>
			!categorie || categorie === category?(
			<div key={id}>
				<PlantItem
					key={id}   
					name={name}
					id={id}
					cover={cover}
					price={price}
					light={light}
					water={water}
				/>
				<button className="btn-add" onClick = {()=>addToCart(name, price)}>Ajouter</button>
			</div>
			):null
			)
		}
	</div>
	</div>

)
}

export default ShoppingList