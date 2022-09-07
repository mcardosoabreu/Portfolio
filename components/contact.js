import useTranslation from 'next-translate/useTranslation'
import classes from "../styles/contact.module.css"

export default function Contact({ label, value }) {
    let { t } = useTranslation()
    let translate = "common:" + label
    
    return (
        <div className={classes.section}>
            <ul>
                <li className={classes.details}>
                    {t(translate)}: &nbsp;
                </li>
                <li className={classes.data}>
                    {value}
                </li> 
            </ul>
        </div>
    )
}