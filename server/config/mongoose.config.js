const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productmanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('database connection established'))
.catch(err=>console.log('good try', err))