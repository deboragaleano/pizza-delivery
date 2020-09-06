const express = require('express'); 
const router = express.Router(); 
const Item = require('../../models/Item');  // Item model

// @route  GET api/items 
// @desc   Get ALL Items - Root Route
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
});


// @route  POST api/items 
// @desc   Create A Item
// @access Public for now (will be private once we add Auth)
router.post('/', (req, res) => {
    //first we create a new object with the Item model 
    const newItem = new Item({
        name: req.body.name
    })

    //we're saving this object into the DB 
    // and the .then will then return this item/give us back the item
    // so res.json(item) will spit out that item in json format 
    newItem.save().then(item => res.json(item)); 

});

// @route  DELETE api/items/:id
// @desc   DELETE A Item
// @access Public for now (will be private once we add Auth)
router.delete('/:id', (req, res) => {
    const itemToDelete = req.params.id
    
    Item.findById(itemToDelete)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
})



module.exports = router; 