const Sales = require('../models/salesModel');
const dayCharts = require('../models/ChartsData/dayChartsModel');

exports.add = async (to, quantity, amount, time) => {
    try {
        const sale = await Sales.create({
            to, quantity, amount, time
        });
        console.log("Successfully saved sales info", sale);

        const daychart = await dayCharts.findOne().sort({date: -1});
        daychart.quantity += quantity;
        daychart.amount += amount;
        daychart.save();
    } catch (error) {
        next(error);
    }
};

// exports.addOne = async (req, res, next) => {
//     try {
//         // const sale = await Sales.create(req.body);
//         const daychart = await dayCharts.findOne().sort({date: -1});
        
//         res.status(200).json({
//             status: 'success',
//             data: daychart
//         });
//     } catch (error) {
//         next(error);
//     }
// };
