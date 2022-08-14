import Layout from "../components/layout"
import useTranslation from 'next-translate/useTranslation'

function About() {
    let { t } = useTranslation()

    return (
        <Layout>
            <h1>Miguel Cardoso Abreu</h1>
            <h2>{t("common:about")}</h2>
        </Layout>
    )
}

export default About