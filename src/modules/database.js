import mongoose from 'mongoose';
import paginate from 'mongoose-paginate';
require('dotenv').load();
mongoose.connect(process.env.DB_LINK, (err) => {
    if (err) {
        return console.log(err)
    } else {
        return console.log('db connected');
    };
})