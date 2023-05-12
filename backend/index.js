const express = require('express');
const app = express();

// importing routers 

const userRouter = require('./routers/userRouter');
const eventRouter = require('./routers/eventRouter');
const reviewRouter = require('./routers/reviewRouter');
const utilRouter = require('./routers/util');


const cors = require('cors');

app.use(cors({
    origin: ['http://localhost:3000']
}));


// parse json data
app.use(express.json());

// adding routers
app.use('/user', userRouter);
app.use('/event', eventRouter);
app.use('/review', reviewRouter);
app.use('/util', utilRouter);

const port = 5000;


app.get('/', (req, res) => {
    res.send('Working Perfectly');
});

app.get('/add', (req, res) => {
    res.send('Response from Add');
});

// getall
app.get('/getall', (req, res) => {
    res.send('');
})

app.use(express.static('./static/uploads'));

app.listen( port, () => { console.log('server started!!');} );