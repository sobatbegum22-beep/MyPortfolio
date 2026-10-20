import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Load the .env file from the project root (works even when started from /client)
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '..', '.env') })

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'change_me',
    mongoUri: process.env.MONGODB_URI
}

export default config