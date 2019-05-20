const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const config = require("../Server/config/config")



const s3 = new aws.S3();
  
const upload = multer({
    storage: multerS3({
        s3:s3,
        bucket: 'smashbucket123',
        acl: 'public-read',
        metadata: function(req, file, cb) {
            cb(null, {fieldname: file.fieldname});
        },
        key: function (req,file,cb) {
            cb(null, Date.now().toString())
        }
    })
})

module.exports = upload;