import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function prismaClient<QueryResponse>(
  query: (prisma: PrismaClient) => Promise<QueryResponse>
) {
  try {
    const queryResponse = await query(prisma);
    await prisma.$disconnect();
    return queryResponse;
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
}
