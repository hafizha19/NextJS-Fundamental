import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'
import styles from '@styles/Home.module.css'
import Head from 'next/head'
import { useStyles } from '../../styles'
import Button from '@material-ui/core/Button';

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
    const styles = useStyles()
    const title = "category"
    const response = useQuery(GET_CATEGORIES)

    const { data, loading, error } = response
    if (loading) return 'Loading....'
    if (error) return `Error: ${error.message}`

    console.log(data)

    return (
        <div>
            <Head>
                <title>Use Query page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Link href={'/'}>
                <Button className={styles.buttonCustom} variant="contained" color="primary">Back to Home</Button>
            </Link>
            <h1 style={{ textAlign: 'center' }}>Use Query Page</h1>
            <div>
                {data?.categories && data.categories.items.map((item) => (
                    <Link href={`/categories/${item.id}`} key={item.id}>
                        <p>
                        {item.name}
                        </p>
                    </Link>
                ))
                }
            </div>
        </div>
    )
}

export default Categories