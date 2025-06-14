// createSigner.js
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.NEYNAR_API_KEY;

async function createSigner() {
  try {
    const response = await axios.post(
      "https://api.neynar.com/v2/farcaster/signer/",
      {},
      {
        headers: {
          "x-api-key": API_KEY
        }
      }
    );

    const { signer_uuid, signer_approval_url } = response.data;
    console.log("✅ Signer UUID:", signer_uuid);
    console.log("🔗 Approve via Warpcast:", signer_approval_url);
  } catch (error) {
    console.error("❌ Error:", error.response?.data || error.message);
  }
}

createSigner();
