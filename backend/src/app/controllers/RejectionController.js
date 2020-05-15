const Booking = require('../models/Booking')

class RejectionController {
  async store (req, res) {
    const { bookingId } = req.params

    const booking = await Booking.findById(bookingId).populate('spot')

    booking.approved = false
    booking.save()

    const bookingUserSocket = req.connectedUsers[booking.user]

    if (bookingUserSocket) {
      req.io.to(bookingUserSocket).emit('booking_response', booking)
    }

    return res.status(200).json(booking)
  }
}

module.exports = new RejectionController()
