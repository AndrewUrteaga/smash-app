const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");

aws.config.update({

    secretAccessKey: "RhuJPaqeOJUI/Cunb0g6+XqRak9BIazfymRkpWCE",
    accessKeyId: "AKIAIGFPT43KRCYXAF7A",
    region: "us-east-1"
});

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