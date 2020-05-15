const routes = require('express').Router()
const multer = require('multer')

const uploadConfig = require('./config/upload')

const upload = multer({ storage: uploadConfig })

const SessionController = require('./app/controllers/SessionController')
const SpotController = require('./app/controllers/SpotController')
const DashboardController = require('./app/controllers/DashboardController')
const BookingController = require('./app/controllers/BookingController')
const ApprovalController = require('./app/controllers/ApprovalController')
const RejectionController = require('./app/controllers/RejectionController')

routes.post('/sessions', SessionController.store)

routes.get('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)

routes.get('/dashboard', DashboardController.show)

routes.post('/spots/:spotId/bookings', BookingController.store)

routes.post('/bookings/:bookingId/approvals', ApprovalController.store)
routes.post('/bookings/:bookingId/rejections', RejectionController.store)

module.exports = routes
