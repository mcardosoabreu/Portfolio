import Layout from "../components/layout"

function Time(props) {
    const dynamicDate = new Date()
    const dynamicDateString = dynamicDate.toGMTString()

    return (
        <Layout>
            <div>{dynamicDateString} (dynamic)</div>
            <div>{props.staticDateString} (static)</div>
        </Layout>
    )
}

export async function getStaticProps() {
    const staticDate = new Date()
    const staticDateString = staticDate.toGMTString()

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default Time;