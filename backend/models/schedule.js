const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    },
    date_schedule: {
        type: Date
    },
    category: {
        type: String,
        enum: {
            values: [
                'Recreational Activity',
                'Dialysis',
                'Multipurpose Hall',
            ],
            message: 'Please select correct category for schedule'
        }
    }, 
    time: {
        type: String,
        enum: {
            values: [
                'am',
                'pm',
                'whole_day'
            ],
            message: 'Please select correct category for schedule'
        }
    },
    status: {
        type: String,
        enum: {
            values: [
                'attended',
                'not attended',
            ],
            message: 'Please select correct category for schedule'
        }
    },
    qr_code: {
        public_id: {
            type: String,
           
        },
        url: {
            type: String,
         
        }
    },
    review: {
        rate: {
            type: Number,
           
        },
        comment: {
            type: String,
         
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('Schedule', scheduleSchema);