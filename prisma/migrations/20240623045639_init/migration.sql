-- CreateTable
CREATE TABLE "Manticora" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "lastSee" TEXT NOT NULL,
    "countlastSee" INTEGER NOT NULL DEFAULT 1,
    "extinct" BOOLEAN NOT NULL DEFAULT false,
    "live" INTEGER NOT NULL DEFAULT 100,

    CONSTRAINT "Manticora_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Manticora_name_key" ON "Manticora"("name");
