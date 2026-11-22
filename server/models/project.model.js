import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: 'Title is required' },
  imageUrl: { type: String, trim: true },
  description: { type: String, trim: true },
  role: { type: String, trim: true },
  outcome: { type: String, trim: true }
})

export default mongoose.model('Project', ProjectSchema)