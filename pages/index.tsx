import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
} from "@thirdweb-dev/react";
import { useState } from "react";
import { SIGNATURE_DROP_ADDRESS } from "../consts";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [amount, setAmount] = useState(0);
  const address = useAddress();
  const { contract } = useContract(SIGNATURE_DROP_ADDRESS, "signature-drop");

  const mint = async () => {
    if (!contract) {
      return;
    }

    const signedPayloadReq = await fetch("/api/generate-signature", {
      method: "POST",
      body: JSON.stringify({ address, amount }),
    });

    const signedPayload = await signedPayloadReq.json();
    try {
      await contract.signature.mint(signedPayload.signedPayload);
    } catch (err) {
      console.error(err);
    }
  };

  if (!address) {
    return (
      <main className={styles.container}>
        <ConnectWallet />
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <p>Price: 0.25 ETH</p>

      <p>If you mint 3 or more, price per NFT becomes 0.2 ETH!</p>

      <input
        type="number"
        onChange={(e) => setAmount(Number(e.target.value))}
        value={amount}
      />
      <Web3Button contractAddress={SIGNATURE_DROP_ADDRESS} action={mint}>
        Mint NFT{amount > 1 && "s"}
      </Web3Button>
    </main>
  );
}
