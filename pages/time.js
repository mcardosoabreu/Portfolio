import Link from "next/link"

function Time(props) {
    const dynamicDate = new Date()
    const dynamicDateString = dynamicDate.toGMTString()

    return (
        <div>
            <div>{dynamicDateString} (dynamic)</div>
            <div>{props.staticDateString} (static - with delay)</div>
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

    await delay(5000)
    return {
        props: {
            staticDateString
        }
    }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export default Time;