import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xDAA364A0bcAF209dbC7389B2D0BE7b9e25EeE26A",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "RunnersDAO Membership Ticket",
        description: "This NFT will give you access to RunnersDAO!",
        image: readFileSync("scripts/assets/RunnersDAO.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()