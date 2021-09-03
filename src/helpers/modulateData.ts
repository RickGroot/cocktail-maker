interface drink {
    idDrink: string;
    image: string;
    strDrink: string;
    strCategory: string;
    strGlass: string;
    ingredients: string[];
    measures: any;
    strInstructions: string;
    dateModified: string;
}

// ------------------------------------------------------------------------------------------------------------------ exported functions

function modulateDrinkData(data) {
    let drinkObj = data.drinks[0]

    let newData: drink = {
        idDrink: drinkObj.idDrink,
        image: drinkObj.strDrinkThumb,
        strDrink: drinkObj.strDrink,
        strCategory: drinkObj.strCategory,
        strGlass: drinkObj.strGlass,
        ingredients: ingredientList(drinkObj),
        measures: measureList(drinkObj),
        strInstructions: drinkObj.strInstructions,
        dateModified: drinkObj.dateModified
    }

    return newData;
}

function modulateListData(data) {
    let drinkObj = data.drinks[0]

    let newData = {
        idDrink: drinkObj.idDrink,
        image: drinkObj.strDrinkThumb,
        strDrink: drinkObj.strDrink,
        strCategory: drinkObj.strCategory,
    }

    return newData;
}

// ------------------------------------------------------------------------------------------------------------------ helping functions
function ingredientList(data) {
    let ingredients: string[] = [];
    for (let i = 1; i <= 15; i++) {
        let label = 'strIngredient' + i
        if (data[label]) {
            ingredients.push(data[label]);
        } else {
            i++
        }
    }
    return ingredients;
}

function measureList(data) {
    let measures: string[] = [];
    for (let i = 1; i <= 15; i++) {
        let label = 'strMeasure' + i
        if (data[label]) {
            measures.push(data[label]);
        } else {
            i++
        }
    }
    return measures;
}

// ------------------------------------------------------------------------------------------------------------------ export

export {
    modulateDrinkData,
    modulateListData
}