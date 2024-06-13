require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_DEV_URI)
    .then(() => {
        console.log("Server connected successfully");
        app.listen(port, () => console.log(`Server listening on port http://localhost:${port}!`));
    })
    .catch(err => console.log('Connection unsuccessful', err));

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api/auth', authRoutes);