import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

// Use a global type for `prisma` to avoid `any`.
declare global {
  // This ensures `global.prisma` has the correct type in Node.js
  var prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
