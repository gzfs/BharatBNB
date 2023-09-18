import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs"; 

const f = createUploadthing();
 
const handleAuth = () => {
    const {userId} = auth();
    if (!userId) throw new Error("Unauthorized");
    return { userId };
  };

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "8MB",maxFileCount:5 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;