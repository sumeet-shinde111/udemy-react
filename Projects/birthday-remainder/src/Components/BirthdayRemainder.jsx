const BirthdayRemainder = ({id,name,image,age})=>{
    return(
        <>
        <div key={id} className="card">
           {
             <div className="row">
                <img src = {image} alt={name} className="profilePhoto"/>
                <div className="textContent">
                    <h2>{name}</h2>
                    <h3>{age} years old</h3>
                </div>
            </div>
           }
        </div>
        
        </>
    )
}
export default BirthdayRemainder;
 