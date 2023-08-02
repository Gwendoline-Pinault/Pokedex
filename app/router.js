const { Router } = require('express');
const router = Router();

const mainController = require('./controller/mainController');

router.get('/', mainController.pokemonList); 
router.get('/pokemon/:id', mainController.pokemonDetails);

module.exports = router;