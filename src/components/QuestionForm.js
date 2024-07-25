import { useState } from "react"
function QuestionForm(){
    const [inputValue, setValue] = useState("Entrer votre texte ici");
    function checkValue(value){
        if(!value.includes("f")){
            setValue(value)
        }
    }
    return(
        <div>
            <textarea value={inputValue} onChange={(e)=>checkValue(e.target.value)} />
            <button onClick={()=>alert(inputValue)}>Click me</button>
        </div>

    )
}
export default QuestionForm