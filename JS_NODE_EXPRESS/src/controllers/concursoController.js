const { connection } = require('../db')
const mysql = require('mysql')

const getConcursos = async function (req, res) {
    connection.query('SELECT `id`, `nombre`, `cantidad`, `lugar`, `hora`, `fecha` FROM `concurso`',
        function (error, results, fields) {

            if (error) throw error;
            res.status(200).json(results)

        }
    );
    
}


const crearConcurso = async function (req, res) {

    const concurso = req.body;
    console.log(concurso)
    let sql = `INSERT INTO concurso( nombre, cantidad, lugar, hora,fecha) VALUES ('${concurso.nombre}',${concurso.cantidad},${concurso.lugar},'${concurso.hora}','${concurso.fecha}')`;
    connection.query(sql,concurso, (error, results, fields)=>{
        if (error)  return res.status(404).json({error: error.message});
        return res.status(201).json(results)
    })

    


}

const editarConcurso = function(req, res){
    const concurso = req.body;
    const id =req.params.id;
    console.log(id)
    const sql = `UPDATE concurso SET nombre='${concurso.nombre}',cantidad=${concurso.cantidad},lugar=${concurso.lugar},hora='${concurso.hora}',fecha='${concurso.fecha}' WHERE id=${id}`
    console.log(sql )
    connection.query(sql, (error, results, fields)=>{
        if (error)  return res.status(404).json({error: error.message});
        return res.status(201).json({results,fields})
    })
}

const borrarConcurso = (req, res)=>{
    const id =req.params.id;
    const sql = `DELETE FROM concurso WHERE id= ${id}`;
    connection.query(sql, (error, results, fields)=>{
        if (error)  return res.status(404).json({error: error.message});
        return res.status(201).json({results,fields})
    })

}


module.exports = {
    getConcursos,
    crearConcurso,
    editarConcurso,
    borrarConcurso
}