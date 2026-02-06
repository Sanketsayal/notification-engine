import { prisma } from "../src/db/prisma.ts";

async function main() {
  await prisma.user.createMany({
    data: [
      { name: "user1", email: "user1@test.com" },
      { name: "user2", email: "user2@test.com" },
    ],
  });
}

main();
