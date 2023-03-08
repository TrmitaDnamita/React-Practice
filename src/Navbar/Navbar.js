import React from "react";

const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1>Placeholder Blog</h1>
            <div className="Links">
                <a href="/">Home</a>
                <a href="/Create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;

