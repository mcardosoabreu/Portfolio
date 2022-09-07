import Head from "next/head";
import classes from "../styles/layout.module.css";
import Header from "./header";
import Footer from "./footer";
export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Miguel Cardoso Abreu</title>
                <link rel="icon" href="/favicon.ico"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Serif:opsz,wght@8..144,700&display=swap" rel="stylesheet"></link>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>

            <Header></Header>

            <main className={classes.content}>{children}</main>

            <Footer></Footer>
        </div>
    )
}