import Link from "next/link"

export default function Isr({meals}) {

    return (
        <div className="{styles.container}">
            <Link href={{
                pathname: `/`
            }}>
                <p style={{ textAlign: 'center', background: 'none'}}>Home</p>
            </Link>
            <h1 style={{ textAlign: 'center' }}>Seafood Meals (ISR)</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', margin: '2px', background: '#80808024' }}>
                {meals ? (
                    meals.map((meal) => (
                        <div key={meal.idMeal} style={{ marginTop: '15px', width: '250px', padding: 'auto', padding: '30px' }}>
                            <p style={{ background: "none" }}>{meal.strMeal}</p>
                            <img style={{ width: '100px', height: 'auto' }} src={meal.strMealThumb} alt={meal.strMeal} />
                        </div>
                    ))
                ) : (
                    <h1 style={{ textAlign: 'center' }}>Loading</h1>
                )}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    const data = (await res.json())
    const meals = data.meals

    return {
        props: {
            meals
        },
        revalidate: 10,
    }
}