import { useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { GET_PRODUCTS_BY_CATEGORY, GET_CATEGORY_BY_ID } from "./schema";

const CategoryId = () => {
    const router = useRouter()
    const { unique } = router.query

    const { loading, data, error } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
        variables: {
            categoryId: unique
        }
    })

    const dataCategory = useQuery(GET_CATEGORY_BY_ID, {
        variables: {
            categoryId: unique
        }
    }).data

    if (loading) return <p>Loading ...</p>;
    if (error) return `Error! ${error}`;

    return (
        <div className="{styles.main}">
            <Head>
                <title>Detail Category page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{ padding: '10px' }}>
                <Link href={'/'}><p>Back to Home</p></Link>
                <h1 style={{ textAlign: 'center' }}>Products by Category </h1>
                <p> Name : {dataCategory.category.name}</p>
                <div className="{styles.border}">
                    <h3 style={{textAlign: 'center'}}>Products</h3>
                    {data.products.items.map((item) => (
                        <Link href={`/categories/product/${item.sku}`} key={item.id}>
                            <p>
                                {item.name}
                            </p>
                        </Link>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoryId