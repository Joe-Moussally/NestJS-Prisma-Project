import * as bcrypt from 'bcrypt'

async function comparePasswords(args: { password: string; hashedPassword: string }) {
  try {
    return await bcrypt.compare(args.password, args.hashedPassword)
  } catch (error) {
    throw new Error('Comparison failed')
  }
}

export default comparePasswords
