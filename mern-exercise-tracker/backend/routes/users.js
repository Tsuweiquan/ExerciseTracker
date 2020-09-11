const router = require('express').Router();
let User = require('../models/user.model');     // require the db schema model

//first endpoint that handles incoming http GET request on the localhost/users/
router.route('/').get((req, res) => {
    User.find()                                                 // this is a mongoose method that get a list of all the Users in the db 
        .then(users => res.json(users))                         // return in JSON format         
        .catch(err => res.status(400).json('Error: ' + err));   // return an error in JSON format too
});

//first endpoint that handles incoming http POST request on the localhost/users/add
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});           // create new instance of user

    newUser.save()                                              // mongoose method that save into db
        .then(() => res.json('User added!'))                    // return in Json format
        .catch(err => res.status(400).json('Error: ' + err));   // return in json format
});

module.exports = router;