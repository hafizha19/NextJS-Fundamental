const MealDetail = ({data}) => {
    console.log(data)
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Detail {data.strMeal} </h3>
            <img style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} src={data.strMealThumb} />
            <div style={{ border: '1px solid black', margin: '10px 150px' }}>
                <p style={{ 'padding-left': '100px', 'padding-right': '100px', background: 'none', textAlign: 'center' }}>
                    How to make:
                </p>
                <p style={{ 'padding-left': '100px', 'padding-right': '100px', background: 'none' }}>
                    {data.strInstructions}
                </p>
            </div>
        </div>
    )
}

export default MealDetail