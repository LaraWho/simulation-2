const express = require('express');
const bodyParser = require('body-parser');
const Cntrl = require('./controller');
// const session = require('express-session');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true
// }))
app.get('/api/properties', Cntrl.getAllProperties);
app.post('/api/properties', Cntrl.addProperty);

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    console.log("DB connected! :D ");
    app.set('db', dbInstance)
}).catch( error => console.error('ERROR!', error))


const port = process.env.PORT || 4000;
app.listen(port, () => { console.log(`Server listening on port ${port}!`)})
