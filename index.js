const express = require('express');
const shortid = require('shortid');

const server = express();

server.use(express.json());

let users = [];

server.get('/', (req, res) => {
    res.send('Server is working');
});

// POST /api/users
server.post('/api/users', (req, res) => {
    const user = req.body

    if(user.name === "" || user.bio === "") {
        res.status(400).json({errorMessage: "Please provide name and bio for the user."});
    } else {
        user.id = shortid.generate();

        users.push(user);
        res.status(201).json(user);
    }
})

// GET /api/users
server.get('/api/users', (req, res) => {
    res.status(200).json(users);
});

// // GET /api/users/:id
server.get('/api/user/:id', (req, res) => {
    const { id } = req.params;
    
    const foundid = users.find((user) => user.id === id);

    if (foundid) {
        res.status(200).json(foundid)
    } else {
        res.status(404).json({messasge: "The user with the specified ID does not exist."})
    }
})

// // DELETE /api/users/:id
server.delete('api/users/:id', (req, res) => {

})

// // PUT /api/users/:id

// PORT
const PORT = 5000;

server.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});