import { isStellarNetwork } from './stellar';


export const isNewDepositHandled = (networkName: string) => {
  return isStellarNetwork(networkName);
};
