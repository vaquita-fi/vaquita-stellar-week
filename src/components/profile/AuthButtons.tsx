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
        contractAddress: 'CDWEFYYHMGEZEFC5TBUDXM3IJJ7K7W5BDGE765UIYQEV4JFWDOLSTOEK',
        contractAbi: [],
        vaquitaContractAddress: 'CAOGXKXCXKOUIBRGMU3ZK3HDFXYKLJQ7XRYSFSQCEZVSR4LEIJKM3W57',
        vaquitaContractAbi: [],
      }]
    });
  }, []);

  if (types.length === 0) {
    return null;
  }

  return (
    <div className="relative top-0 left-0 right-0 w-full">
      <div className="flex justify-end gap-1 w-full bg-primary z-10">
        {/* <PrivyAuthButtons /> */}
        <StellarAuthButtons/>
      </div>
    </div>
  );
};
