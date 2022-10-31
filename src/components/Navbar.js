import React from "react";

export default function Navbar() {
    return (
        <header className="navbar">
            <img src={process.env.PUBLIC_URL + "/images/earth-logo.png"} className="navbar--logo" alt="Website earth logo"/>
            <h4 className="navbar--title">my travel journal.</h4>
        </header>
    )
}