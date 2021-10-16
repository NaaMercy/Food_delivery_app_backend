//importing express into the file
import express from 'express';
//importing food model
import {foodModel} from './models/food.js';
import {connectMongoDB} from './config/db.js'

//creating a new express instance
const app = express();

//get the body of a request using this middleware
app.use(express.json());
//initializing the server to listen to a particular port
const port = 5000;

//creating a route 
//instance of server.method('endpoint', callback-what should happen when the endpoint is reached)
app.get('/', (req, res) => {
    res.send("Welcome to Foode, Where good food costs less");
});

//getting all foods
app.get('/foods',async (req, res) => {
try {
    const foodList= await foodModel.find({}) ;//initialising list to foodList and passing as a response
   return res.json(foodList);
} catch (error) {
    console.log('Something went wrong ', error);
   return res.status(400).send(`Failed to fetch data ${error}`);
}
})

//create a new food
app.post('/foods/', async (req, res) => {
    try {
        const newFood = await foodModel.create({...req.body});
        return res.json(newFood);
    } catch (error) {
        console.log('Something went wrong ', error);
        return res.status(400).send(`Failed to fetch data ${error}`);
    } 
})

//update an existing food
app.patch('/foods/:id', async (req, res) => {
    try {
        const updateFood = await foodModel.findByIdAndUpdate(req.params.id, {...req.body}, {new:true});
        return res.json(updateFood);
    } catch (error) {
        console.log('Something went wrong ', error);
        return res.status(400).send(`Failed to fetch data ${error}`);
    } 
})

//delete an existing food
app.delete('/foods/:id', async (req, res) => {
    try {
        await foodModel.findByIdAndDelete(req.params.id);
        return res.send('Food was deleted');
    } catch (error) {
        console.log('Something went wrong ', error);
        return res.status(400).send('Failed to delete food');
    } 
})

//start connection to mongoDB
connectMongoDB();

//starting server to listen for request
app.listen(port, () => console.log('Server is app and running'));