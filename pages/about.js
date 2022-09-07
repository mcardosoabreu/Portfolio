import Layout from "../components/layout"
import useTranslation from 'next-translate/useTranslation'

function About() {
    let { t } = useTranslation()

    return (
        <Layout>
            <h1>{t("common:about_text")}</h1>
        </Layout>
    )
}

export default About