import prisma from "../lib/prisma";

export const fetchUserWithRetry = async (installationId: string) => {
    const RETRIES = 3;
    const RETRY_INTERVAL = 500;
  
    for (let attempt = 0; attempt < RETRIES; attempt++) {
      const user = await prisma.owner.findUnique({
        where: { installationId },
      });
  
      if (user) {
        return user;
      }
  
      await new Promise((resolve) => setTimeout(resolve, RETRY_INTERVAL));
    }
  
    return null;
  };