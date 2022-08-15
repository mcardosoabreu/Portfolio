import Head from "next/head";
import Link from "next/link";
import classes from "../styles/layout.module.css";
import { useRouter } from "next/router"
import useTranslation from 'next-translate/useTranslation'

export default function Layout({ children }) {
    let router = useRouter()
    let { t } = useTranslation()

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

            <header className={classes.header}>
                <nav className={classes.nav}>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                </nav>
                <h1><span>Miguel</span> Cardoso Abreu</h1>
                <p>{t("common:portfolio")}</p>
            </header>

            <main className={classes.content}>{children}</main>

            <footer className={classes.footer}>
                <p>© 2022</p>

                <ul>
                    {router.locales.map((locale) => (
                        <li key={locale}>
                            <Link href={router.asPath} locale={locale}>
                                <a>{locale}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </footer>
        </div>
    )
}