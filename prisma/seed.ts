import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const EMAIL = [
  "jettapath.th@gmail.com",
  "jettapath@techupth.com",
  "a@gmail.com",
  "d@gmail.com",
  "b@gmail.com",
  "c@gmail.com",
];
async function main() {
  for (const email of EMAIL) {
    const checkEmailExist = await prisma.user.findUnique({
      where: { email },
    });
    if (!checkEmailExist) {
      await prisma.user.create({
        data: {
          email,
          role: "DT",
        },
      });
    }
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
