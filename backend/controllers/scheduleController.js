const Dateslotlist = require('../models/dateslotlist')
const Slot_recreational_am = require('../models/slot_recreational_am')
const Slot_recreational_pm = require('../models/slot_recreational_pm')
const Slot_hall_am = require('../models/slot_hall_am')
const Slot_hall_pm = require('../models/slot_hall_pm')

const Schedule = require('../models/schedule')
const qr = require('qrcode');
const cloudinary = require('cloudinary')
const moment = require('moment')
const fs = require('fs');
// const recreational_am = require('../data/recreational_am.json');
const path = require('path');

exports.schedule = async (req, res) => {

	const { id } = req.params

	const userRecreational = await Schedule.find({'user_id' : id,'category': "Recreational Activity" });
	const userMultipurpose = await Schedule.find({'user_id' : id,'category': "Multipurpose Hall" });
	
    const slot_recreational_am = await Slot_recreational_am.find();
	const slot_recreational_pm = await Slot_recreational_pm.find();

	const slot_hall_am = await Schedule.find({'time' : 'am','category': "Multipurpose Hall" });
	const slot_hall_pm = await Schedule.find({'time' : 'pm','category': "Multipurpose Hall" });
	const slot_hall_whole = await Schedule.find({'time' : 'whole_day','category': "Multipurpose Hall" });

	var date=new Date();
	var yesterdate=new Date(date.setDate(date.getDate()-1));
	const newSelectedDate = new Date(yesterdate).toLocaleDateString()

	const selectedDate = await Dateslotlist.find({'date' : newSelectedDate});

	const selectedSlotDate = await Dateslotlist.find({'avaliableSlot' : 0});

	if (selectedDate != "") {
		const updatedSlot = await Dateslotlist.findByIdAndUpdate(selectedDate[0]._id, {
			$set: { 'avaliableSlot': 0,'totalSlot': 0}
					}, 
				{
					new: true,
					runValidators: true,
					useFindAndModify: false
				})
    }
	var userRecreationalSched = userRecreational.map(function(dates){return dates.date_schedule});
	var userMultipurposeSched = userMultipurpose.map(function(dates){return dates.date_schedule});

	var userMultipurposeSchedAm = slot_hall_am.map(function(dates){return dates.date_schedule});
	var userMultipurposeSchedPm = slot_hall_pm.map(function(dates){return dates.date_schedule});
	var userMultipurposeSchedWhole = slot_hall_whole.map(function(dates){return dates.date_schedule});

	var disableDate = selectedSlotDate.map(function(dates){return dates.date;});
	// console.log(userSched);
// console.log(disableDate);
	return res.status(200).json({
		success: true,
		slot_recreational_am,
		slot_recreational_pm,
		userMultipurposeSchedAm,
		userMultipurposeSchedPm,
		userMultipurposeSchedWhole,
		disableDate,
		userRecreationalSched,
		userMultipurposeSched
	  })

}

exports.history = async (req, res) => {

	const { id } = req.params

	const user = await Schedule.find({'user_id' : id});

	var date = user.map(function(dates){return dates.date_schedule;});

	const nowss = moment().format('YYYY-MM-DD')

	const filter = user.filter(user => moment(user.date_schedule).format('YYYY-MM-DD') < nowss);

	// console.log(filter)
	return res.status(200).json({
		success: true,
		filter
	  })
}

exports.activity = async (req, res) => {

	const { id } = req.params

	const user = await Schedule.find({'user_id' : id});

	var date = user.map(function(dates){return dates.date_schedule;});

	var now = new Date();

	const nowss = moment().format('YYYY-MM-DD')

	// var todate = new Date(nowss).toISOString() 

	// console.log(nowss);
	
	const filter = user.filter(user => moment(user.date_schedule).format('YYYY-MM-DD') >= nowss);

	console.log(filter)
	// console.log(filter)
	return res.status(200).json({
		success: true,
		filter
	  })
}

exports.viewActivity = async (req, res) => {

	const { id } = req.params

	const schedData = await Schedule.find({'_id' : id});
	var schedDataQr = schedData.map(function(schedDatas){return schedDatas.qr_code});
	// var date = schedDataQr.map(function(schedDataQrss){return schedDataQrss.qr_code;});

	// var now = new Date();

	// const filter = schedDataQr.filter();

	// console.log(filter)
	return res.status(200).json({
		success: true,
		schedData,schedDataQr
	  })
}

exports.addReview = async (req, res) => {

	const { id } = req.params
	const {rate, comment} = req.body;
// console.log(rate,comment);
	const schedulesqr = await Schedule.findByIdAndUpdate(id,{review: {
		rate: rate,
		comment: comment
	}}, 
	{
		new: true,
		runValidators:true,
		useFindandModify:false
	})

	// const schedData = await Schedule.find({'_id' : id});
	// var schedDataQr = schedData.map(function(schedDatas){return schedDatas.qr_code});
	// var date = schedDataQr.map(function(schedDataQrss){return schedDataQrss.qr_code;});

	// var now = new Date();

	// const filter = schedDataQr.filter();

	// console.log(id)
	return res.status(200).json({
		success: true,
	  })
}

