const express = require("express");
const bodyParser = require("body-parser");
const FilecoinRPC = require("@glif/filecoin-rpc-client");

const app = express();
const port = 8080;
const client = new FilecoinRPC({ endpoint: "https://rpc.ankr.com/filecoin" });

async function storeData(data) {
  try {
    const cid = await client.request("fvm_storeData", [data]);
    console.log(`Data stored successfully. CID: ${cid}`);
  } catch (error) {
    console.error("Error storing data:", error);
  }
}

app.use(bodyParser.json());

async function storeDataOnFilecoin(data) {
  return `bafy...${new Date().getTime()}`;
}

async function retrieveDataFromFilecoin(cid) {
  return `Data for CID: ${cid}`;
}

app.post("/store", async (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res.status(400).send({ error: "Data is required" });
  }

  try {
    const cid = await storeDataOnFilecoin(data);
    res.send({ cid });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get("/retrieve/:cid", async (req, res) => {
  const { cid } = req.params;
  try {
    const data = await retrieveDataFromFilecoin(cid);
    res.send({ data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Filecoin server running at http://localhost:${port}`);
});
