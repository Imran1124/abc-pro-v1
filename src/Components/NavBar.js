import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import logo from '../assets/images/logo.jpg'

export default function NavBar() {
    const [showNav, setShowNav] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light' className='fixed-top'>
            <MDBContainer>
                {/* <MDBNavbarBrand className='navlogo' href="#x"> */}
                <Link to="/">
                    <img src={logo} height={40} alt="#" />
                </Link>
                {/* </MDBNavbarBrand> */}
                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNav(!showNav)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNav}>
                    <MDBNavbarNav className='navitems'>
                        <MDBNavbarItem active aria-current='page'>
                            <Link to='/' className="nav-link active">Home</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to='/applycard1' className="nav-link">About</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link className="nav-link" to="/applycard2">
                                Contact
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to='/login' className="nav-link">
                                <MDBBtn outline size='sm' color='danger'>Login</MDBBtn>
                            </Link>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}