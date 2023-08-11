import { useState, useEffect } from "react"



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
        <div>
            <h4>{eachShow.title}</h4>
        </div>)

    return(
        <div>
             <h1>All Shows</h1>
             {showsToRender}
        </div>
       
    )
}

export default ShowsList