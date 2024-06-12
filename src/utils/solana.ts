import { Connection, PublicKey } from '@solana/web3.js';

export const connectSolanaWallet = async () => {
  const connection = new Connection(process.env.SOLANA_RPC_URL!);
  const publicKey = new PublicKey('your-solana-wallet-public-key');
  return { connection, publicKey };
};
