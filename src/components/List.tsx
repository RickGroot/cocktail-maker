import ListItem from "./ListItem";

const List = ({data}) => {

    const drinks = data.drinks;

    return (
        <section className='List'>
            {drinks.map((value) => {
                return <ListItem data={value} />
            })}
        </section>
    );
}

export default List;