exports.cancelActivity = async (req, res) => {

	const { id } = req.params

	const schedData = await Schedule.findById({'_id':id});

	if(schedData.category == "Recreational Activity"){
		if(schedData.time == "am"){
					const date = schedData.date_schedule;
					var yesterdate=new Date(date.setDate(date.getDate()));
					const dateUpdate = yesterdate.toLocaleDateString();
					
					const selectedDate = await Slot_recreational_am.find({'date' : dateUpdate});

					const updateSlot = selectedDate[0].avaliableSlot + 1;

					const updatedSlot = await Slot_recreational_am.findByIdAndUpdate(selectedDate[0]._id, {
						$set: { 'avaliableSlot': updateSlot}
								}, 
							{
								new: true,
								runValidators: true,
								useFindAndModify: false
							})


					// console.log(updateSlot);
					await schedData.remove();

					
					return res.status(200).json({
						success: true,
					})

		}else{
			const date = schedData.date_schedule;
			var yesterdate=new Date(date.setDate(date.getDate()));
			const dateUpdate = yesterdate.toLocaleDateString();
			
			const selectedDate = await Slot_recreational_pm.find({'date' : dateUpdate});

			const updateSlot = selectedDate[0].avaliableSlot + 1;

			const updatedSlot = await Slot_recreational_pm.findByIdAndUpdate(selectedDate[0]._id, {
				$set: { 'avaliableSlot': updateSlot}
						}, 
					{
						new: true,
						runValidators: true,
						useFindAndModify: false
					})


			// console.log(updateSlot);
			await schedData.remove();

			
			return res.status(200).json({
				success: true,
			})
		}
	}else if(schedData.category == "Multipurpose Hall"){

		await schedData.remove();

				
				return res.status(200).json({
					success: true,
				})

		// if(schedData.time == "am"){
		// 	const date = schedData.date_schedule;
		// 	var yesterdate=new Date(date.setDate(date.getDate()));
		// 	const dateUpdate = yesterdate.toLocaleDateString();
			
		// 	const selectedDate = await Slot_hall_am.find({'date' : dateUpdate});

		// 	const updateSlot = selectedDate[0].avaliableSlot + 1;

		// 	const updatedSlot = await Slot_hall_am.findByIdAndUpdate(selectedDate[0]._id, {
		// 		$set: { 'avaliableSlot': updateSlot}
		// 				}, 
		// 			{
		// 				new: true,
		// 				runValidators: true,
		// 				useFindAndModify: false
		// 			})


		// 	// console.log(updateSlot);
		// 	await schedData.remove();

			
		// 	return res.status(200).json({
		// 		success: true,
		// 	})

		// 	}else{
		// 		const date = schedData.date_schedule;
		// 		var yesterdate=new Date(date.setDate(date.getDate()));
		// 		const dateUpdate = yesterdate.toLocaleDateString();
				
		// 		const selectedDate = await Slot_hall_pm.find({'date' : dateUpdate});

		// 		const updateSlot = selectedDate[0].avaliableSlot + 1;

		// 		const updatedSlot = await Slot_hall_pm.findByIdAndUpdate(selectedDate[0]._id, {
		// 			$set: { 'avaliableSlot': updateSlot}
		// 					}, 
		// 				{
		// 					new: true,
		// 					runValidators: true,
		// 					useFindAndModify: false
		// 				})


		// 		// console.log(updateSlot);
		// 		await schedData.remove();

				
		// 		return res.status(200).json({
		// 			success: true,
		// 		})
		// 	}

	}

	
}

