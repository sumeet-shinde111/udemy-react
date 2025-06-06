import BirthdayRemainder from "./BirthdayRemainder";

const List = ({people})=>{
    return(
        <>
        <h1>{people.length} Birthdays today</h1>
        <div className="cardContainer">
            {
            people.map((value)=>{
                return <BirthdayRemainder {...value} key={value.id}/>
            })
           }
        </div>
           
        </>

    )
}
export default List;