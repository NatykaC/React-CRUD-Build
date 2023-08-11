import { Link } from "react-router-dom"


const NavBar =()=>{

    return(<div>

        <Link to={"/"}>
            <h3></h3>Home 🏡
        </Link>
        <br/>
        <Link to={"/shows"}>
        <h3></h3>All Shows 📺 
        </Link>
        <br/>
        <Link to={"/movies"}>
        <h3></h3>All Movies 🎥
        </Link>

    </div>)
}

export default NavBar