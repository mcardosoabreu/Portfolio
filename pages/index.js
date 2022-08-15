import Layout from "../components/layout"
import { useState } from "react"
import Link from "next/link"
import useTranslation from 'next-translate/useTranslation'
import classes from "../styles/index.module.css"

function Home() {
    let { t } = useTranslation()

    return (
        <Layout>
            <section className={classes.section}>
                <h2>{t("common:contact")}</h2>
                <ul>
                    <li>
                        <div className={classes.details}>
                            <h3>Email: &nbsp;</h3>
                        </div>

                        <strong className={classes.data}>
                            mcardosoabreu@gmail.com
                        </strong>
                    </li>
                </ul>
            </section>
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