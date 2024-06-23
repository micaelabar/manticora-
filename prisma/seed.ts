import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const manticora = await prisma.manticora.upsert({
        where: { name: 'Manticora' },
        update: {},
        create: {
            name: 'Luis',
            description: 'Mythological chimeric creature with various forms according to sources',
            lastSee: 'San Miguel',
            countlastSee: 12,
            extinct: false,
        },
    });

    const dragon = await prisma.manticora.upsert({
        where: { name: 'Dragon' },
        update: {},
        create: {
            name: 'Marco',
            description: 'human head, the body of a lion, and the tail of a dragon or scorpion, capable of shooting',
            lastSee: 'San Vicente',
            countlastSee: 12,
            extinct: false,
        },
    });

    console.log({ manticora, dragon });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
