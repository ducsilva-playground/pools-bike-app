export const KEY_CONTEXT = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  LANGUAGE: 'language',
  THEME_MODE: 'themeMode',
  USER: 'user',
  REMEMBER_ME: 'rememberMe',
  PASSCODE: 'passcode',
};

export const projectId = 'e5c64d489eaddac111c21abb42d62663';

export const providerMetadata = {
  name: 'Pools Wallet',
  description: '',
  url: 'https://walletconnect.com/',
  icons: [
    'https://res.cloudinary.com/dxs1zdei2/image/upload/v1697164254/Logo_xkptg5.png',
  ],
  redirect: {
    native: 'poolswallet://deeplink.poolsmobility.com/',
    universal: '',
  },
};

export const sessionParams = {
  optionalNamespaces: {
    eip155: {
      methods: [
        'eth_sendTransaction',
        'personal_sign',
        'wallet_addEthereumChain',
        'wallet_switchEthereumChain',
        'wallet_requestPermissions',
        'eth_requestAccounts',
        'eth_accounts',
        'eth_chainId',
        'eth_getBalance', // <-- Add this line
      ],
      chains: [
        'eip155:137', //polygon
        'eip155:56', //bsc
        'eip155:6868',
        'eip155:12345',
      ],
      events: ['chainChanged', 'accountsChanged', 'connect', 'disconnect'],
      rpcMap: {},
    },
  },
};

export const pools = {
  12345: {
    contract: '0xa5978633a28c38D4767E5BfF45F2273C9F024A67',
  },
  6868: {
    // contract: '0x9f02690371aD2211E58DcaDB66510674c22B9371',
  },
};

export const RPC = {
  97: 'https://bsc-testnet.nodereal.io/v1/f47800dda18b454bbb5e128838004618',
  56: 'https://bsc-dataseed.binance.org/',
  53: 'https://testnet-rpc.coinex.net/',
  1945: 'https://rpc-testnet.onuschain.io/',
  1975: 'https://rpc.onuschain.io/',
  1: 'https://rpc.ankr.com/eth',
  5: 'https://goerli.infura.io/v3/f27722325ca64f8e87dd52c245cc69e8',
  10435: 'https://testnet-rpc.metaviralscan.com',
  30393: 'https://testnet-rpc-dataseed1.pulsenet.io',
};
