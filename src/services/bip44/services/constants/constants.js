const constants = {
    'AIB': 0x80000037,
    'ARK': 0x8000006f,
    'Adcoin': 0x800000a1,
    'Argentum': 0x8000002d,
    'Asiacoin': 0x80000033,
    'AskCoin': 0x800000df,
    'Auroracoin': 0x80000055,
    'BUZZ': 0x800000a9,
    'Bata': 0x80000059,
    'BelaCoin': 0x80000049,
    'BigUp': 0x80000064,
    'Biocoin': 0x8000009a,
    'BitBean': 0x80000058,
    'BitSend': 0x8000005b,
    'BitZeny': 0x8000007b,
    'Bitcoin': 0x80000000,
    'Bitcoin 2x': 0x8000009d,
    'Bitcoin Cash': 0x80000091,
    'Bitcoin Diamond': 0x80000643,
    'Bitcoin Gold': 0x8000009c,
    'Bitcoindark': 0x80000034,
    'Bitcoinplus': 0x80000041,
    'Bitcore': 0x800000a0,
    'Blackcoin': 0x8000000a,
    'Breakout Coin': 0x8000007e,
    'Bridgecoin': 0x800000a2,
    'BritCoin': 0x80000046,
    'Burst': 0x8000001e,
    'Bytom': 0x80000099,
    'Canada eCoin': 0x80000022,
    'Cannacoin': 0x80000013,
    'Cardano': 0x80000717,
    'Chronos': 0x80000060,
    'Clams': 0x80000017,
    'ClearingHouse': 0x8000000f,
    'ClubCoin': 0x8000004f,
    'Compcoin': 0x8000004a,
    'Counterparty': 0x80000009,
    'Crown': 0x80000048,
    'Dash': 0x80000005,
    'Decred': 0x8000002a,
    'Defcoin': 0x80000539,
    'Denarius': 0x80000074,
    'Diamond': 0x80000098,
    'DigiByte': 0x80000014,
    'Digitalcoin': 0x80000012,
    'Dogecoin': 0x80000003,
    'Dollarcoins': 0x80000066,
    'Dopecoin': 0x80000035,
    'Dubaicoin': 0x80000068,
    'EDRCoin': 0x80000038,
    'Ecoin': 0x80000073,
    'Einsteinium': 0x80000029,
    'Electronic Gulden': 0x8000004e,
    'Ellaism': 0x800000a3,
    'Ember': 0x800000aa,
    'Ether': 0x8000003c,
    'Ether Classic': 0x8000003d,
    'EuropeCoin': 0x80000097,
    'Evotion': 0x80000062,
    'Expanse': 0x80000028,
    'Factom Entry Credits': 0x80000084,
    'Factom Factoids': 0x80000083,
    'Feathercoin': 0x80000008,
    'Firstcoin': 0x800000a7,
    'Flashcoin': 0x80000078,
    'FujiCoin': 0x8000004b,
    'GameCredits': 0x80000065,
    'Giftblock': 0x8000008a,
    'Global Currency Reserve': 0x80000031,
    'GoldBlocks': 0x8000005e,
    'Gridcoin': 0x80000054,
    'Groestlcoin': 0x80000011,
    'Gulden': 0x80000057,
    'HTMLCOIN': 0x800000ac,
    'Hcash': 0x800000ab,
    'Helleniccoin': 0x800000a8,
    'Hempcoin': 0x80000071,
    'IXCoin': 0x80000056,
    'InsaneCoin': 0x80000044,
    'Internet of People': 0x80000042,
    'Jumbucks': 0x8000001a,
    'Komodo': 0x8000008d,
    'LBRY Credits': 0x8000008c,
    'Landcoin': 0x8000003f,
    'Libertas': 0x8000002e,
    'Link': 0x8000004c,
    'Linx': 0x80000072,
    'Lisk': 0x80000086,
    'Litecoin': 0x80000002,
    'MIX': 0x8000004c,
    'MOIN': 0x80000027,
    'MarsCoin': 0x8000006b,
    'MasterTrader': 0x8000005d,
    'Mazacoin': 0x8000000d,
    'MemCoin': 0x8000014d,
    'Monacoin': 0x80000016,
    'Monero': 0x80000080,
    'MonetaryUnit': 0x8000001f,
    'Myriadcoin': 0x8000005a,
    'NEM': 0x8000002b,
    'NEO': 0x80000378,
    'NXT': 0x8000001d,
    'Namecoin': 0x80000007,
    'NavCoin': 0x80000082,
    'Neblio': 0x80000092,
    'Neoscoin': 0x80000019,
    'Neurocoin': 0x8000006e,
    'Nexus': 0x80000043,
    'NoLimitCoin2': 0x80000095,
    'Novacoin': 0x80000032,
    'NuBits': 0x8000000c,
    'NuShares': 0x8000000b,
    'OKCash': 0x80000045,
    'Open Assets': 0x80000015,
    'Open Chain': 0x80000040,
    'Pandacoin': 0x80000025,
    'ParkByte': 0x80000024,
    'Particl': 0x8000002c,
    'Peercoin': 0x80000006,
    'Pesetacoin': 0x8000006d,
    'Pesobit': 0x8000003e,
    'PiggyCoin': 0x80000076,
    'Pinkcoin': 0x80000075,
    'Pirl': 0x800000a4,
    'Pivx': 0x80000077,
    'Posw coin': 0x8000002f,
    'Potcoin': 0x80000051,
    'Primecoin': 0x80000018,
    'Putincoin': 0x8000007a,
    'Quarkcoin': 0x80000052,
    'RaiBlocks': 0x800000a5,
    'RealPointCoin': 0x8000008b,
    'Reddcoin': 0x80000004,
    'RichCoin': 0x80000050,
    'Riecoin': 0x8000008f,
    'Ripple': 0x80000090,
    'Rootstock': 0x80000089,
    'Rootstock Testnet': 0x800091be,
    'Rubycoin': 0x80000010,
    'Saham': 0x8000005f,
    'SaveTheOcean': 0x80000063,
    'ShadowCash': 0x80000023,
    'Shilling': 0x8000006a,
    'Shreeji': 0x80000030,
    'Smartcash': 0x800000e0,
    'Smileycoin': 0x8000003b,
    'Solarcoin': 0x8000003a,
    'StartCOIN': 0x80000026,
    'StealthCoin': 0x8000007d,
    'Steem': 0x80000087,
    'Stellar Lumens': 0x80000094,
    'Stratis': 0x80000069,
    'SuperSkynet': 0x8000009e,
    'Syscoin': 0x80000039,
    'TOACoin': 0x8000009f,
    'Templecoin': 0x80000036,
    'Terracoin': 0x80000053,
    'Testnet': 0x80000001,
    'Ubiq': 0x8000006c,
    'Ubiquoin': 0x80000061,
    'UltimateSecureCashMain': 0x80000070,
    'Unify': 0x8000007c,
    'Unobtanium': 0x8000005c,
    'Vcash': 0x8000007f,
    'Verge': 0x8000004d,
    'Vertcoin': 0x8000001c,
    'Viacoin': 0x8000000e,
    'Vivo': 0x800000a6,
    'Voxels': 0x80000081,
    'Vpncoin': 0x80000021,
    'WhaleCoin': 0x80000096,
    'Whitecoin': 0x8000009b,
    'ZClassic': 0x80000093,
    'ZCoin': 0x80000088,
    'Zayedcoin': 0x80000067,
    'Zcash': 0x80000085,
    'Zen Protocol': 0x80000102,
    'Zencash': 0x80000079,
    'Zoom': 0x80000020,
    'bisq Token': 0x8000008e,
    'ziftrCOIN': 0x8000001b,
}

export default constants
