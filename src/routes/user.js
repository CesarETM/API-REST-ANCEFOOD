const { Router, request } = require('express');
const router = Router ();
const _ = require('underscore');

const user = require('../sample.json');

router.get('/', (req,res) => {
    res.json(user)
});

router.post('/', (req,res) => {
   const {nombres,apellidos,usuario,password,email,celular}= req.body;
   if (nombres && apellidos && usuario && password && email && celular) {
    const id = user.length+1;
    const newuser = {...req.body, id};
    console.log(newuser);
    user.push(newuser);
    res.json(user);
   }else{
    res.status(500).json({error: 'There was an error'});
   }
});

router.put('/:id', (req, res)=> {
    const{id} = req.params;
    const {nombres,apellidos,usuario,password,email,celular}= req.body;
    if (nombres && apellidos && usuario && password && email && celular){
        _.each(user,(users, i) => {
            if (users.id == id){
                users.nombres = nombres;
                users.apellidos = apellidos;
                users.usuario = usuario;
                users.password = password;
                users.email = email;
                users.celular = celular;
            }
        });
        res.json(user);
    }else{
        res.status(500).json({error: 'There was an error'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} =req.params;
    _.each(user, (users, i) => {
        if (users.id == id){
            user.splice(i,1);
        }
    });
    res.send(user);
});

module.exports = router;