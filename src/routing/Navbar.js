import { Link } from "react-router-dom";

export const Navbar =()=>
{
    const mystyle={backgroundcolor:"gray", color:"black"}
    return(
        <div>
            <nav style={mystyle}>
                <Link to='/'> Home</Link> &nbsp;&nbsp;
                <Link to='/about'> About</Link> &nbsp;&nbsp;
                <Link to='/about/next'> Next page</Link> &nbsp;&nbsp;
                <Link to='blogpost/:id'>BlogPost</Link>
                <Link to='home'>home</Link>
                <Link to='contact'>contact</Link> &nbsp;&nbsp;
            </nav> 
        </div>
    )
}