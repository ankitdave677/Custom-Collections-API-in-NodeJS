const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Destination = require('./models/destinations');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI,).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// CREATE
app.post('/destinations', async (req, res) => {
    const destination = new Destination(req.body);
    try {
        await destination.save();
        res.status(201).send(destination);
    } catch (error) {
        res.status(400).send(error);
    }
});

// READ ALL
app.get('/destinations', async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.status(200).send(destinations);
    } catch (error) {
        res.status(500).send(error);
    }
});

// READ ONE
app.get('/destinations/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const destination = await Destination.findById(_id);
        if (!destination) {
            return res.status(404).send();
        }
        res.status(200).send(destination);
    } catch (error) {
        res.status(500).send(error);
    }
});

// UPDATE
app.put('/destinations/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const destination = await Destination.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
        if (!destination) {
            return res.status(404).send();
        }
        res.status(200).send(destination);
    } catch (error) {
        res.status(400).send(error);
    }
});

// DELETE
app.delete('/destinations/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const destination = await Destination.findByIdAndDelete(_id);
        if (!destination) {
            return res.status(404).send();
        }
        res.status(200).send(destination);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
