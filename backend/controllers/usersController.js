const Users = require('../models/userModel');
const base = require('./baseController');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllUsers = base.getAll(Users);
exports.getUsers = base.getOne(Users);
