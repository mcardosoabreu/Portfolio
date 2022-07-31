import Link from "next/link"

function Time(props) {
    const dynamicDate = new Date()
    const dynamicDateString = dynamicDate.toGMTString()

    return (
        <div>
            <div>{dynamicDateString} (dynamic)</div>
            <div>{props.staticDateString} (static)</div>
            <br/>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
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