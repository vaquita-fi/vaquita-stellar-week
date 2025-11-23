'use client';

import { useNetworks } from '@/core-ui/hooks';
import PrivyAuthButtons from './PrivyButtons';
import StellarAuthButtons from './StellarAuthButtons';
import { useNetworkConfigStore } from '@/core-ui/stores';
import { useEffect } from 'react';

export const AuthButtons = () => {
  const {
    data: { types },
  } = useNetworks();

  useEffect(() => {
    const { setNetwork } = useNetworkConfigStore.getState();
    setNetwork({
      name: 'Stellar Testnet',
      type: 'Stellar',
      chainId: 0,
      tokens: [{
        isGas: false,
        isNative: false,
        isSupported: true,
        symbol: 'USDC',
        name: 'USD Coin',
        decimals: 7,
        lockPeriod: [604800000],
        contractAddress: 'CAQCFVLOBK5GIULPNZRGATJJMIZL5BSP7X5YJVMGCPTUEPFM4AVSRCJU',
        contractAbi: [],
        vaquitaContractAddress: 'CBINX73LFBNAICQCZRC53VLTAGA3TU2G36QVBKYMMIDSZYP2K7NOT56V',
        vaquitaContractAbi: [],
      }]
    });
  }, []);

  if (types.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 right-0">
      <div className="flex justify-end gap-1 w-full">
        {/* <PrivyAuthButtons /> */}
        <StellarAuthButtons/>
      </div>
    </div>
  );
};
