import Link from "next/link";
import { useEffect, useState } from "react";
import styles from '../../styles/Home.module.css'
import Image from "next/image"

export default function Csr() {
    const [meals, setMeals] = useState()

    const getData = async () => {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        const data = await res.json()

        setMeals(data.meals);
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(meals)

    return (
        <div className="{styles.container}">
            <Link href={{
                pathname: `/`
            }}>
                <p style={{ textAlign: 'center', background: 'none'}}>Home</p>
            </Link>
            <h1 style={{textAlign: 'center'}}>Seafood Meals (CSR)</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '2px', background: '#80808024'}}>
                {meals ? (
                    meals.map((meal) => (
                        <div key={meal.idMeal} style={{ marginTop: '15px', width: '250px', padding: '30px'}}>
                            <p style={{ background: "none" }}>{meal.strMeal}</p>
                            <Image width= {400} height={400} src={meal.strMealThumb} alt={meal.strMeal} />
                        </div>
                    ))
                ) : (
                    <h1 style={{ textAlign: 'center' }}>Loading</h1>
                )}
            </div>
        </div>
    )
}