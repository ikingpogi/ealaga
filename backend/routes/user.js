const express = require('express');
const router = express.Router();

const {signup, signin, verify,forgotPassword, resetPassword,profileEdit, profileUpdate,
    profileUpdateSubmit,profileupdateCredential, profileUpdateHealth, acceptAttendees, QRacceptAttendees
    ,read } = require('../controllers/userController');
// const { isAuthenticatedUser } = require('../middlewares/auth');

router.route('/user/new').post(signup);
router.route('/signin').post(signin);
router.route('/verify/:token').get(verify);
router.route('/password/forgot').post(forgotPassword)
router.route('/password/reset/:token').put(resetPassword)
router.route('/user/profile/edit/:id').get(profileEdit)
router.route('/user/profile/update/:id').put(profileUpdate)
router.route('/user/profile/updateSubmit/:id').put(profileUpdateSubmit)
router.route('/user/profile/updateCredential/:id').put(profileupdateCredential)
router.route('/user/profile/updateHealth/:id').put(profileUpdateHealth)


//////========================= Accept attendees
router.route('/user/attendees/:id').put(acceptAttendees)
router.route('/user/qr/attendees/:id').put(QRacceptAttendees)

// ====================user CRUD
router.route('/user/read').get(read);


module.exports = router;