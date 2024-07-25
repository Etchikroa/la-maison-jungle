import {useState} from "react"
function Footer(){
const [inputValue, setInputValue] = useState(""); 
function handleClick(e){
    setInputValue(e.target.value)
}
function handleBlur(){
    if(!inputValue.includes("@")){
        alert(`la valeur "${inputValue}" ne contient pas de @`);
    }
}
return(
   <footer>
        <input placeholder="Entrer un mail" 
        onChange={handleClick}
        onBlur={handleBlur}
        />
        <div>
            Pour les passionnés des plante 🌱🪴🌿
        </div>
   </footer>
)
}
export default Footer