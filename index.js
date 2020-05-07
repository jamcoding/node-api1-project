const express = require('express');

// const shortid = require('shortid');

const server = express();

server.use(express.json());

let users = [];

server.get('/', (req, res) => {
    res.send('API is working');
});

// PORT
server.post('/api/users', (req, res) => {
    const user = req.body;

    if(!user.name || !user.bio) {
        res.status(400).json({errorMessage: "Please provide name adn bio for the user."});
    } else {
        user.id = shortid.generate();

        users.push(user);
        res.status(201).json(user);
    }
   
})

// GET /api/users/
server.get('/api/users', (req, res) => {
    if(!users) {
        res.status(500).json({errorMessage: "The users information could not be retrieved."})
    } else {
        res.status(201).json(users)
    }
});

// GET /api/users/:id
server.get('/api/user/:id', (req, res) => {
    
})

// DELETE /api/users/:id

// PUT /api/users/:id

// PORT
const PORT = 5000;

server.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});