import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [name, setName] = useState("User");

    return (
        <div className="navbar">
            <div className="cont">
                <h1>{name}'s Media Kit</h1>
                <div className="links">
                    <Link to="/">Work Together</Link>
                    <Link to="/claim">Claim Profile</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;