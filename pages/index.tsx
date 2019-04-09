import * as React from 'react'
import Link from 'next/link'
import '../styles/main.css'

const App = () => (
    <div>
        <h1>Welcome</h1>
        <Link href={`/user/${(Math.random() * 10).toString().slice(2, 8)}`}><a> Let's go</a></Link>
    </div>
)


export default App