exports.add = async (req, res) => {
    
	const {date, user_id, category, status} = req.body;

	if(category == "recreational_am"){
					/////////////////slot
					const selectedDate = await Slot_recreational_am.find({'date' : date});
					const updateSlot = selectedDate[0].avaliableSlot - 1;

					const updatedSlot = await Slot_recreational_am.findByIdAndUpdate(selectedDate[0]._id, {
					'avaliableSlot': updateSlot
								}, 
							{
								new: true,
								runValidators: true,
								useFindAndModify: false
							})
					////////////////////////////////////////////////////


					// const tomorrow = new Date(date)

					// var todates= new Date(tomorrow.setDate(tomorrow.getDate()+1)).toISOString() ;
					const nowss = moment(new Date(date)).format('YYYY-MM-DD')

					var todate = new Date(nowss).toISOString() 

					console.log(nowss);

					const schedule = await Schedule.create({
						user_id: user_id, 
						date_schedule: todate, 
						category: 'Recreational Activity',
						time: 'am',
						status: status
					})

					const latest_data = await Schedule.find({}).sort({_id:-1}).limit(1);
					const latest_data_id = latest_data[0]._id;
					let id_stringdata = JSON.stringify(latest_data_id)

					const qrOption = { 
						margin : 2,
						width : 175
					};

					const bufferImage = await qr.toDataURL(id_stringdata,qrOption);

					const result = await cloudinary.v2.uploader.upload(bufferImage, {
						folder: 'qrcode',
					})

					const schedulesqr = await Schedule.findByIdAndUpdate(latest_data_id,{$push: {qr_code: {
						public_id: result.public_id,
						url: result.secure_url
					}}}, 
					{
						new: true,
						validateBeforeSave: false
					})

					//   console.log(bufferImage);

					return res.status(200).json({
						success: true,
						message:"success"
					})

	}else if(category == "recreational_pm"){
			/////////////////slot
			const selectedDate = await Slot_recreational_pm.find({'date' : date});
			const updateSlot = selectedDate[0].avaliableSlot - 1;

			const updatedSlot = await Slot_recreational_pm.findByIdAndUpdate(selectedDate[0]._id, {
			'avaliableSlot': updateSlot
						}, 
					{
						new: true,
						runValidators: true,
						useFindAndModify: false
					})
			////////////////////////////////////////////////////


			// const tomorrow = new Date(date)

			// var todates= new Date(tomorrow.setDate(tomorrow.getDate()+1)).toISOString() ;
			const nowss = moment(new Date(date)).format('YYYY-MM-DD')

			var todate = new Date(nowss).toISOString() 

			console.log(nowss);

			const schedule = await Schedule.create({
				user_id: user_id, 
				date_schedule: todate, 
				category: 'Recreational Activity',
				time: 'pm',
				status: status
			})

			const latest_data = await Schedule.find({}).sort({_id:-1}).limit(1);
			const latest_data_id = latest_data[0]._id;
			let id_stringdata = JSON.stringify(latest_data_id)

			const qrOption = { 
				margin : 2,
				width : 175
			};

			const bufferImage = await qr.toDataURL(id_stringdata,qrOption);

			const result = await cloudinary.v2.uploader.upload(bufferImage, {
				folder: 'qrcode',
			})

			const schedulesqr = await Schedule.findByIdAndUpdate(latest_data_id,{$push: {qr_code: {
				public_id: result.public_id,
				url: result.secure_url
			}}}, 
			{
				new: true,
				validateBeforeSave: false
			})

			//   console.log(bufferImage);

			return res.status(200).json({
				success: true,
				message:"success"
			})
			}else if(category == "multipurpose_am"){
				/////////////////slot
				// const selectedDate = await Slot_hall_am.find({'date' : date});
				// const updateSlot = selectedDate[0].avaliableSlot - 1;

				// const updatedSlot = await Slot_hall_am.findByIdAndUpdate(selectedDate[0]._id, {
				// 'avaliableSlot': updateSlot
				// 			}, 
				// 		{
				// 			new: true,
				// 			runValidators: true,
				// 			useFindAndModify: false
				// 		})
				////////////////////////////////////////////////////


				// const tomorrow = new Date(date)

				// var todates= new Date(tomorrow.setDate(tomorrow.getDate()+1)).toISOString() ;
				const nowss = moment(new Date(date)).format('YYYY-MM-DD')

				var todate = new Date(nowss).toISOString() 

				console.log(nowss);

				const schedule = await Schedule.create({
					user_id: user_id, 
					date_schedule: todate, 
					category: 'Multipurpose Hall',
					time: 'am',
					status: status
				})

				const latest_data = await Schedule.find({}).sort({_id:-1}).limit(1);
				const latest_data_id = latest_data[0]._id;
				let id_stringdata = JSON.stringify(latest_data_id)

				const qrOption = { 
					margin : 2,
					width : 175
				};

				const bufferImage = await qr.toDataURL(id_stringdata,qrOption);

				const result = await cloudinary.v2.uploader.upload(bufferImage, {
					folder: 'qrcode',
				})

				const schedulesqr = await Schedule.findByIdAndUpdate(latest_data_id,{$push: {qr_code: {
					public_id: result.public_id,
					url: result.secure_url
				}}}, 
				{
					new: true,
					validateBeforeSave: false
				})

				//   console.log(bufferImage);

				return res.status(200).json({
					success: true,
					message:"success"
				})
				}else if(category == "multipurpose_pm"){
					/////////////////slot
					// const selectedDate = await Slot_hall_pm.find({'date' : date});
					// const updateSlot = selectedDate[0].avaliableSlot - 1;

					// const updatedSlot = await Slot_hall_pm.findByIdAndUpdate(selectedDate[0]._id, {
					// 'avaliableSlot': updateSlot
					// 			}, 
					// 		{
					// 			new: true,
					// 			runValidators: true,
					// 			useFindAndModify: false
					// 		})
					////////////////////////////////////////////////////


					// const tomorrow = new Date(date)

					// var todates= new Date(tomorrow.setDate(tomorrow.getDate()+1)).toISOString() ;
					const nowss = moment(new Date(date)).format('YYYY-MM-DD')

					var todate = new Date(nowss).toISOString() 

					console.log(nowss);

					const schedule = await Schedule.create({
						user_id: user_id, 
						date_schedule: todate, 
						category: 'Multipurpose Hall',
						time: 'pm',
						status: status
					})

					const latest_data = await Schedule.find({}).sort({_id:-1}).limit(1);
					const latest_data_id = latest_data[0]._id;
					let id_stringdata = JSON.stringify(latest_data_id)

					const qrOption = { 
						margin : 2,
						width : 175
					};

					const bufferImage = await qr.toDataURL(id_stringdata,qrOption);

					const result = await cloudinary.v2.uploader.upload(bufferImage, {
						folder: 'qrcode',
					})

					const schedulesqr = await Schedule.findByIdAndUpdate(latest_data_id,{$push: {qr_code: {
						public_id: result.public_id,
						url: result.secure_url
					}}}, 
					{
						new: true,
						validateBeforeSave: false
					})

					//   console.log(bufferImage);

					return res.status(200).json({
						success: true,
						message:"success"
					})
				}else if(category == "multipurpose_wholeday"){
					/////////////////slot
					// const selectedDate = await Slot_hall_pm.find({'date' : date});
					// const updateSlot = selectedDate[0].avaliableSlot - 1;
		
					// const updatedSlot = await Slot_hall_pm.findByIdAndUpdate(selectedDate[0]._id, {
					// 'avaliableSlot': updateSlot
					// 			}, 
					// 		{
					// 			new: true,
					// 			runValidators: true,
					// 			useFindAndModify: false
					// 		})
					////////////////////////////////////////////////////
		
		
					// const tomorrow = new Date(date)
		
					// var todates= new Date(tomorrow.setDate(tomorrow.getDate()+1)).toISOString() ;
					const nowss = moment(new Date(date)).format('YYYY-MM-DD')
		
					var todate = new Date(nowss).toISOString() 
		
					console.log(nowss);
		
					const schedule = await Schedule.create({
						user_id: user_id, 
						date_schedule: todate, 
						category: 'Multipurpose Hall',
						time: 'whole_day',
						status: status
					})
		
					const latest_data = await Schedule.find({}).sort({_id:-1}).limit(1);
					const latest_data_id = latest_data[0]._id;
					let id_stringdata = JSON.stringify(latest_data_id)
		
					const qrOption = { 
						margin : 2,
						width : 175
					};
		
					const bufferImage = await qr.toDataURL(id_stringdata,qrOption);
		
					const result = await cloudinary.v2.uploader.upload(bufferImage, {
						folder: 'qrcode',
					})
		
					const schedulesqr = await Schedule.findByIdAndUpdate(latest_data_id,{$push: {qr_code: {
						public_id: result.public_id,
						url: result.secure_url
					}}}, 
					{
						new: true,
						validateBeforeSave: false
					})
		
					//   console.log(bufferImage);
		
					return res.status(200).json({
						success: true,
						message:"success"
					})
			}





	// console.log(date, user_id, category, status);

//////////////new slot


	// const filePathRecreational_am = path.join(__dirname, '../data/recreational_am.json');
	// const dataRecreational_am = JSON.parse(fs.readFileSync(filePathRecreational_am));
		
	// const dataRecreational_amSlot = dataRecreational_am.find((item) => item.date === date);
	// const updatedRecreational_amSlot = dataRecreational_amSlot.avaliableSlot - 1;
	

	// dataRecreational_am.forEach(function(item) {
	// 	if (item.date === date) {
	// 	  item.avaliableSlot = updatedRecreational_amSlot;
	// 	}
	//   });
	// //   const data = JSON.parse(fs.readFileSync(recreational_am));

	// fs.writeFileSync(filePathRecreational_am, JSON.stringify(dataRecreational_am, null, 4));


////////////////////



}


///================================ attendee

exports.attendeesList = async (req, res) => {


	const nowss = moment(new Date()).format('YYYY-MM-DD')

	var todate = new Date(nowss).toISOString() 


	const allAttendees = await Schedule.find({'date_schedule' : todate}).populate('user_id');

	// var date = user.map(function(dates){return dates.date_schedule;});

	// var now = new Date();

	// const filter = user.filter(user => new Date(user.date_schedule) >= now);

	// console.log(allAttendees)

	return res.status(200).json({
		length: allAttendees.length,
		success: true,
		allAttendees
	  })


}
