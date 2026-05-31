import React from 'react'
import { useState,useEffect } from 'react'
import Loading from './Loading';
import Tours from './Tours';

const ToursData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const url = 'https://www.course-api.com/react-tours-project';

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const fetchedData = await response.json();
      setTours(fetchedData);
    } catch (e) {
      console.log("error...", e);
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTours();
  }, [])


  if (isLoading) {
    return <Loading/>
  }

  const RemoveTour = (id)=>{
    const newTour = tours.filter((tour)=>{ return tour.id != id;})
    setTours(newTour);
  }

  return (
    <Tours tours = {tours} RemoveTour = {RemoveTour}/>
  )
}

export default ToursData;