const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const data = {
    users: [
        {
            id: '1',
            name: 'Johny',
            email: 'Johny@gmail.com',
            password: 'Johne',
            joined: new Date()
        },
        {
            id: '2',
            name: 'Annie',
            email: 'Annie@gmail.com',
            password: 'Ana',
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) =>{
    res.send(data.users);
})

app.post('/signin', (req, res) =>{
    data.users.forEach(username => {
        data.users.email === req.body.email &&
        data.users.password === req.body.password
    })
    {
        res.json('10 4 dinosaur')
    } 
    // if(req.body.email === data.users[0].email && 
    //     req.body.password === data.users[0].password){
    //         res.json('Good!');
    //     } else {
    //         res.json(400).json('Bad!');
    //     }
})

app.post('/register', (req, res) => {
    const { email, name, password} = req.body;
    data.users.push({
        id: '3',
        name: name,
        email: email,
        password: password,
        joined: new Date()
    })
    res.json(data.users[data.users.length-1]);
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    data.users.forEach(user => {
        if(user.id === id) {
            res.json(user);
        } else {
            res.status(404).json('No such user!');
        }
    })
})
// app.post('/signin', (req, res) =>{
//     res.send('signing')
// })

app.listen(3000, ()=>{
    console.log('working');
})

const fs = require('fs');

fs.readFile('./hello.text', (err, data) =>{
    if (err) {
        console.log('error');
    }
    console.log('1', data.toString());
})

const file = fs.readFileSync('./hello.text');
console.log('2', file.toString()); 

// fs.appendFile('./hello.text', ' This is cool!!1', err => {
//     if (err) {
//         console.log(err)
//     }
// })

fs.writeFile('bye.txt', 'See ya later', err => {
    if (err) {
        console.log(err)
    }
})

fs.unlink('./bye.txt', err => {
   if (err){
        console.log(err)
   } 
})