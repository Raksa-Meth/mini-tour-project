import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTour = tours.filter((tour)=>tour.id !== id)
    setTours(newTour)
  }

  const fetchTourData = async () => {
    try {
      setIsLoading(true)
      const fetchData = await fetch(url)
      const toursData = await fetchData.json()
      setIsLoading(false)
      setTours(toursData)
    } catch (error) {
      setIsLoading(true)
      console.log(error)
    }
    
  }

  useEffect(()=>{
    fetchTourData()
  },[])

  if(isLoading){
    return <main>
        <Loading/>
      </main>
  }else {
    if(tours.length === 0){
      return <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTourData} >Refresh</button>
        </div>
      </main>
    }else{
      return <main>
        <Tours tours={tours} removeTour={removeTour}/>
      </main>
    }
  }
}

export default App
