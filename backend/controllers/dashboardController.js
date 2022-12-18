const Health = require('../models/health')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const User = require('../models/user')
const Schedule = require('../models/schedule')
const moment = require('moment')
const Applicant = require('../models/applicant')

exports.getTotal = async (req, res) => {


	const nowss = moment(new Date()).format('YYYY-MM-DD').toLocaleString('en-US', { timeZone: 'Asia/Manila' })

	var todate = new Date(nowss).toISOString() 


	const allAttendees = await Schedule.find({'date_schedule' : todate}).populate('user_id');
    const allReviews = await Schedule.find( { review : { $exists : true } } );

    const allApplicant = await Applicant.find();
    const alluser = await User.find();

    const totalAttendees = allAttendees.length
    const totalApplicant = allApplicant.length
    const totalUser = alluser.length
    const totalReviews = allReviews.length

    console.log(totalReviews)
	return res.status(200).json({
		success: true,
		totalAttendees,
        totalApplicant,
        totalUser,
        totalReviews,
        allAttendees
	  })


}