import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrAdd } from 'react-icons/gr'
import { GrGamepad } from 'react-icons/gr'
import { GrHome } from 'react-icons/gr'
import Link from 'next/link'
import Offcanvas from 'react-bootstrap/Offcanvas'

const Menu = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className='menu-button-div'>
             <div className='soft-button' onClick={handleShow}>
                <GiHamburgerMenu />
            </div>
        </div>

        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{"What's The Werd?"}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Link href={`/`}>
            <a><GrHome />{"Home"}</a>
            </Link>
            <br />
            <br />
            <Link href={`/addWord`}>
            <a><GrAdd />{"Add Slang"}</a>
            </Link>
            <br />
            <br />
            <GrGamepad /> Play Game Coming Soon
        </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}

export default Menu;
