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

    function handleDeleteClick( showToDelete ){
        console.log("be gone!", showToDelete)

        //// Frontend Logic
        // Filter
        const filterResult = allShows.filter ( (eachShow)=>{
            if(eachShow.id !== showToDelete.id){
                return eachShow
            }
        })
        console.log("filterResult: ", filterResult)
        /// Optimistic Rendering
        // setAllShows( [...filterResult] )

        //// Backend Logic
        // send a delete fetch request
        // /api/show/:id
        fetch(`http://localhost:3333/api/shows/${showToDelete.id}`, {method: "DELETE"} )
            .then( r => r.json() )
            .then((emptyObj) => {
                console.log(emptyObj)
                //// For Pessimistic Rendering
                setAllShows( [...filterResult] )
            })

    }
    function handleEdit(){

    }
    const[toggleEdit, setToggleEdit] = useState(false)

    const[formObj, setFormObj] = useState({title: "", duration: ""})
    // individual card component
    // useEffect() -> fetches that specific object by its /:id
    const showsToRender = allShows.map((eachShow)=>{
      
        return toggleEdit ?
              (<form className="edit-form">
                <label>
                    <input />
                    <button onClick={ (se)=> setToggleEdit(!toggleEdit) }>close edit </button>
                </label>
                </form>)
        :

        (<div key={eachShow.id}className="show-card-styles">
            <h4>{eachShow.title}</h4>
            <h6>{eachShow.duration}</h6>
            <button onClick={ (se)=> handleDeleteClick(eachShow) } >X</button>
            <button onClick={ (se)=> setToggleEdit(!toggleEdit) } >Edit :)</button>
        </div>)
        }
        )



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