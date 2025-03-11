import { createConfig, createStorage, cookieStorage } from 'wagmi';
import { base } from 'viem/chains';
import { LordsChain } from './chain';
import { http } from 'viem';
import { coinbaseWallet } from 'wagmi/connectors';
export function getConfig() {
  return createConfig({
    chains: [base, LordsChain],
    connectors: [
      coinbaseWallet({
        appName: 'Appchain Bridge Tutorial',
        preference: 'smartWalletOnly',
      }),
    ],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      [base.id]: http(),
      [LordsChain.id]: http(),
    },
  });
}

declare module 'wagmi' {
  interface Register {
    config: ReturnType<typeof getConfig>;
  }
}
