const express = require('express');
const router = express.Router();

const queryClass = require('../core/queries');
const queryObj = new queryClass.QueryClass();
const Query = require('../core/queries');



// router.get('/test', product_controller.test);
// router.get('/:id', product_controller.product_details);
// router.post('/create', product_controller.product_create);
// router.put('/:id/update', product_controller.product_update);
// router.delete('/:id/delete', product_controller.product_delete);
router.post('/list',function(req, res){
    const params = {
        name: req.body.name,
    
    }
    queryObj.findAllByParams(params).then((responseObj) => {
        res.send(responseObj);
    });
});


module.exports = router;