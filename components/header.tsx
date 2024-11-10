import React from 'react'
import Link from 'next/link'
import '@/public/styles/header.css'

const Header = () => {
  return (
    <div id='start'>
        <div id='main'>
            <h1 id='title'><Link href="/">IT Portfolio</Link></h1>
            <div id='nav'>
            <div id='links'>
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/project">Projects</Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header