const mongoose = require('mongoose');

const url = 'mongodb+srv://smartdivyanshu123:umashukla@cluster0.ybljgxb.mongodb.net/mydatabase?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    // console.log(result);
    console.log('database connected');
}).catch((err) => {
    console.error(err);
});
// synchronous and asynchronous

module.exports=mongoose

