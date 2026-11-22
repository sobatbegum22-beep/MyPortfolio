import mongoose from 'mongoose'

const ServiceSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: 'Title is required' },
  description: { type: String, trim: true }
})

export default mongoose.model('Service', ServiceSchema)