// ** Prisma Imports
import { PrismaClient } from '@prisma/client'

// ** Utility Imports
import hashPassword from '../src/utils/hash-password'

const prisma = new PrismaClient()

async function main() {
  // Create a regular user
  await prisma.user.create({
    data: {
      email: 'user@main.com',
      hashedPassword: await hashPassword('123456'),
      role: 'user'
    }
  })

  // Create an admin user
  await prisma.user.create({
    data: {
      email: 'admin@mail.com',
      hashedPassword: await hashPassword('123456'),
      role: 'admin'
    }
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
