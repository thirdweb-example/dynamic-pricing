import {
  ConnectWallet,
  useAddress,
  useSignatureDrop,
} from '@thirdweb-dev/react';
import { useState } from 'react';

export default function Home() {
  const [amount, setAmount] = useState(0);
  const address = useAddress();
  const signatureDrop = useSignatureDrop(
    '0xEf582716Cb702948bb8cE259A37e9a1b21Adfd31',
  );

  const mint = async () => {
    const signedPayloadReq = await fetch('/api/generate-signature', {
      method: 'POST',
      body: JSON.stringify({ address, amount }),
    });

    const signedPayload = await signedPayloadReq.json();

    try {
      await signatureDrop?.signature.mint(
        signedPayload.signedPayload,
      );
    } catch (err) {
      console.error(err);
    }
  };

  if (!address) {
    return <ConnectWallet />;
  }

  return (
    <>
      <p>Price: 0.25 ETH</p>

      <p>If you mint 3 or more, price per NFT becomes 0.2 ETH!</p>

      <input
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <button onClick={mint}>Mint NFT{amount > 1 && "s"}</button>
    </>
  );
}
