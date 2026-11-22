import mongoose from 'mongoose'

const ContactSchema = new mongoose.Schema({
   firstname: {
      type: String,
      trim: true,
      required: 'First name is required'
   },
   lastname: {
      type: String,
      trim: true,
      required: 'Last name is required'
   },
   phone: {
      type: String,
      trim: true
   },
   email: {
      type: String,
      trim: true,
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
      required: 'Email is required'
   },
   message: {
      type: String,
      trim: true
   },
   created: {
      type: Date,
      default: Date.now
   }
})

export default mongoose.model('Contact', ContactSchema)