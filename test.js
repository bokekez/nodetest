const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('working!');
})

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