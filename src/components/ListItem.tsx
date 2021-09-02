const ListItem = ({data}) => {
    return (
        <a href={"/drink/" + data.idDrink}>
            <article>
                <img src={data.strDrinkThumb} alt="data.strDrink" />
                <div>
                    <h2>{data.strDrink}</h2>
                    <p>{data.strCategory}</p>
                </div>
            </article>
        </a>
    );
}

export default ListItem;