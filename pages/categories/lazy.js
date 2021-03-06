import { GET_CATEGORIES } from "../../schema";
// import { styles } from '@styles/Home.module.css'
import { useLazyQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import { useStyles } from "../../styles";
import Button from '@material-ui/core/Button';

const Lazy = () => {
    const styles = useStyles()
    const [getCategory, { loading, error, data }] = useLazyQuery(GET_CATEGORIES);

    if (loading) return <p>Loading ...</p>;
    if (error) return `Error! ${error}`;

    return (
        <div>
            <Head>
                <title>Lazy Query page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Link href={'/'}><p>Back to Home</p></Link>
                <h1 style={{ textAlign: 'center' }}>Lazy Query Page</h1>
                <Button className={styles.buttonCustom} onClick={() => getCategory()} variant="contained" color="primary">
                    Click to get Category
                </Button> 
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
    );
}

export default Lazy