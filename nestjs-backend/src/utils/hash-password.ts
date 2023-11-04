import * as bcrypt from 'bcrypt'

async function hashPassword(password: string) {
  try {
    // Generate salt
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, salt)

    return hashedPassword
  } catch (error) {
    // Throw error in case of hashing failure
    throw new Error('Password hashing failed')
  }
}

export default hashPassword
