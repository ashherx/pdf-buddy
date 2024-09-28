// import { Pinecone, PineconeClient } from "@pinecone-database/pinecone";

// let pinecone = new PineconeClient();

// export const initialize = async () => {
//   // pinecone = new Pinecone({
//   //   apiKey: process.env.PDB_KEY,
//   // });
//   await pinecone.init({
//     apiKey: process.env.PDB_KEY,
//   });
//   console.log("pinecone initialized");
// };

// export default pinecone;

import { Pinecone, PineconeClient } from "@pinecone-database/pinecone";

// let pinecone = new PineconeClient();

let pinecone;

export const initialize = async () => {
  try {
    // await pinecone.init({
    //   apiKey: '881b3255-1f4d-434a-ae70-95ccae01193b',  // Use your API key from the environment variables
    // });


    pinecone = new Pinecone({
      apiKey: "881b3255-1f4d-434a-ae70-95ccae01193b",
    });

    console.log("Pinecone initialized");
  } catch (error) {
    console.error("Error initializing Pinecone:", error);
    throw new Error("Failed to initialize Pinecone");
  }
};

export default pinecone;
