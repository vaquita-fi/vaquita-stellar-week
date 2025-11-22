'use client';

import { ConnectButton, WalletButton } from '@/core-ui/components';
import { useNetworkConfigStore } from '@/core-ui/stores';
import { isStellarNetwork, stellarSession } from '@/networks/stellar';

export default function StellarAuthButtons() {
  const { connect, logout } = stellarSession();
  // const walletAddress = useNetworkConfigStore((store) => store.walletAddress);
  // console.log({walletAddress});
  const walletAddress = useNetworkConfigStore().walletAddress;
  console.log({walletAddress})
  const network = useNetworkConfigStore((store) => store.network);
  console.log({network});
  // console.log('>>Stellar<<< StellarAuthButtons', {network});
  
  const isStellarNet = network ? isStellarNetwork(network.name) : false;
  console.log({isStellarNet});
  const isConnected = !!walletAddress && isStellarNet;
  console.log({isConnected});

  const handleConnect = async () => {
    try {
      await connect();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="flex items-center gap-4">
      {isConnected ? (
        <WalletButton handleLogout={handleLogout} startContentSrc="/chains/stellar.png" startContentAlt="Stellar" />
      ) : (
        <ConnectButton onPress={handleConnect} startContentSrc="/chains/stellar.png" startContentAlt="Stellar" />
      )}
    </div>
  );
}
