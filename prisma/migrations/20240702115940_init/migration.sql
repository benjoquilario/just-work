-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "hashedPassword" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobPost" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "jobTitle" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyLogo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "companySite" TEXT,
    "employeesNumber" TEXT,
    "location" TEXT,
    "experience" TEXT NOT NULL,
    "sendEmail" TEXT,
    "minimumSalary" TEXT,
    "maximumSalary" TEXT,
    "qualification" TEXT,
    "jobType" TEXT NOT NULL,
    "schedule" TEXT,
    "language" TEXT[],
    "howToApply" TEXT,

    CONSTRAINT "JobPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "jobTitle" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyLogo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "companySite" TEXT,
    "employeesNumber" TEXT,
    "location" TEXT,
    "experience" TEXT NOT NULL,
    "sendEmail" TEXT,
    "minimumSalary" TEXT,
    "maximumSalary" TEXT,
    "qualification" TEXT,
    "jobType" TEXT NOT NULL,
    "schedule" TEXT,
    "language" TEXT[],
    "howToApply" TEXT,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "JobPost_sendEmail_key" ON "JobPost"("sendEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Review_sendEmail_key" ON "Review"("sendEmail");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
