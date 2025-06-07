import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Verify database connection
prisma.$connect()
  .then(() => {
    console.log('Successfully connected to PostgreSQL database');
  })
  .catch((err: Error) => {
    console.error('Error connecting to database:', err);
  });

export default prisma;
