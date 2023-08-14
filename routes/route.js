const express = require('express');
const router = express();
const controller = require('../controllers/controller');

router.post('/create', controller.addUser);

router.get('/view', controller.fetchUser);

router.get('/list', controller.fetchUsers);

router.post('/update', controller.updateUser);

router.delete('/delete', controller.deleteUser);

module.exports = router;