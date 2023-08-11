import { useState } from 'react'

import{BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import './App.css'

import NavBar from './Components/NavBar.jsx'

import ShowsList from './Components/ShowsRelevant/ShowsList.jsx'

function App() {
  // console.log("One of Our Environment Variables: ", import.meta.env.VITE_10_1_VAR )
  

  return (
    <>
      <Router>

        <header> 
        <h1>ScreenViews</h1>
        <h2>-Test-{ import.meta.env.VITE_10_1_VAR }</h2>
        <br/>
        <NavBar/>


        </header>

        <Routes>

          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/shows' element={<ShowsList/>} />
          <Route path='/shows/new' element={<h1>Form For New Show</h1>} />

          <Route path='/movies' element={<h1>All Movies</h1>} />

        </Routes>
        

        


        <footer>10.1 ©</footer>
      </Router>
    </>
  )
}

export default App


/*

RESTFUL Conventions / RESTFUL Routing


CRUD for Shows 
  Shows Endpoint: /api/shows

CRUD Action       Request         Relevant Route (Frontend)  

Create            POST            shows/new
Read              GET             shows/ (index) or /shows/:id
Update
Destroy



CRUD for Movies
  Movies Endpoint : /api/movies

CRUD Action       Request         Relevant Route (Frontend)

Create            POST            movies/new
Read              GET             movies/
Update
Destroy

*/
