import React from 'react'

const Tour = ({ id,name, price, info, image,RemoveTour }) => {
  return (
    <div className="card singleTour">
      <img src={image} alt={`${name} Tour`} />

      <div className="card-content">
        <div className="tour-header">
          <h2 className="tour-name">{name}</h2>
          <span className="tour-price">₹{price}</span>
        </div>

        <p className="tour-info">
          {info}
        </p>

        <button className="btn" onClick={()=>{RemoveTour(id)}}>Not Interested</button>
      </div>
    </div>
  )
}

export default Tour