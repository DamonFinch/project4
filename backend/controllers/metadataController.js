const APIFeatures = require('../utils/apiFeatures');
const metadata = require('../models/metadata');

exports.get = async(req, res, next) => {
    try {
        const { tokenId } = req.params;
        console.log('get metadata', tokenId);
        res.status(200).json(metadata[tokenId]);
        
    } catch (error) {
        next(error);
    }

};