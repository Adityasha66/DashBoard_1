const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv:|write your MondoDB Connection URL|,
    (err, docs) => {
        if (!err) {
            console.log('databass acess')
        } else {
            console.log('error')
        }
    });



module.exports = { mongoose }
