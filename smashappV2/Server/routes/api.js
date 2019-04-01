let express = require('express');
let router = express.Router();
// const User = require('../users/usersModel');
const users = require("../users/usersController");
const upload = require("../photo-upload")
const singleUpload = upload.single('image')

router.use('/users', require('../users/usersRoute'));


router.post('/image-upload/:id', function(req, res){
    singleUpload(req, res, function(err){
        // 1. create a unique file name file_id 
        // 2. Save to S3 
        // 3. Save image ur to mongo for User with 'id'
        // 4. return url image 

        if (err){
            return res.status(422).send({errors: 'Image Upload Error', detail: err.message})
        } 
        return res.json({'imageUrl': req.file.location});
    });
});
router.get('/photos', (req,res) =>{
    res.send("photos will be sent here");
});



module.exports = router;