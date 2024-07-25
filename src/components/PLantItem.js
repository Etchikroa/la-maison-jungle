import "../styles/PlantItem.css"
import Carescale from "./careScale"

function PlantItem({name,  cover, price,light,water}){
    function handle(name){
        alert(`vous voulez acheter 1 ${name} tres bon choix`)
    }
return(
        <li className="lmj-plant">
            <span className="lmj-plant-price">{price}€</span>
            <img src={cover} alt={name} className="lmj-plant-cover" onClick={()=>handle(name)}/>
                    {name}
        <div>
            <Carescale careType="water" careValue = {water} />
            <Carescale careType="light" careValue  = {light} />
        </div>
        </li>
)
}
export default PlantItem