/* Pets router */

const router = require('express').Router();

const { getPets, updatePet, createPet } = require('../controllers/pets');

router.post('/', createPet);
router.get('/', getPets);
router.put('/:id', updatePet);

module.exports = router;