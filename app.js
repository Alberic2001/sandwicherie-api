const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const api = '/api';

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//Import routes
const authRoute = require('./routes/auth');
const addressRoute = require('./routes/address');
const billRoute = require('./routes/bill');
// const categoryRoute = require('./routes/category');
const commandRoute = require('./routes/command');
const commandDetailRoute = require('./routes/commandDetail');
const commandStateRoute = require('./routes/commandState');
const deliveryRoute = require('./routes/delivery');
const deliveryStateRoute = require('./routes/deliveryState');
const ingredientsRoute = require('./routes/ingredient');
const ingredientsTypeRoute = require('./routes/ingredientType');
const sandwichRoute = require('./routes/sandwich');
const sandwichIngredientRoute = require('./routes/sandwichIngredient');
const userTypeRoute = require('./routes/userType');

//Routes Middlewares
app.use('/api/user', authRoute);
app.use(addressRoute);
app.use(billRoute);
app.use(commandRoute);
app.use(commandDetailRoute);
app.use(commandStateRoute);
app.use(deliveryRoute);
app.use(deliveryStateRoute);
app.use(ingredientsRoute);
app.use(ingredientsTypeRoute);
app.use(sandwichRoute);
app.use(sandwichIngredientRoute);
app.use(userTypeRoute);

//Connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
{ useNewUrlParser: true, useUnifiedTopology: true },
() => {
    console.log('Connected to db !')
});


app.listen(3000);
