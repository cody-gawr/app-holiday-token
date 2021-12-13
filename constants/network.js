export const NETWORK_ID = {
  ethereum: 1,
  ropsten: 3,
  rinkeby: 4,
  goerli: 5,
  kovan: 42,
  bsc: 56,
  xdai: 100,
  polygon: 137
};

export const NETWORK_DETAILS = {
  ethereum: {
      chainId: '0x1',
  },
  bsc: {
      chainId: '0x38',
      chainName: 'Binance Smart Chain',
      nativeCurrency: {
          name: 'Binance Coin',
          symbol: 'BNB',
          decimals: 18
      },
      rpcUrls: ['https://bsc-dataseed1.ninicoin.io'],
      blockExplorerUrls: ['https://bscscan.com/']
  },
  polygon: {
      chainId: '0x89',
      chainName: 'Polygon',
      nativeCurrency: {
          name: 'Polygon',
          symbol: 'MATIC',
          decimals: 18
      },
      rpcUrls: ['https://polygon-rpc.com'],
      blockExplorerUrls: ['https://polygonscan.com/']
  }
};
