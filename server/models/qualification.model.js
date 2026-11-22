import mongoose from 'mongoose'

const QualificationSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: 'Title is required' },
  school: { type: String, trim: true },
  years: { type: String, trim: true },
  description: { type: String, trim: true }
})

export default mongoose.model('Qualification', QualificationSchema)