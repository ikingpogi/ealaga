const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
const fileUpload = require('express-fileupload')
const path = require('path')
const dotenv = require('dotenv');


app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(fileUpload());

// const disease = require('./routes/disease');
// const injury = require('./routes/injury');
// const animal = require('./routes/animal');
const user = require('./routes/user');
const dashboard = require('./routes/dashboard');
const schedule = require('./routes/schedule');
const health = require('./routes/health');
const applicant = require('./routes/applicant');
const announcement = require('./routes/announcement');
// const home = require('./routes/home');
// const dashboard = require('./routes/dashboard');

app.use('/api/', user)
app.use('/api/', dashboard)
app.use('/api/', schedule)
app.use('/api/', health)
app.use('/api/', announcement)
app.use('/api/', applicant)
// app.use('/api/', home)
// app.use('/api/', dashboard)

if (process.env.NODE_ENV !== 'PRODUCTION') 
    require('dotenv').config({ path: 'backend/config/config.env' })


    if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}


module.exports = app