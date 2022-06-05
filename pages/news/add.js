import { useState } from "react";
import Image from 'next/image'
import { gql, useMutation } from '@apollo/client'
import { POST_SUBSCRIBE } from "pages/categories/schema";
import styles from "@styles/Home.module.css"

function NewsPage() {
    const [title, setTitle] = useState([]);
    const [status, setStatus] = useState([]);
    // const [content, setContent] = useState([]);
    // const [url, setUrl] = useState([]);
    // const [image, setImage] = useState([]);
    // const [news, setNews] = useState([]);

    const [dataSubscribe] = useMutation(POST_SUBSCRIBE)

    // const fetchNews = async () => {
    //     const response = await fetch("/api/news");
    //     const data = await response.json();
    //     console.log(data);
    //     setNews(data);
    // };

    // const submitNews = async () => {
    //     const response = await fetch("/api/news", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             title,
    //             content,
    //             image,
    //             url
    //         }),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });
    //     const data = await response.json();
    //     console.log('data', data);
    // };

    const submitNews = async () => {
        console.log(title)
        const responseData = await dataSubscribe({
            variables: {
                email: title
            }
        })
        setStatus(responseData.data.subscribe.status)
        // if (responseData.data.subscribe.status.response === 'Failed') {

        // }
    }

    return (
        <div className={styles.containerall}>
            <main className={styles.main}>
                <h1>Submit email to subscribe</h1>
                <div style={{ display: 'flex' }}>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br />
                    <button onClick={submitNews}>Submit</button>
                </div>
                <br />
                <p>Status: </p>
                <div>
                    {
                        status.response === 'Failed' ? (
                            <p>{status.message}</p>
                        ) : (
                            <p>Sukses</p>
                        )
                    }
                </div>
                {/* <div align="center">
                <button onClick={fetchNews}>Get the latest news</button>
            </div>{" "}
            {news.map((item) => {
                return (
                    <div align="center" key={item.id}>
                        {news.id}.<br />
                        {"Title: "}
                        {item.title}.<br />
                        {"URL: "} {item.url}.<br />
                        {"Image: "} <Image
                            alt='Bunga'
                            src={item.image}
                            width={700}
                            height={450}
                        />.<br />
                        {"Content: "}
                        {item.content} <br />
                        <hr />
                    </div>
                );
            })}{" "} */}
            </main>
        </div>
    );
}

export default NewsPage;