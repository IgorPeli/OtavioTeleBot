-- CreateTable
CREATE TABLE "Email" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EmailToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_EmailToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Email" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_EmailToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_EmailToUser_AB_unique" ON "_EmailToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_EmailToUser_B_index" ON "_EmailToUser"("B");
