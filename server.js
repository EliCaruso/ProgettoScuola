'use strict';
const express = require('express');
const app = new express();

app.listen(8000, ()=>{
	console.log("server up sulla porta 8000")
});

app.get('/', (req,res)=>{
	res.send("Homepage del mio sito")
});

app.get('/Autore', (req,res)=>{
	res.send("L'autore (o autrice?) sono io")
})

app.get('*', (req,res)=>{
	res.status(404).send("Error 404: mi dispiace ma questa pagina non esiste")
})