let express = require('express')
let router = express.Router()
router.get('/user', function(req,res,next) {
    res.send('这是首页模块哦')
})
module.exports = router