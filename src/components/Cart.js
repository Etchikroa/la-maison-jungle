import "../styles/Cart.css"
import{ useState, useEffect} from "react"
function Cart({cart, updateCart}){
    const [isOpen, setIsOpen] = useState(true);
    const total = 
        cart.reduce((acc, plant)=>
            acc + plant.price * plant.amount,0)
        useEffect(
            ()=>{
                document.title = `LMJ: ${total}€ d'achats`
            },[total]
        )
return isOpen?(
           <div className="lmj-cart-container">
            <button className="closed-btn" onClick = {()=>setIsOpen(false)}>Fermer le panier</button>
           
            <h2>Panier</h2>
            {
                cart.map(({name, price, amount},id)=>
                <ul key={`${name}-${id}`}>
                   {name} {price} x {amount}
                </ul>
                )
            }
            {
                (cart.length) > 0 ?
                (
                <div>
                <h2>Total: {total}€ </h2>
                <button className="reset-btn" onClick = {()=>updateCart([])}>Vider le panier</button>
                </div>
                 ): "Votre panier est vide"
            }
            
        
        </div>
):(
    <div>
        <button className="open-btn" onClick = {()=>setIsOpen(true)}>Ouvrier le panier</button>
    </div>
)
}
export default Cart