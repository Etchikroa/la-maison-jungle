
function Categories({categories, category, setCategory}){
    console.log(categories)
return(
    <>
    <select onChange={(e)=>setCategory(e.target.value)}>
        <option value="">______________</option>
        {
            categories.map((cat)=><option value={cat} key={cat}>{cat}</option>
        )
        }
    </select>
    <button onClick={(e)=>setCategory("")}>Reinitialiser</button>
    </>
)
}
export default Categories