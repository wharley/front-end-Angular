'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/setor');

router.get('/listSetor', controller.read);
router.post('/saveSetor', controller.insert);
router.post('/updateSetor', controller.update);
router.post('/deleteSetor', controller.delete);
//acrescentado
router.post('/byIdSetor', controller.getById);

module.exports = router;