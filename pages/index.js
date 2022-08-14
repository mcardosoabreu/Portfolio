import Layout from "../components/layout"
import { useState } from "react"
import Link from "next/link"
import useTranslation from 'next-translate/useTranslation'

function Home() {
    let { t } = useTranslation()

    return (
        <Layout>
            <h1>Miguel Cardoso Abreu</h1>
            <h2>{t("common:greeting")}</h2>
            <br/>
            <Counter />
            <br/>
            <Link href="/time">
                <a>Time</a>
            </Link>
            <br/>
        </Layout>
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