const DayCharts = require('../models/ChartsData/dayChartsModel');
const { formatDate } = require('../utils/helper')

exports.getChartData = async (req, res, next) => {
    try {
        const { type } = req.params;
        let data;
        if(type === 'day') data = await DayCharts.find().sort({date: 1});
        res.status(200).json({
            status: 'success',
            data: data
        });
    } catch (error) {
        next(error);
    }
};

exports.setNewDayCron = async () => {
    try {
        const date = new Date();
        const cDate = formatDate(date)
        console.log(cDate);
        const data = await DayCharts.create({
            date: cDate
        });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}