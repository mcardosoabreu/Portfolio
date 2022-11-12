import Link from "next/link";
import classes from "../styles/header.module.css";
import useTranslation from 'next-translate/useTranslation'
import HamburgerMenuPage from "./hamburger.menu";

export default function Header() {
    let { t } = useTranslation()

    const toggle = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <div>
            <header className={classes.header}>
                <HamburgerMenuPage className={classes.hamburger_menu} />
                <nav className={classes.navigation}>
                    <Link href="/">
                        <a>{t("common:home")}</a>
                    </Link>
                    <Link href="/about">
                        <a>{t("common:about")}</a>
                    </Link>
                    <Link href="/time">
                        <a>{t("common:time")}</a>
                    </Link>
                </nav>    
                <h1>Miguel Cardoso Abreu</h1>
                <p>{t("common:portfolio")}</p>
            </header>
        </div>
    )
}    