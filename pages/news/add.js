import { useState } from "react";
import Image from 'next/image'

function NewsPage() {
    const [title, setTitle] = useState([]);
    const [content, setContent] = useState([]);
    const [url, setUrl] = useState([]);
    const [image, setImage] = useState([]);
    const [news, setNews] = useState([]);

    const fetchNews = async () => {
        const response = await fetch("/api/news");
        const data = await response.json();
        console.log(data);
        setNews(data);
    };

    const submitNews = async () => {
        const response = await fetch("/api/news", {
            method: "POST",
            body: JSON.stringify({
                title,
                content,
                image,
                url
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log('data', data);
    };
    return (
        <>
            <div align="center">
                {"Title: "}
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                {"Content: "}
                <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <br />
                {"URL: "}
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <br />
                {"Image: "}
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <br />
                <button onClick={submitNews}>Submit news</button>
            </div>{" "}
            <br />
            <br /> <br />
            <div align="center">
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
            })}{" "}
        </>
    );
}

export default NewsPage;