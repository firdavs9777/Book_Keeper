const express = require('express');
const router = express.Router();

// @route Get api/contacts
//@desc Register all user contacts
//@access Private

router.get('/',(req,res)=>{
    res.send('Get all contacts');
});

// @route Post api/contacts
//@desc Add new contacts
//@access Private

router.post('/',(req,res)=>{
    res.send('Add contact');
});
// @route Put api/contacts:id
//@desc Update contacts
//@access Private

router.put('/:id',(req,res)=>{
    res.send('Update contacts');
});

// @route Delete api/contacts:id
//@desc Delete contacts
//@access Private

router.delete('/:id',(req,res)=>{
    res.send('Delete contacts');
});

module.exports = router;
