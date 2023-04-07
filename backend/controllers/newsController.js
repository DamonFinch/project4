const News = require('../models/newsModel');
const base = require('./baseController');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllNews = base.getAll(News);
exports.getNews = base.getOne(News);

// Don't update password on this 
exports.updateNews = base.updateOne(News);
exports.deleteNews = base.deleteOne(News);
exports.addNews = base.createOne(News);
