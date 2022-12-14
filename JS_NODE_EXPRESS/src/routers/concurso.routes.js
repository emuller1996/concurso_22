const { Router } = require("express");
const {getConcursos, crearConcurso, editarConcurso, borrarConcurso} = require("../controllers/concursoController")

const router = Router();


router.get('/', getConcursos )
router.post('/', crearConcurso )
router.put('/:id', editarConcurso )
router.delete('/:id', borrarConcurso )



module.exports = router;
