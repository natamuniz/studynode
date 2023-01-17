const express = require('express');


const server = express();

const cursos = ['Nodejs', 'JavaScript', 'React Native'];

//localhost:3000/curso
server.get('/curso/: index', (req, res) => {
   
    const {index} = req.params;
   
    return res.json(cursos[index]);
})

server.listen(3000);