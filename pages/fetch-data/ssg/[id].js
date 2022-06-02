import Image from "next/image"

export default function Ssgid({ meal }) {
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Detail {meal.strMeal} </h3>
            <div style={{ display: 'flex' }}>
                <Image src={meal.strMealThumb} alt={meal.strMeal} width={400} height={400}/>
            </div>
            <div style={{ border: '1px solid black', margin: '10px 150px' }}>
                <p style={{ 'padding-left': '100px', 'padding-right': '100px', background: 'none', textAlign: 'center' }}>
                    How to make:
                </p>
                <p style={{ 'padding-left': '100px', 'padding-right': '100px', background: 'none' }}>
                    {meal.strInstructions}
                </p>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
    const data = (await res.json()).meals;
    const paths = data.map((item) => {
        return {
            params: { id: item.idMeal.toString() },
        };
    });
    return {
        paths,
        fallback: false, // false or 'blocking'
    };
}

export async function getStaticProps(ctx) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=` + ctx.params.id)
    const data = (await res.json())
    const meal = data.meals[0]
    return {
        props: {
            meal
        }
    }
}