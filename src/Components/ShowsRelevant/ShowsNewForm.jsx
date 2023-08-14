import { useState } from "react"

const ShowsNewForm =(  )=>{

    const[newCountry, setNewCountry]=useState( "" )
    const[newReleaseYear, setNewReleaseYear]=useState( 1900 )
    const[newRating, setNewRating]=useState( "" )
    const[newDuration, setNewDuration]=useState( "" )
    const[newListedIn, setNewListedIn]=useState( "" )
    const[newTitle, setNewtitle]=useState( "" )
    const[newDescription, setNewDescription]=useState( "" )
    

    function handleNewShowFormSubmit(e){
        e.preventDefault()
            console.log("Form has been submitted")
        
        const newShowObj = {
            // Hard set K:V pairs
            id: crypto.randomUUID(),
            type: "TV Show",
            dateAdded: "",

            country: newCountry,
            releaseYear: newReleaseYear,
            rating: newRating,
            duration: newDuration,
            listedIn: newListedIn,
            title: newTitle,
            description: newDescription
        }
        console.log("newShowObj we are CREATING: ", newShowObj)

        /// POST : [C]RUD ::  CREATE
        const options = {
            method: "POST",
            headers: {
                Accept: "application.json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify( newShowObj )

        }
        fetch("http://localhost:3333/api/shows" , options)
            .then( r=> r.json())
            .then( console.log)
            .catch(err => console.log(err))



        //// "Clearing The Form Inputs"
        setNewCountry( "" )
        setNewReleaseYear( 1900 )
        setNewRating( "" )
        setNewDuration( "" )
        setNewListedIn( "" )
        setNewtitle( "" )
        setNewDescription( "" )

    }

    return(<>
        <h1>Create A New Show 📺</h1>

        <form onSubmit={ handleNewShowFormSubmit }>


            <label for="country"> <br/>
                Country of Show:
                <input type="text" id="country" value={newCountry}  onChange={ (se)=>{setNewCountry(se.target.value)} }/>
            </label>
            <label for="releaseYear"> <br/>
                Release Year of Show:
                <input type="number"id="releaseYear" value={newReleaseYear}  onChange={ (se)=>{setNewReleaseYear(se.target.value)} }/>
            </label>
            <label for="rating"> <br/>
                Rating of Show:
                <input type="text" id="rating" value={newRating} onChange={ (se)=>{setNewRating(se.target.value)} }/>
            </label>
            <label for="duration"> <br/>
                Duration of Show:
                <input type="text" id="duration" value={newDuration} onChange={ (se)=>{setNewDuration(se.target.value)} }/>
            </label>
            <label for="listedIn"> <br/>
               Genre of Show:
                <input type="text" id="listedIn" value={newListedIn} onChange={ (se)=>{setNewListedIn(se.target.value)} }/>
            </label>
            <label for="title"> <br/>
                Title of Show:
                <input type="text" id="title" value={newTitle} onChange={ (se)=>{setNewtitle(se.target.value)} }/>
            </label>
            <label for="description"> <br/>
                Description of Show:
                <input type="text" id="description" value={newDescription} onChange={ (se)=>{setNewDescription(se.target.value)} }/>
            </label>
            <br/>
            <input type="submit"/> 

        </form>

    
    </>) 
}

export default ShowsNewForm