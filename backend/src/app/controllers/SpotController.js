const Spot = require('../models/Spot')
const User = require('../models/User')

class SpotController {
  async index (req, res) {
    const { tech } = req.query

    const spots = await Spot.find({ techs: tech })

    return res.status(200).json(spots)
  }

  async store (req, res) {
    const { filename } = req.file
    const { company, price, techs } = req.body
    const { id } = req.headers

    const user = await User.findById(id)

    if (!user) {
      return res.status(400).json({ error: 'User does not exists' })
    }

    const spot = await Spot.create({
      thumbnail: filename,
      company,
      price,
      techs: techs.split(',').map(tech => tech.trim()),
      user: id
    })

    return res.status(201).json(spot)
  }
}

module.exports = new SpotController()
