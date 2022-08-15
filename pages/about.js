import Layout from "../components/layout"
import useTranslation from 'next-translate/useTranslation'

function About() {
    let { t } = useTranslation()

    return (
        <Layout>
            <h1>{t("common:about")}</h1>
        </Layout>
    )
}

export default About