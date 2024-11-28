import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

// Declare global type for Node.js to avoid conflicts
declare global {
  // This ensures `globalThis.prisma` has the correct type
  var prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV === 'production') {
  // In production, always create a new PrismaClient instance
  prisma = new PrismaClient();
} else {
  // In development, reuse an existing PrismaClient instance if available
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }
  prisma = globalThis.prisma;
}

export default prisma;
