import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from "../assets/blank-profile-picture-973460_960_720.webp"
import { Link } from 'react-router-dom';
export default function Profile() {
    const [userInfo, setUserInfo] = useState(null)
    useEffect(() => {
        const info = JSON.parse(localStorage.getItem('key'))
        setUserInfo(info)
    }, [])

    return (
        <>
        <NavBar/>
        <div className='center mt-5'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>{userInfo !== null && `${userInfo[0].lName} ${userInfo[0].fName}`}</Card.Title>
                        <div className='d-flex justify-content-between mt-3'>
                            <Button variant="outline-primary">
                                <Link to="/" className='text-dark text-decoration-none'>Go Shoping</Link>
                            </Button>
                            <Button variant="outline-dark">
                                <Link className='text-secondary text-decoration-none'>Cart</Link>
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
        </div>
        </>
    )
}
