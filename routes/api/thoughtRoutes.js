const Router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
} = require('../../controllers/thoughtController');

Router.route('/').get(getAllThoughts).post(createThought);
Router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
Router.route('/:thoughtId/reactions').post(addReaction);

module.exports = Router;


