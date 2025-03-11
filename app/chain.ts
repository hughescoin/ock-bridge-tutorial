import 'dotenv/config';
import { defineChain } from 'viem';

export const LordsChain = defineChain({
  id: 845320008,
  name: 'Blocklords',
  nativeCurrency: {
    name: 'Blocklords',
    symbol: 'LRDS',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://blocklords-sepolia-rpc.l3.base.org'],
    },
  },
});
