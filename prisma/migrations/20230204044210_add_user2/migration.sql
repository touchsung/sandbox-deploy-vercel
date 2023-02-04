-- CreateTable
CREATE TABLE "User2" (
    "email" TEXT NOT NULL,

    CONSTRAINT "User2_pkey" PRIMARY KEY ("email")
);

-- CreateIndex
CREATE UNIQUE INDEX "User2_email_key" ON "User2"("email");
