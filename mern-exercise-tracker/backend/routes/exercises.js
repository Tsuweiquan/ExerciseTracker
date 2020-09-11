const router = require('express').Router();
let Exercise = require('../models/exercise.model');     // require the db schema model

// endpoint that handles incoming http GET request on the localhost/users/
router.route('/').get((req, res) => {
    Exercise.find()                                             // this is a mongoose method that get a list of all the Users in the db 
        .then(exercises => res.json(exercises))                 // return in JSON format         
        .catch(err => res.status(400).json('Error: ' + err));   // return an error in JSON format too
});

// endpoint that handles incoming http POST request on the localhost/users/add
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({username, description, duration, date});           // create new instance of user

    newExercise.save()                                              // mongoose method that save into db
        .then(() => res.json('Exercise added!'))                    // return in Json format
        .catch(err => res.status(400).json('Error: ' + err));   // return in json format
});

// endpoint to get the ID of an user in the db
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then (exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

// endpoint to delete the id of the user in the db
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
      .then(() => res.json('Exercise deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
Exercise.findById(req.params.id)
    .then(exercise => {
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);

    exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;