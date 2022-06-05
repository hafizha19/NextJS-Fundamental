import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'
import { styles } from '@styles/Home.module.css'
import Head from 'next/head'

const GET_CATEGORIES = gql`
    {
        categories(filters:{}) {
            items {
                name
                id
            }
        }
    }
`

const Categories = () => {
    const title = "category"
    const response = useQuery(GET_CATEGORIES)

    const { data, loading, error } = response
    if (loading) return 'Loading....'
    if (error) return `Error: ${error.message}`

    return (
        <div className="{styles.main}">
            <Head>
                <title>Use Query page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Link href={'/'}><p>Back to Home</p></Link>
                <h1 style={{ textAlign: 'center' }}>Use Query Page</h1>
                {data?.categories && data.categories.items.map((item) => (
                    <ul>
                        <li>
                            <Link href={`/categories/${item.id}`} key={item.id}>
                                {item.name}
                            </Link>
                        </li>
                    </ul>
                ))
                }
            </div>
        </div>
    )
}

export default Categories