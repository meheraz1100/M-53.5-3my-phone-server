const express = require('express');
const cors = require('cors')
const phones = require('./phone.json');
const  app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World from my Phone server is comming soon')
})

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('i need data for id', id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone)
})

app.listen(port, () => {
    console.log(`My phone Server is running on port ${port}`)
})






// const express = require('express')
// const phones = express('./phone.json')
// const app = express()
// const port = 3000;


// app.get('/', (req, res) => {
//     res.send("hello from my phone server")
// })
// app.get('/phones', (req, res) => {
//     res.send(phones)
// })

// app.get('/phones/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     console.log('I need data for id', id)
//     const phone = phones.find(phone => phone.id === id) || {};
//     res.send(phone)
// })

// app.listen(port, () => {
//     console.log(`My phone server is running on port ${port}`)
// })