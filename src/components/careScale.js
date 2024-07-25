import sun from "../assets/sun.svg"
import water from "../assets/water.svg"
const scaleValue = {
    1:"peu",
    2:"modèrement",
    3:"beaucoup"
}
function Carescale({ careType,careValue}){ 
    let scaleType = careType === "light"?(<img src={sun} alt={careType} />):(<img src={water} alt={careType} />)
    const range = [1,2,3] 
return(
    <div
    onClick={()=>alert(`Cette plante requiert ${scaleValue[careValue]}${careType === "light"?" de lumiere":" d'arosage"}`)}
    >
        {
            range.map((el, index)=>
                careValue >= el?<span key={`${index}-${el}`}>{scaleType}</span>:null
        )
        }
    </div>
)
}
export default Carescale