import { useRouter } from "next/router"
import Image from "next/image"

const detail = () => {
    const router = useRouter()
    const { query } = router;

    console.log(query)
    return (
        <div>
            <h1>
                Ini halaman detail
            </h1>
            <p>
                {query.title}
            </p>
            <p>
                {query.content}
            </p>
            <Image
                alt='Bunga'
                src={query.image}
                width={700}
                height={450}
            />
        </div>
    )
}

export default detail