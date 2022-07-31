import { useState } from "react"
import Link from "next/link"

function Home() {
    return (
        <div>
            <h1>Miguel Cardoso Abreu</h1>
            <br/>
            <Counter />
            <br/>
            <Link href="/time">
                <a>Time</a>
            </Link>
            <br/>
            <Link href="/about">
                <a>About</a>
            </Link>
        </div>
    )
}

function Counter() {
    const [counter,setCounter] = useState(1)

    function addCounter() {
        setCounter(counter + 1)
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={addCounter}>Add</button>
        </div>
    )
}

export default Home