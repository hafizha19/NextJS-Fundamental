import { data } from '../news/data'

export default function handler(req, res) {
    if (req.method === 'GET') {
        console.log(data)
        res.status(200).json(data)
    } else if (req.method === 'POST') {
        const title = req.body.title;
        const content = req.body.content;
        const url = req.body.url;
        const image = req.body.image;

        const newNews = {
            id: Date.now(),
            title,
            content,
            image,
            url
        }

        data.push(newNews)
        res.status(201).json(newNews)
    }
}