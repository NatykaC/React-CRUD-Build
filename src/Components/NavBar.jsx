import { Link } from "react-router-dom"

import "./NavBar.css"

const NavBar =()=>{

    return(<div className="nav-bar-styles">

        <Link to={"/"}>
            <h3>Home 🏡</h3>
        </Link>
        <br/>
        <Link to={"/shows"}>
        <h3>All Shows 📺 </h3>
        </Link>
        <br/>
        <Link to={"/shows/new"}>
        <h3>Add (Create) New Show 📺 </h3>
        </Link>
        <br/>
        <Link to={"/movies"}>
        <h3>All Movies 🎥</h3>
        </Link>
       

    </div>)
}

export default NavBar