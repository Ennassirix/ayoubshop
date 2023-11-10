import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <>
            <Header />
            <div className="about">
            </div>
            <div className='about-center'>
                <h1 className='about-title'>Don’t squeeze in a sedan when you could relax in a van.</h1>
            </div>
            <p className='about-p'>
                Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)

                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
            <div className='about-card'>
                <h3>
                    Your destination is waiting.
                    Your van is ready.
                </h3>
                <button className='about-btn'>
                    <Link>
                        Explore our vans
                    </Link>
                </button>
            </div>
        </>
    )
}
