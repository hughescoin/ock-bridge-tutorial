'use client';
import { LordsChain } from '../chain';
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from '@coinbase/onchainkit/identity';
import {
  Appchain,
  BridgeableToken,
  AppchainBridge,
} from '@coinbase/onchainkit/appchain';
import { base } from 'viem/chains';
//import ArrowSvg from './svg/ArrowSvg';
// import ImageSvg from './svg/Image';
// import OnchainkitSvg from './svg/OnchainKit';

export default function Bridge() {
  const appchain: Appchain = {
    chain: LordsChain,
    icon: (
      <img
        src='https://img.cryptorank.io/coins/blocklords1670492311588.png'
        alt='LRDS'
      />
    ),
  };

  // Define bridgeable tokens (overrides default which is ETH)
  const bridgeableTokens: BridgeableToken[] = [
    {
      address: '0xB676f87A6E701f0DE8De5Ab91B56b66109766DB1',
      remoteToken: '0x4200000000000000000000000000000000000006',
      name: 'Blocklords',
      symbol: 'LRDS',
      decimals: 18,
      chainId: LordsChain.id,
      image: 'https://img.cryptorank.io/coins/blocklords1670492311588.png',
      isCustomGasToken: true, // This field is required for chains with custom gas tokens
    },
  ];

  return (
    <div className='flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black'>
      <header className='pt-4 pr-4'>
        <div className='flex justify-end'>
          <div className='wallet-container'>
            <Wallet>
              <ConnectWallet>
                <Avatar className='h-6 w-6' />
                <Name />
              </ConnectWallet>
              <WalletDropdown>
                <Identity className='px-4 pt-3 pb-2' hasCopyAddressOnClick>
                  <Avatar />
                  <Name />
                  <Address />
                  <EthBalance />
                </Identity>
                <WalletDropdownLink
                  icon='wallet'
                  href='https://keys.coinbase.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Wallet
                </WalletDropdownLink>
                <WalletDropdownDisconnect />
              </WalletDropdown>
            </Wallet>
          </div>
        </div>
      </header>

      <main className='flex-grow flex items-center justify-center'>
        <div className='max-w-xl w-full p-4'>
          <AppchainBridge
            chain={base}
            appchain={appchain}
            bridgeableTokens={bridgeableTokens}
          />
        </div>
      </main>
    </div>
  );
}
