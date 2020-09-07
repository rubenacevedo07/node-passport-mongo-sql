const router = require('express').Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const customerController = require('../controllers/customerController');
//router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));
router.get('/', ensureAuthenticated, customerController.list);
router.post('/add', ensureAuthenticated, customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);

module.exports = router;

