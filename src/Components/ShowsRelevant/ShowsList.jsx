import { useState, useEffect } from "react"
import "./ShowsList.css"


const ShowsList =()=>{

    const[allShows, setAllShows]=useState( [] )


    useEffect(
        ()=>{

            fetch("http://localhost:3333/api/shows")
            .then( r => r.json() )
            .then(arr => setAllShows(arr))
            // .then(console.log)
        }
        ,
        [ ]
    )

    console.log(allShows)

    const showsToRender = allShows.map((eachShow)=>
        <div key={eachShow.id}className="show-card-styles">
            <h4>{eachShow.title}</h4>
            <h6>{eachShow.duration}</h6>
        </div>)

    return(
        <div className="shows-list-styles">
             <h1>All Shows</h1>
        <div className="display-show-card">
             {showsToRender}
        </div>
        </div>
       
       
    )
}

export default ShowsList