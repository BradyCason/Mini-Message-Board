const { Router } = require('express');
const router = Router();
const controller = require('../controllers/Controller')

router.get("/", controller.indexGet)
router.get("/new", controller.newGet)
router.post("/new", controller.newPost)
router.get('/message/:id', controller.messageGet);

module.exports = router;