import ListItem from "./ListItem";

const List = ({data}) => {
    return (
        <section className='List'>
            {data.map(value => <ListItem data={value} key={value.idDrink}/>)}
        </section>
    );
}

export default List;