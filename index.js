'use strict';

require('dotenv').config();
const mongoose= require('mongoose')
const server = require('./ src/server');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
.then(()=> console.log('conntected to mongoDB'))
.catch((err)=> console.log(err));



// start server
server.listen(3000);