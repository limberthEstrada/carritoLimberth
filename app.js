const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen (process.env.PORT ||3000, ()=>{
    console.log('Servidor funcionando bien');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + './views/index.html');
});

app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + './views/carrito.html');
});

