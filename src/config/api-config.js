const ApiConfig = {
    BASE_URL: 'https://mteapi.zdemo.asia',
    DEMO_TOKEN: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mywid2FsbGV0IjoiMHhmNGU3M2I5ZGNjM2ZjYjJjOWM1YjFhNDhmYjczMjMwOTg2ZGJiNDZiIn0.adB58UUhIzdjRwoEc3EUbfWaSKHkN0HT6jiPuxIKtto',
    DEMO_WALLET:'0xF4E73B9dcC3fcb2c9C5B1a48FB73230986DbB46B',
    LOGIN: '/api/v1/login',
    AUTH: '/api/v1/auth',

    //market
    LIST_NFT: '/api/v1/market/nft',
    // DETAIL_NFFT: '/api/v1/market/nft/',
    // SELL_NFT:'/api/v1/market/nft/<id>/sell',
    // BUY_NFT:'api/v1/market/nft/<id>/buy',
    // CANCEL_BUY_NFT: 'api/v1/market/nft/<id>/cancel',

    //profile && nft
    USER_INFO: '/api/v1/user',
    USER_TRANSACTION: '/api/v1/user/transaction',
    USER_LIST_NFT: '/api/v1/user/nft',
    // USER_DETAIL_NFT: USER_LIST_NFT+ '/id',
    // USER_LEVEL_UP_NFT: USER_DETAIL_NFT + 'level-up',
    // USER_ATTR_UP: USER_DETAIL_NFT + 'attr-up',
    // USER_REPAIR: USER_DETAIL_NFT + 'repair',
    // USER_RUN_START: USER_DETAIL_NFT + 'start',
    // USER_RUN_STOP: USER_DETAIL_NFT + 'stop',
    USER_RUN_HISTORY: '/api/v1/user/runs',

    //mint
    MINT:'/api/v1/mint',
    MINT_CHOOSE: '/api/v1/mint/choose',
    MINT_FEE: '/api/v1/mint/fee',

    //deposit
    DEPOSIT_NFT: '/api/v1/onchain/deposit-nft',
    DEPOSIT_TOKEN: '/api/v1/onchain/deposit-token',

    //witdraw
    WITHDRAW_TOKEN: '/api/v1/withdraw/token',
    WITHDRAW_NFT: '/api/v1/withdraw/nft',

    //config
    CONFIG: '/api/v1/config',
  };
  
  export default ApiConfig;
  