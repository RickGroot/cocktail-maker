import Header from '../components/Heading';
import Nav from '../components/Nav';
import List from '../components/List'
import {data} from '../helpers/testData';

const Discover = () => {
    return (
        <main>
            <Header subText="Discover" title="New drinks" color="#FF416D"/>

            <List data={data} />

            <Nav color="#FF416D" />
        </main>
    );
}

export default Discover;