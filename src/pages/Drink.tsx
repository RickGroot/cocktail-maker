import {useState, useEffect} from "react";
import Header from '../components/Heading';
import Nav from '../components/Nav';
import {modulateDrinkData} from "../helpers/modulateData"

const Drink = (props) => {

    let id = props.match.params.idDrink;
    let [data, setData] = useState({idDrink: "", image: "", strDrink: "", strCategory: "", strGlass: "", ingredients: [""], measures: [""], strInstructions: "", dateModified: ""})

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
          .then((response) => response.json())
          .then((data) => modulateDrinkData(data))
          .then((data) => setData(data));
    },[id])
      
    return (
        <main>
            <Header subText={data.strCategory} title={data.strDrink} color="#6320EE"/>
            
            <article className='drinkInfo'>
                <section>
                    <img src={data.image} alt={data.strDrink} className='drink-bg'/>
                    <div>
        	            <h2>Glass</h2>
                        <p>{data.strGlass}</p>
                    </div>
                    <div>
                        <h2>Ingredients</h2>
                        <div className='ingrCont'>
                            <ul>
                            {data.ingredients.map((value) => {
                                return <li>{value}</li>
                            })}
                            </ul>
                            <ul>
                            {data.measures.map((value) => {
                                return <li>( {value} )</li>
                            })}
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Instructions</h2>
                    <p>{data.strInstructions}</p>
                    <p className='modified'>Last updated: {data.dateModified}</p>
                </section>
            </article>

            <Nav color="#6320EE" />
        </main>
    );
}

export default Drink;