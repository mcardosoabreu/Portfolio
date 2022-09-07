import Link from "next/link";
import classes from "../styles/header.module.css";
import useTranslation from 'next-translate/useTranslation'

export default function Header() {
    let { t } = useTranslation()

    return (
        <div>
            <header className={classes.header}>
                <nav className={classes.nav}>
                <Link href="/">
                    <a>{t("common:home")}</a>
                </Link>
                <Link href="/about">
                    <a>{t("common:about")}</a>
                </Link>
                </nav>
                <h1>Miguel Cardoso Abreu</h1>
                <p>{t("common:portfolio")}</p>
            </header>
        </div>
    )
}    