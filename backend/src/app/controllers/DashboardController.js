const Spot = require('../models/Spot')

class DashboardController {
  async show (req, res) {
    const { id } = req.headers

    const spots = await Spot.find({ user: id })

    return res.status(200).json(spots)
  }
}

module.exports = new DashboardController()
