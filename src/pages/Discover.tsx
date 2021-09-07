import { useEffect, useState } from 'react';
import Header from '../components/Heading';
import Nav from '../components/Nav';
import List from '../components/List';
import Loading from '../components/Loading';
import {modulateListData} from "../helpers/modulateData";

const Discover = () => {
    let [data, setData] = useState<any>(null);

    useEffect(() => {
        async function fetchData() {
            let list: any = [];

            // fetch x amount of random drinks
            for (let i = 0; i < 14; i++) {
                await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
                    .then(response => response.json())
                    .then(data => modulateListData(data))
                    .then(data => list.push(data));
            }
        return setData(list);
        }
        fetchData();
    },[])

    return (
        <main>
            <Header subText="Discover" title="New drinks" color="#FF416D"/>

            {(data === null) ? <Loading /> : <List data={data}/>}{console.log(data)}

            <Nav color="#FF416D" />
        </main>
    );
}

export default Discover;