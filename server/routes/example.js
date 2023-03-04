const router = require('express').Router();
const controller = require('../controllers').example;

router.get('/', controller.getHandler);
router.post('/', controller.postHandler);

module.exports = router;
