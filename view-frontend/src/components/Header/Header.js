import React, {useContext} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import {UserContext} from "../../App";

const Header = () => {
    const profileImageStyle = {borderRadius: '50%',
        width: '35px',
        border: '1px solid darkGray',
        padding: "1px"
    };

    const [loggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    return (
        
        <Navbar expand="lg" className="mr-auto" bg="white" variant="dark">
            <img src="/a.svg" width="270" height="210" className="d-inline-block align-top" alt="garden logo"/>

            <Link to="/">
                <Navbar.Brand>
                    <h1 className="nav-link active text-success"><strong>Gardening Ecommerce</strong></h1>
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle style={{backgroundColor: 'gray'}} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="align-items-center">
                <Link to="/" className="nav-link active text-success"><strong>Home</strong></Link>
                <Link to="/orders" className="nav-link active text-success"><strong>Orders</strong></Link>
                <Link to="/admin" className="nav-link active text-success"><strong>Admin</strong></Link>
                <Link to="/" className="nav-link active text-success"><strong>Deals</strong></Link>
                {
                    loggedInUser.isSignedIn
                        ? <Link to="/" className="nav-link active text-dark">
                            <img style={profileImageStyle} src={loggedInUser.photoURL} alt={loggedInUser.name}/>
                        </Link>
                        : <Link to="/login" className="nav-link active text-dark">
                            <Button size="sm" variant="success"><strong>Login</strong></Button>
                        </Link>
                }
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;