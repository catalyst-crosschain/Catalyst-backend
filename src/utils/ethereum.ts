import { ethers } from 'ethers';

export const connectEthereumWallet = async () => {
  const provider = new ethers.providers.JsonRpcProvider(process.env.ETHEREUM_RPC_URL);
  const signer = provider.getSigner();
  return signer;
};
