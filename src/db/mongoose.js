const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/be-project-assignment-api', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})