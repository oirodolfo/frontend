import * as React from 'react'
import Link from 'next/link'
import '../styles/main.styl'

const App = () => (
    <div>
        <h1>Welcome</h1>
        <Link href="/user"><a> Let's go</a></Link>
    </div>
)


export default App