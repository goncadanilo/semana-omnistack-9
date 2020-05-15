const Booking = require('../models/Booking')
const User = require('../models/User')
const Spot = require('../models/Spot')

class BookingController {
  async store (req, res) {
    const { id } = req.headers
    const { spotId } = req.params
    const { date } = req.body

    const user = await User.find({ id })
    const spot = await Spot.find({ spotId })

    if (!user) {
      return res.status(400).json({ error: 'User does not exists' })
    }

    if (!spot) {
      return res.status(400).json({ error: 'User does not exists' })
    }

    const booking = await Booking.create({
      user: id,
      spot: spotId,
      date
    })

    await booking
      .populate('spot')
      .populate('user')
      .execPopulate()

    const ownerSocket = req.connectedUsers[booking.spot.user]

    if (ownerSocket) {
      req.io.to(ownerSocket).emit('booking_request', booking)
    }

    return res.status(201).json(booking)
  }
}

module.exports = new BookingController()
