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
    res.send('working!');
})

app.post('/signin', (req, res) =>{
    if(req.body.email === data.users[0].email && 
        req.body.password === data.users[0].password){
            res.json('Good!');
        } else {
            res.json(400).json('Bad!');
        }
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