import Link from "next/link";
import { Auth } from "aws-amplify";
import React from "react";

const Navbar = () => {
    const signOutHandler = async () => {
        try {
            await Auth.signOut();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <a className="navbar-brand">Urban Tour</a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <Link href="/">
                                <div className="nav-item nav-link">Home</div>
                            </Link>
                            <Link href="/profile">
                                <div className="nav-item nav-link">Profile</div>
                            </Link>
                            <Link href="/notifications">
                                <div className="nav-item nav-link">Notifications</div>
                            </Link>
                        </div>
                        <div className="navbar-nav ms-auto">
                            <a href="#" className="nav-item nav-link" onClick={signOutHandler}>Log out</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Navbar