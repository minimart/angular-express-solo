var router = require('express').Router();
var path = require('path');

//In here I am sending my index file to the page when it is called at the root
router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/index.html'));
})

// NEVER FORGET TO EXPORT.
module.exports=router;
