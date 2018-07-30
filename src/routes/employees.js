const express = require('express');
const router =express.Router();
const mysqlConnection = require('../db_connection')

router.get('/',function(req,res){
    mysqlConnection.query('SELECT * FROM employees',function(err, rows, fields){
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

router.get('/:id',function (req,res,) {
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM employees WHERE id=?', [id], (err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    })
});

router.post('/',(req,res)=>{
    const {id,name,salary}=req.body;
    const query=`
        CALL employeeAddOrEdit(?,?,?);
    `;
    mysqlConnection.query(query,[id,name,salary],(err,rows,fields)=>{
        if(!err){
            res.json({status: 'Anotadazo'})
        }else{
            console.log(err);
        }
    })
});

router.put('/:id',(req,res)=>{
    const {name,salary}=req.body;
    const {id}=req.params;
    const query=`
        CALL employeeAddOrEdit(?,?,?);
    `;
    mysqlConnection.query(query,[id,name,salary],(err,rows,fields)=>{
        if(!err){
            res.json({status: 'Editadazo'})
        }else{
            console.log(err);
        }
    })

});

router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    const query=`
        DELETE FROM employees WHERE id=?
    `;
    mysqlConnection.query(query,[id],(err,rows,fields)=>{
        if(!err){
            res.json({status: 'Eliminadazo'})
        }else{
            console.log(err);
        }
    })

});

module.exports = router;