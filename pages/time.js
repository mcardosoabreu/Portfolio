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

export function getStaticProps() {
    const staticDate = new Date()
    const staticDateString = staticDate.toGMTString()

    return {
        props: {
            staticDateString
        }
    }
}

export default Time;