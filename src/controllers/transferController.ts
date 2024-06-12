import { Request, Response } from 'express';
import { ethers } from 'ethers';

const transferTokens = async (req: Request, res: Response) => {
  const { amount, tokenAddress, recipientAddress } = req.body;

  const provider = new ethers.providers.JsonRpcProvider(process.env.ETHEREUM_RPC_URL);
  const signer = provider.getSigner();
  const tokenContract = new ethers.Contract(tokenAddress, [
    // ERC20 ABI fragment
    "function transfer(address to, uint256 amount) returns (bool)"
  ], signer);

  try {
    const tx = await tokenContract.transfer(recipientAddress, ethers.utils.parseUnits(amount, 18));
    await tx.wait();

    res.status(200).json({
      message: 'Transfer successful',
      txHash: tx.hash,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Transfer failed',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export { transferTokens };
