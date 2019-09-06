import React from "react"
import { Link } from "gatsby"


const Header = () =>{

    return(
        <>
        <div style={{width: "100%", height: "30px", background:"green", textAlign: "center"}}>
        <Link to="/"><button>Home</button></Link>
        <Link to="/jobs/"><button>Jobs</button></Link>
        <Link to="/about/"><button>About</button></Link>
        </div>
        </>
    );

}

export default Header;
