const express = require('express');
const { Server } = require('http');

const server = express();

//localhost:3000/curso
server.get('/curso:id', (req, res) => {
   
    const id = req.params.id;
   
    return res.json({curso: `Curso: ${id}`});
})

server.listen(3000);