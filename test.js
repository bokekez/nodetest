const fs = require('fs');

fs.readFile('./hello.text', (err, data) =>{
    if (err) {
        console.log('error');
    }
    console.log(data.toString());
})