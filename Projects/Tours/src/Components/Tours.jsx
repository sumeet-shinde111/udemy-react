import React from 'react'
import "./styles/Tours.css";
import Tour from './Tour';
function Tours({ tours,RemoveTour }) {
    return (
        <>
            <h1>Tours new page</h1>
            <div className="cards-container">
                {
                    tours.map((item, index) => {
                        return (
                            <Tour key = {item.id} {...item} RemoveTour = {RemoveTour}/>
        
                        )
                    })
                }
            </div>


        </>

    )
}

export default Tours