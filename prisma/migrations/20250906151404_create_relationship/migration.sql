/*
  Warnings:

  - Added the required column `book_id` to the `readings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `readings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."readings" ADD COLUMN     "book_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."readings" ADD CONSTRAINT "readings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."readings" ADD CONSTRAINT "readings_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "public"."books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
