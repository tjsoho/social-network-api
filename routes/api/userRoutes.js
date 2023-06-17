const Router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userControllers');

Router.route('/').post(createUser).get(getAllUsers);
Router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = Router;

