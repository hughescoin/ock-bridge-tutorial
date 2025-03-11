'use client';

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
import ImageSvg from './svg/Image';
import OnchainkitSvg from './svg/OnchainKit';
import { useRouter } from 'next/navigation';

export default function App() {
  const router = useRouter();

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
        <div className='max-w-4xl w-full p-4'>
          <div className='w-1/3 mx-auto mb-6'>
            <ImageSvg />
          </div>
          <div className='flex justify-center mb-6'>
            <a target='_blank' rel='_template' href='https://onchainkit.xyz'>
              <OnchainkitSvg className='dark:text-white text-black' />
            </a>
          </div>

          <div className='flex flex-col items-center'>
            <div className='max-w-2xl w-full'>
              <div className='flex justify-center mt-4'>
                <button
                  onClick={() => router.push('/bridge')}
                  className='px-6 py-2 rounded-md text-white font-medium'
                  style={{ backgroundColor: '#1F04B0' }}
                >
                  Bridge
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
