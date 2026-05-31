import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'
import Loading from './Components/Loading'
import Tours from './Components/Tours'

function TourApp() {
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


  if(isLoading){
    return <Loading/>
  }
  return (
    <>
      <section id="center">
        <Tours tours = {tours}/>
      </section>
    </>
  )
}

export default TourApp;
