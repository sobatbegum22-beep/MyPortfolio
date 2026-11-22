import Service from '../models/service.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'

const create = async (req, res) => {
  try {
    const service = new Service(req.body)
    await service.save()
    return res.status(200).json({ message: 'Successfully created!', service })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

const list = async (req, res) => {
  try {
    res.json(await Service.find())
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

const serviceByID = async (req, res, next, id) => {
  try {
    const service = await Service.findById(id)
    if (!service) return res.status(400).json({ error: 'Service not found' })
    req.service = service
    next()
  } catch (err) {
    return res.status(400).json({ error: 'Could not retrieve service' })
  }
}

const read = (req, res) => res.json(req.service)

const update = async (req, res) => {
  try {
    const service = extend(req.service, req.body)
    await service.save()
    res.json(service)
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

const remove = async (req, res) => {
  try {
    res.json(await req.service.deleteOne())
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

export default { create, list, serviceByID, read, update, remove }