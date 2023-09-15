import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { SIGNATURE_DROP_ADDRESS } from "../../consts";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { address, amount } = JSON.parse(req.body);

  const sdk = ThirdwebSDK.fromPrivateKey(
    process.env.WALLET_PRIVATE_KEY!,
    "goerli",
    {
      secretKey: process.env.TW_SECRET_KEY,
    }
  );

  const contract = await sdk.getContract(
    SIGNATURE_DROP_ADDRESS,
    "signature-drop"
  );

  const price = amount >= 3 ? 0.2 : 0.25;

  try {
    const signedPayload = await contract.signature.generate({
      to: address,
      price,
      quantity: amount,
    });

    return res.status(200).json({
      signedPayload: signedPayload,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
};

export default handler;
