import mongoose from 'mongoose'
import config from './config/config.js'
import User from './server/models/user.model.js'

const ADMIN_NAME = 'Admin'
const ADMIN_EMAIL = 'admin@portfolio.com'
const ADMIN_PASSWORD = 'Ilovecomputersilc123'   // change this to your own

const run = async () => {
  await mongoose.connect(config.mongoUri)
  const existing = await User.findOne({ email: ADMIN_EMAIL })
  if (existing) {
    existing.role = 'admin'
    await existing.save()
    console.log('Existing user promoted to admin')
  } else {
    const admin = new User({ name: ADMIN_NAME, email: ADMIN_EMAIL, password: ADMIN_PASSWORD })
    admin.role = 'admin'
    await admin.save()
    console.log('Admin created:', ADMIN_EMAIL)
  }
  await mongoose.disconnect()
}

run().catch((err) => { console.error(err); process.exit(1) })
ADMIN_PASSWORD