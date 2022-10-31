import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header className='header'>
       <Link to="/"><h1>HALLOWEEN FIGHT</h1></Link>
        <h3>LOGIN</h3>
    </header>
  )
}
