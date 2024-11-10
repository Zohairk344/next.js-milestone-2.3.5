import React from 'react'
import Link from 'next/link'
import '@/public/styles/project.css'

const about = () => {
  return (
    <div id='start3'>
        <section id='main3'>
            <div id='projectbox'>
            <h2 id='projecthead'>Projects</h2>
                <div>
                    <h3 id='gitproject'>Github Links</h3>
                    <p id='gitdesc'>Github Links Of The Projects I have Worked On</p>
                    <Link id='gitlink1' href="https://github.com/Zohairk344/GIAIC-100-day-coding-challenge">100 Days Coding Challenge</Link>
                    <Link id='gitlink2' href="https://github.com/Zohairk344/2024-Hackathon-milestone1">Hackathon Milestone 1</Link>
                    <Link id='gitlink3' href="https://github.com/Zohairk344/2024-Hackathon-milestone3">Hackathon Milestone 3</Link>
                    <h3 id='vercelproj'>Vercel Links</h3>
                    <Link id='vercelink1' href="https://2024-hackathon-ruby.vercel.app/">Hackathon Milestone 1</Link>
                    <Link id='vercelink2' href="https://2024-hackathon-milestone3.vercel.app/">Hackathon Milestone 3</Link>
                </div>
            </div>
        </section>
    
        <section id='skills'>
            <div id='skillscard'>
                <ul id='skillslist'>
                    <li>Typescript</li>
                    <li> HTML and CSS</li>
                    <li> little bit LUA</li>
                    <li> Learning Next.JS</li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default about