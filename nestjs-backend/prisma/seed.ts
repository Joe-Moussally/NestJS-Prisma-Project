// ** Prisma Imports
import { PrismaClient } from '@prisma/client'

// ** Utility Imports
import hashPassword from '../src/utils/hash-password'

// ** Dummy Data
import productsData from './seeding-data'

const prisma = new PrismaClient()

async function main() {
  // ** Create a regular user
  await prisma.user.create({
    data: {
      email: 'user@mail.com',
      hashedPassword: await hashPassword('123456'),
      role: 'user'
    }
  })

  // ** Create an admin user
  await prisma.user.create({
    data: {
      email: 'admin@mail.com',
      hashedPassword: await hashPassword('123456'),
      role: 'admin'
    }
  })

  // ** Create Categories and Products
  async function seedCategories() {
    const categoriesData = [
      'Skin Care',
      'Moisturizers',
      'Masks',
      'Eye Care',
      'Featured',
      'Night Care',
      'Sun Care',
      'Hair Oil',
      'Treatments',
      'Herbs',
      'Limited Quantity',
      'On Sale'
    ]

    // Array to save the created category ids
    const categoryIds = []

    for (const categoryName of categoriesData) {
      const category = await prisma.category.create({
        data: {
          name: categoryName
        }
      })

      // Add the added category id to the array
      categoryIds.push(category.id)
    }

    // Return the final array containing all ids created
    return categoryIds
  }

  // Seed products after creating the categories
  async function seedProducts(categoryIds) {
    // Change the products data to add random categories to item
    const productsDataWithCategories = productsData.map(product => ({
      ...product,
      categories: {
        connect: getRandomCategories(categoryIds)
      }
    }))

    // Create the products after adding the categories
    for (const productData of productsDataWithCategories) {
      await prisma.product.create({
        data: productData
      })
    }
  }

  // Function that will randomly select between 1 to 3 categories for a product
  function getRandomCategories(categoryIds) {
    const randomCategoryIds = shuffle(categoryIds).slice(0, getRandomInt(1, 3))
    return randomCategoryIds.map(id => ({ id }))
  }

  // Function that will shuffle and randomly select a number based on the array length
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const categoryIds = await seedCategories()
  await seedProducts(categoryIds)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
