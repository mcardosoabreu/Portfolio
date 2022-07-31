export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                id: '1'
            }
        },{
            params: {
                id: '2'
            }
        }],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    await delay(5000)
    const id = context.params.id

    return {
        props: {
            id: id
        }
    }
}

function Products(props) {
    return <div>Product ID: {props.id}</div>
}

export default Products

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}