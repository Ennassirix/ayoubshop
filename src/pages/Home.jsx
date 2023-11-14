import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import Products from '../Components/Products'

export default function Home() {
    const [value, setValue] = useState('')
    return (
        <div className='container'>
            <NavBar setValue={setValue} />
            <Products value={value} />
        </div>
    )
}
