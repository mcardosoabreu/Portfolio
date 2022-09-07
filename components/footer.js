import Link from "next/link";
import classes from "../styles/footer.module.css";
import { useRouter } from "next/router"

export default function Header() {
    let router = useRouter()

    return (
        <div>
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