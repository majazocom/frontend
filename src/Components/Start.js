import React from 'react'
import { Link } from 'react-router-dom'

export default function Start() {
  return (
    <main className='start-main'>
        <section>
            <Link to="chooseplayers"><button className='start-button'>START</button></Link>
        </section>
    </main>
  )
}
