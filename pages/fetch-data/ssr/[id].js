import Link from 'next/dist/client/link'
import dynamic from 'next/dynamic'

const MealDetail = dynamic(() => import('@components/MealDetail'), { loading: () => <p>...</p> })

export default function Ssrid({ meal }) {

    console.log(meal)
    return (
        <MealDetail data={meal} />
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=` + ctx.params.id)
    const data = await res.json()
    const meal = data.meals[0]

    console.log(meal)
    return {
        props: {
            meal
        }
    }
}