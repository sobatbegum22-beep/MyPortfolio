import Contact from '../models/contact.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'

// POST /api/contacts : add a new contact
const create = async (req, res) => {
  try {
    const contact = new Contact(req.body)
    await contact.save()
    return res.status(200).json({ message: 'Successfully created!', contact })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// GET /api/contacts : get all contacts
const list = async (req, res) => {
  try {
    const contacts = await Contact.find()
    res.json(contacts)
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// Runs whenever a route has :contactId. Loads the contact into req.contact
const contactByID = async (req, res, next, id) => {
  try {
    const contact = await Contact.findById(id)
    if (!contact) return res.status(400).json({ error: 'Contact not found' })
    req.contact = contact
    next()
  } catch (err) {
    return res.status(400).json({ error: 'Could not retrieve contact' })
  }
}

// GET /api/contacts/:contactId : get one contact
const read = (req, res) => {
  return res.json(req.contact)
}

// PUT /api/contacts/:contactId : update one contact
const update = async (req, res) => {
  try {
    let contact = req.contact
    contact = extend(contact, req.body)
    await contact.save()
    res.json(contact)
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// DELETE /api/contacts/:contactId : remove one contact
const remove = async (req, res) => {
  try {
    const deletedContact = await req.contact.deleteOne()
    res.json(deletedContact)
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// DELETE /api/contacts : remove ALL contacts
const removeAll = async (req, res) => {
  try {
    const result = await Contact.deleteMany({})
    res.json({ message: `${result.deletedCount} contact(s) deleted` })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

export default { create, contactByID, read, list, remove, removeAll, update }