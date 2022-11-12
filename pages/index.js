import Layout from "../components/layout"
import Contact from "../components/contact"
import { useState } from "react"
import useTranslation from 'next-translate/useTranslation'
import classes from "../styles/index.module.css"

function Home() {
    let { t } = useTranslation()

    return (
        <Layout>
            <section className={classes.section}>
                <h2>{t("common:contact")}</h2>
                <Contact label="email" value="mcardosoabreu@gmail.com"></Contact>
                <Contact label="phone" value="+55 41 991985305"></Contact>
                <Contact label="github" value="github.com/mcardosoabreu"></Contact>
            </section>
            <br/>
            <Counter />
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