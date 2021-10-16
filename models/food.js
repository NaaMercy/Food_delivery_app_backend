//importing mongoose from the package we installed
import mongoose from 'mongoose';

//extract these from the mongoose package
//pro tip: read more on array & object destructing/destructoring in js/spreading of arrays and objects

const {Schema, model} = mongoose;

//creating a schema for the food delivery app
const foodSchema = Schema({
    image: String,
    foodName: String,
    price: Number,
    rating: Number,
    reviewsCount: Number,
    ingredients: String,
    description: String,
    category: String
});

//using the schema to create a model
//databaseName=foodCollection
// const foodModel = model('foodCollection', foodSchema) 

//use named export over default export, it prevents from making typing mistake
//default export
//export default foodModel = foodModel;
//name export
export const foodModel = model('foodCollection', foodSchema);