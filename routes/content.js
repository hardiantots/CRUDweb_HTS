let router = require('express').Router();
let contentController = require('../controller/contentController');

router.get('/', contentController.index);

router.get('/addpage', (req, res) =>{
    res.render('content/add_page')
});

router.post('/store', contentController.store);

router.get('/editpage/(:id)', contentController.edit);
router.post('/update/(:id)', contentController.update);

router.get('/delete/(:id)', contentController.delete);

module.exports = router;