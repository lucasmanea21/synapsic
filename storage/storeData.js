const FilecoinRPC = require("@glif/filecoin-rpc-client");

// Initialize the Filecoin RPC client
const client = new FilecoinRPC({ endpoint: "https://rpc.ankr.com/filecoin" });

async function storeData(data) {
  try {
    const cid = await client.request("fvm_storeData", [data]);
    console.log(`Data stored successfully. CID: ${cid}`);
  } catch (error) {
    console.error("Error storing data:", error);
  }
}

// Example data to store
const dataToStore = "Hello, Synapsic!";

storeData(dataToStore);
