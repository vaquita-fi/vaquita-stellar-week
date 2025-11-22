'use client';

import { ConnectButton, WalletButton } from '@/core-ui/components';
import { isStellarWalletConnected, stellarSession } from '@/networks/stellar';

/**
 * Componente de botones de autenticación para Stellar Wallet Kit
 * Maneja la conexión y desconexión de carteras Stellar
 */
export default function PrivyAuthButtons() {
  const { connect, logout } = stellarSession();
  const isConnected = isStellarWalletConnected();

  const handleConnect = async () => {
    await connect();
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="flex items-center">
      {isConnected ? (
        <WalletButton handleLogout={handleLogout} startContentSrc="/chains/stellar.png" startContentAlt="Stellar" />
      ) : (
        <ConnectButton onPress={handleConnect} startContentSrc="/chains/stellar.png" startContentAlt="Stellar" />
      )}
      {/* TODO: its necessary to add styles to the button to make it look like the other buttons */}
      {/* <Button
        as={Link}
        href="/profile"
        variant="flat"
        onPress={handleProfile}
        className="rounded-lg border border-black border-b-3 text-black"
      >
        <FaRegUser className="h-4 w-4 p-0" />
      </Button> */}
    </div>
  );
}
