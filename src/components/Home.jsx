import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div className='container'>
            <Header/>
            <main>
                <div className='hero'>
                <div className='title'>
                <h1>You Got the Travel plans,we
                    got the travel van
                </h1>
                </div>
                <p>
                    Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                    Find your van
                </p>
                <button>
                        <Link>find your van</Link>
                </button>
                </div>
            </main> 
            
        </div>
    )
}
