import React from 'react'
import { useState, useEffect } from 'react'

const Movies = () => {

    function GetData() {
        const [data, setData] = useState({})

        useEffect(()=>{
            //only need to fetch '/movies' because of proxy
            fetch("/movies")
            .then(res => res.json())
            .then(data => setData(data))
        }, []) 

        return(
            <div>
                <div>{data.name}</div>
                <div>{data.age}</div>  
            </div>
        ) 
    }
    
    

  return (
      <main>

          <div className='moviesPage'>
              <p>list of movies</p>
              <GetData />
          </div>

      </main>
  )
}

export default Movies