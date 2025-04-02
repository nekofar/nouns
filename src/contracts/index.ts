import {
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
  createUseReadContract,
} from 'wagmi/codegen'

import {
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
  createReadContract,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NounsAuction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const nounsAuctionAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'logic', internalType: 'address', type: 'address' },
      { name: 'admin', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  { type: 'fallback', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: 'admin_', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAdmin', internalType: 'address', type: 'address' }],
    name: 'changeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [
      { name: 'implementation_', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const nounsAuctionAddress = {
  1: '0x830BD73E4184ceF73443C15111a1DF14e495C706',
  11155111: '0x488609b7113FCf3B761A05956300d605E8f6BcAf',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const nounsAuctionConfig = {
  address: nounsAuctionAddress,
  abi: nounsAuctionAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NounsData
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xf790a5f59678dd733fb3de93493a91f472ca1365)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9040f720aa8a693f950b9cf94764b4b06079d002)
 */
export const nounsDataAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_logic', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  { type: 'fallback', stateMutability: 'payable' },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xf790a5f59678dd733fb3de93493a91f472ca1365)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9040f720aa8a693f950b9cf94764b4b06079d002)
 */
export const nounsDataAddress = {
  1: '0xf790A5f59678dd733fb3De93493A91f472ca1365',
  11155111: '0x9040f720AA8A693F950B9cF94764b4b06079D002',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xf790a5f59678dd733fb3de93493a91f472ca1365)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9040f720aa8a693f950b9cf94764b4b06079d002)
 */
export const nounsDataConfig = {
  address: nounsDataAddress,
  abi: nounsDataAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NounsDescriptor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const nounsDescriptorAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_art', internalType: 'contract INounsArt', type: 'address' },
      {
        name: '_renderer',
        internalType: 'contract ISVGRenderer',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'BadPaletteLength' },
  { type: 'error', inputs: [], name: 'EmptyPalette' },
  { type: 'error', inputs: [], name: 'IndexNotFound' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'art',
        internalType: 'contract INounsArt',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ArtUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'baseURI',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'BaseURIUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'enabled', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'DataURIToggled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'PartsLocked' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'renderer',
        internalType: 'contract ISVGRenderer',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'RendererUpdated',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'accessories',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'accessoryCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'encodedCompressed', internalType: 'bytes', type: 'bytes' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addAccessories',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pointer', internalType: 'address', type: 'address' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addAccessoriesFromPointer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_background', internalType: 'string', type: 'string' }],
    name: 'addBackground',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'encodedCompressed', internalType: 'bytes', type: 'bytes' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addBodies',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pointer', internalType: 'address', type: 'address' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addBodiesFromPointer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'encodedCompressed', internalType: 'bytes', type: 'bytes' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addGlasses',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pointer', internalType: 'address', type: 'address' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addGlassesFromPointer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'encodedCompressed', internalType: 'bytes', type: 'bytes' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addHeads',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pointer', internalType: 'address', type: 'address' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addHeadsFromPointer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_backgrounds', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'addManyBackgrounds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'arePartsLocked',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'art',
    outputs: [
      { name: '', internalType: 'contract INounsArt', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'backgroundCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'backgrounds',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'baseURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'bodies',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'bodyCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'seed',
        internalType: 'struct INounsSeeder.Seed',
        type: 'tuple',
        components: [
          { name: 'background', internalType: 'uint48', type: 'uint48' },
          { name: 'body', internalType: 'uint48', type: 'uint48' },
          { name: 'accessory', internalType: 'uint48', type: 'uint48' },
          { name: 'head', internalType: 'uint48', type: 'uint48' },
          { name: 'glasses', internalType: 'uint48', type: 'uint48' },
        ],
      },
    ],
    name: 'dataURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'seed',
        internalType: 'struct INounsSeeder.Seed',
        type: 'tuple',
        components: [
          { name: 'background', internalType: 'uint48', type: 'uint48' },
          { name: 'body', internalType: 'uint48', type: 'uint48' },
          { name: 'accessory', internalType: 'uint48', type: 'uint48' },
          { name: 'head', internalType: 'uint48', type: 'uint48' },
          { name: 'glasses', internalType: 'uint48', type: 'uint48' },
        ],
      },
    ],
    name: 'generateSVGImage',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'description', internalType: 'string', type: 'string' },
      {
        name: 'seed',
        internalType: 'struct INounsSeeder.Seed',
        type: 'tuple',
        components: [
          { name: 'background', internalType: 'uint48', type: 'uint48' },
          { name: 'body', internalType: 'uint48', type: 'uint48' },
          { name: 'accessory', internalType: 'uint48', type: 'uint48' },
          { name: 'head', internalType: 'uint48', type: 'uint48' },
          { name: 'glasses', internalType: 'uint48', type: 'uint48' },
        ],
      },
    ],
    name: 'genericDataURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'seed',
        internalType: 'struct INounsSeeder.Seed',
        type: 'tuple',
        components: [
          { name: 'background', internalType: 'uint48', type: 'uint48' },
          { name: 'body', internalType: 'uint48', type: 'uint48' },
          { name: 'accessory', internalType: 'uint48', type: 'uint48' },
          { name: 'head', internalType: 'uint48', type: 'uint48' },
          { name: 'glasses', internalType: 'uint48', type: 'uint48' },
        ],
      },
    ],
    name: 'getPartsForSeed',
    outputs: [
      {
        name: '',
        internalType: 'struct ISVGRenderer.Part[]',
        type: 'tuple[]',
        components: [
          { name: 'image', internalType: 'bytes', type: 'bytes' },
          { name: 'palette', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'glasses',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'glassesCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'headCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'heads',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isDataURIEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lockParts',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint8', type: 'uint8' }],
    name: 'palettes',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renderer',
    outputs: [
      { name: '', internalType: 'contract ISVGRenderer', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_art', internalType: 'contract INounsArt', type: 'address' },
    ],
    name: 'setArt',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'descriptor', internalType: 'address', type: 'address' }],
    name: 'setArtDescriptor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'inflator', internalType: 'contract IInflator', type: 'address' },
    ],
    name: 'setArtInflator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_baseURI', internalType: 'string', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'paletteIndex', internalType: 'uint8', type: 'uint8' },
      { name: 'palette', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setPalette',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'paletteIndex', internalType: 'uint8', type: 'uint8' },
      { name: 'pointer', internalType: 'address', type: 'address' },
    ],
    name: 'setPalettePointer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_renderer',
        internalType: 'contract ISVGRenderer',
        type: 'address',
      },
    ],
    name: 'setRenderer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'toggleDataURIEnabled',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'seed',
        internalType: 'struct INounsSeeder.Seed',
        type: 'tuple',
        components: [
          { name: 'background', internalType: 'uint48', type: 'uint48' },
          { name: 'body', internalType: 'uint48', type: 'uint48' },
          { name: 'accessory', internalType: 'uint48', type: 'uint48' },
          { name: 'head', internalType: 'uint48', type: 'uint48' },
          { name: 'glasses', internalType: 'uint48', type: 'uint48' },
        ],
      },
    ],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'encodedCompressed', internalType: 'bytes', type: 'bytes' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'updateAccessories',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pointer', internalType: 'address', type: 'address' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'updateAccessoriesFromPointer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'encodedCompressed', internalType: 'bytes', type: 'bytes' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'updateBodies',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pointer', internalType: 'address', type: 'address' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'updateBodiesFromPointer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'encodedCompressed', internalType: 'bytes', type: 'bytes' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'updateGlasses',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pointer', internalType: 'address', type: 'address' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'updateGlassesFromPointer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'encodedCompressed', internalType: 'bytes', type: 'bytes' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'updateHeads',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pointer', internalType: 'address', type: 'address' },
      { name: 'decompressedLength', internalType: 'uint80', type: 'uint80' },
      { name: 'imageCount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'updateHeadsFromPointer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const nounsDescriptorAddress = {
  1: '0x33A9c445fb4FB21f2c030A6b2d3e2F12D017BFAC',
  11155111: '0x79E04ebCDf1ac2661697B23844149b43acc002d5',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const nounsDescriptorConfig = {
  address: nounsDescriptorAddress,
  abi: nounsDescriptorAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NounsGovernor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const nounsGovernorAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'timelock_', internalType: 'address', type: 'address' },
      { name: 'nouns_', internalType: 'address', type: 'address' },
      { name: 'vetoer_', internalType: 'address', type: 'address' },
      { name: 'admin_', internalType: 'address', type: 'address' },
      { name: 'implementation_', internalType: 'address', type: 'address' },
      { name: 'votingPeriod_', internalType: 'uint256', type: 'uint256' },
      { name: 'votingDelay_', internalType: 'uint256', type: 'uint256' },
      {
        name: 'proposalThresholdBPS_',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'quorumVotesBPS_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewAdmin',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldImplementation',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newImplementation',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewImplementation',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldPendingAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newPendingAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewPendingAdmin',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldVetoer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newVetoer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NewVetoer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ProposalCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'proposer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'targets',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'signatures',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
      {
        name: 'calldatas',
        internalType: 'bytes[]',
        type: 'bytes[]',
        indexed: false,
      },
      {
        name: 'startBlock',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'endBlock',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'description',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ProposalCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'proposer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'targets',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'signatures',
        internalType: 'string[]',
        type: 'string[]',
        indexed: false,
      },
      {
        name: 'calldatas',
        internalType: 'bytes[]',
        type: 'bytes[]',
        indexed: false,
      },
      {
        name: 'startBlock',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'endBlock',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'proposalThreshold',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'quorumVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'description',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'ProposalCreatedWithRequirements',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ProposalExecuted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'eta', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ProposalQueued',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldProposalThresholdBPS',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newProposalThresholdBPS',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProposalThresholdBPSSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ProposalVetoed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldQuorumVotesBPS',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newQuorumVotesBPS',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'QuorumVotesBPSSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'proposalId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'support', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'votes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'VoteCast',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldVotingDelay',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotingDelay',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'VotingDelaySet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldVotingPeriod',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotingPeriod',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'VotingPeriodSet',
  },
  { type: 'fallback', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [
      { name: 'implementation_', internalType: 'address', type: 'address' },
    ],
    name: '_setImplementation',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pendingAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const nounsGovernorAddress = {
  1: '0x6f3E6272A167e8AcCb32072d08E0957F9c79223d',
  11155111: '0x35d2670d7C8931AACdd37C89Ddcb0638c3c44A57',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const nounsGovernorConfig = {
  address: nounsGovernorAddress,
  abi: nounsGovernorAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NounsToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const nounsTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_noundersDAO', internalType: 'address', type: 'address' },
      { name: '_minter', internalType: 'address', type: 'address' },
      {
        name: '_descriptor',
        internalType: 'contract INounsDescriptor',
        type: 'address',
      },
      {
        name: '_seeder',
        internalType: 'contract INounsSeeder',
        type: 'address',
      },
      {
        name: '_proxyRegistry',
        internalType: 'contract IProxyRegistry',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'DescriptorLocked' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'descriptor',
        internalType: 'contract INounsDescriptor',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'DescriptorUpdated',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'MinterLocked' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'minter',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'MinterUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'NounBurned',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'seed',
        internalType: 'struct INounsSeeder.Seed',
        type: 'tuple',
        components: [
          { name: 'background', internalType: 'uint48', type: 'uint48' },
          { name: 'body', internalType: 'uint48', type: 'uint48' },
          { name: 'accessory', internalType: 'uint48', type: 'uint48' },
          { name: 'head', internalType: 'uint48', type: 'uint48' },
          { name: 'glasses', internalType: 'uint48', type: 'uint48' },
        ],
        indexed: false,
      },
    ],
    name: 'NounCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'noundersDAO',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NoundersDAOUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'SeederLocked' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'seeder',
        internalType: 'contract INounsSeeder',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SeederUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DELEGATION_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'nounId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'checkpoints',
    outputs: [
      { name: 'fromBlock', internalType: 'uint32', type: 'uint32' },
      { name: 'votes', internalType: 'uint96', type: 'uint96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'contractURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'dataURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegator', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'descriptor',
    outputs: [
      { name: '', internalType: 'contract INounsDescriptor', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getCurrentVotes',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPriorVotes',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isDescriptorLocked',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isMinterLocked',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isSeederLocked',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lockDescriptor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lockMinter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lockSeeder',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'mint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minter',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'noundersDAO',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'numCheckpoints',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxyRegistry',
    outputs: [
      { name: '', internalType: 'contract IProxyRegistry', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'seeder',
    outputs: [
      { name: '', internalType: 'contract INounsSeeder', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'seeds',
    outputs: [
      { name: 'background', internalType: 'uint48', type: 'uint48' },
      { name: 'body', internalType: 'uint48', type: 'uint48' },
      { name: 'accessory', internalType: 'uint48', type: 'uint48' },
      { name: 'head', internalType: 'uint48', type: 'uint48' },
      { name: 'glasses', internalType: 'uint48', type: 'uint48' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newContractURIHash', internalType: 'string', type: 'string' },
    ],
    name: 'setContractURIHash',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_descriptor',
        internalType: 'contract INounsDescriptor',
        type: 'address',
      },
    ],
    name: 'setDescriptor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_minter', internalType: 'address', type: 'address' }],
    name: 'setMinter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_noundersDAO', internalType: 'address', type: 'address' },
    ],
    name: 'setNoundersDAO',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_seeder',
        internalType: 'contract INounsSeeder',
        type: 'address',
      },
    ],
    name: 'setSeeder',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegator', internalType: 'address', type: 'address' }],
    name: 'votesToDelegate',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const nounsTokenAddress = {
  1: '0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03',
  11155111: '0x4C4674bb72a096855496a7204962297bd7e12b85',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const nounsTokenConfig = {
  address: nounsTokenAddress,
  abi: nounsTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NounsTreasury
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const nounsTreasuryAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'logic', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  { type: 'fallback', stateMutability: 'payable' },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const nounsTreasuryAddress = {
  1: '0xb1a32FC9F9D8b2cf86C068Cae13108809547ef71',
  11155111: '0x07e5D6a1550aD5E597A9b0698A474AA080A2fB28',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const nounsTreasuryConfig = {
  address: nounsTreasuryAddress,
  abi: nounsTreasuryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsAuctionAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWriteNounsAuction = /*#__PURE__*/ createUseWriteContract({
  abi: nounsAuctionAbi,
  address: nounsAuctionAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWriteNounsAuctionAdmin = /*#__PURE__*/ createUseWriteContract({
  abi: nounsAuctionAbi,
  address: nounsAuctionAddress,
  functionName: 'admin',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"changeAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWriteNounsAuctionChangeAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    functionName: 'changeAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWriteNounsAuctionImplementation =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    functionName: 'implementation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWriteNounsAuctionUpgradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWriteNounsAuctionUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsAuctionAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useSimulateNounsAuction = /*#__PURE__*/ createUseSimulateContract({
  abi: nounsAuctionAbi,
  address: nounsAuctionAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useSimulateNounsAuctionAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    functionName: 'admin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"changeAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useSimulateNounsAuctionChangeAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    functionName: 'changeAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useSimulateNounsAuctionImplementation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    functionName: 'implementation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useSimulateNounsAuctionUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useSimulateNounsAuctionUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsAuctionAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWatchNounsAuctionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsAuctionAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWatchNounsAuctionAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsAuctionAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWatchNounsAuctionBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsAuctionAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const useWatchNounsAuctionUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsDataAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xf790a5f59678dd733fb3de93493a91f472ca1365)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9040f720aa8a693f950b9cf94764b4b06079d002)
 */
export const useWatchNounsDataEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: nounsDataAbi, address: nounsDataAddress },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsDataAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xf790a5f59678dd733fb3de93493a91f472ca1365)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9040f720aa8a693f950b9cf94764b4b06079d002)
 */
export const useWatchNounsDataAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsDataAbi,
    address: nounsDataAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsDataAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xf790a5f59678dd733fb3de93493a91f472ca1365)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9040f720aa8a693f950b9cf94764b4b06079d002)
 */
export const useWatchNounsDataBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsDataAbi,
    address: nounsDataAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsDataAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xf790a5f59678dd733fb3de93493a91f472ca1365)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9040f720aa8a693f950b9cf94764b4b06079d002)
 */
export const useWatchNounsDataUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsDataAbi,
    address: nounsDataAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptor = /*#__PURE__*/ createUseReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"accessories"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorAccessories =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'accessories',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"accessoryCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorAccessoryCount =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'accessoryCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"arePartsLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorArePartsLocked =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'arePartsLocked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"art"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorArt = /*#__PURE__*/ createUseReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'art',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"backgroundCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorBackgroundCount =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'backgroundCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"backgrounds"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorBackgrounds =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'backgrounds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"baseURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorBaseUri =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'baseURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"bodies"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorBodies = /*#__PURE__*/ createUseReadContract(
  {
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'bodies',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"bodyCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorBodyCount =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'bodyCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"dataURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorDataUri =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'dataURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"generateSVGImage"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorGenerateSvgImage =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'generateSVGImage',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"genericDataURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorGenericDataUri =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'genericDataURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"getPartsForSeed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorGetPartsForSeed =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'getPartsForSeed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"glasses"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorGlasses =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'glasses',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"glassesCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorGlassesCount =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'glassesCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"headCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorHeadCount =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'headCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"heads"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorHeads = /*#__PURE__*/ createUseReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'heads',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"isDataURIEnabled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorIsDataUriEnabled =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'isDataURIEnabled',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorOwner = /*#__PURE__*/ createUseReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"palettes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorPalettes =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'palettes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"renderer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorRenderer =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'renderer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"tokenURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useReadNounsDescriptorTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptor = /*#__PURE__*/ createUseWriteContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addAccessories"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorAddAccessories =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addAccessories',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addAccessoriesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorAddAccessoriesFromPointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addAccessoriesFromPointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addBackground"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorAddBackground =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addBackground',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addBodies"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorAddBodies =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addBodies',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addBodiesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorAddBodiesFromPointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addBodiesFromPointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addGlasses"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorAddGlasses =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addGlasses',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addGlassesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorAddGlassesFromPointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addGlassesFromPointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addHeads"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorAddHeads =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addHeads',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addHeadsFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorAddHeadsFromPointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addHeadsFromPointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addManyBackgrounds"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorAddManyBackgrounds =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addManyBackgrounds',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"lockParts"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorLockParts =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'lockParts',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setArt"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorSetArt =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setArt',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setArtDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorSetArtDescriptor =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setArtDescriptor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setArtInflator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorSetArtInflator =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setArtInflator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorSetBaseUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setPalette"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorSetPalette =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setPalette',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setPalettePointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorSetPalettePointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setPalettePointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setRenderer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorSetRenderer =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setRenderer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"toggleDataURIEnabled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorToggleDataUriEnabled =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'toggleDataURIEnabled',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateAccessories"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorUpdateAccessories =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateAccessories',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateAccessoriesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorUpdateAccessoriesFromPointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateAccessoriesFromPointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateBodies"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorUpdateBodies =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateBodies',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateBodiesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorUpdateBodiesFromPointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateBodiesFromPointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateGlasses"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorUpdateGlasses =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateGlasses',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateGlassesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorUpdateGlassesFromPointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateGlassesFromPointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateHeads"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorUpdateHeads =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateHeads',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateHeadsFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWriteNounsDescriptorUpdateHeadsFromPointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateHeadsFromPointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addAccessories"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorAddAccessories =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addAccessories',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addAccessoriesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorAddAccessoriesFromPointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addAccessoriesFromPointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addBackground"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorAddBackground =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addBackground',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addBodies"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorAddBodies =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addBodies',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addBodiesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorAddBodiesFromPointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addBodiesFromPointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addGlasses"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorAddGlasses =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addGlasses',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addGlassesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorAddGlassesFromPointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addGlassesFromPointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addHeads"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorAddHeads =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addHeads',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addHeadsFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorAddHeadsFromPointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addHeadsFromPointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addManyBackgrounds"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorAddManyBackgrounds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addManyBackgrounds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"lockParts"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorLockParts =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'lockParts',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setArt"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorSetArt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setArt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setArtDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorSetArtDescriptor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setArtDescriptor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setArtInflator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorSetArtInflator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setArtInflator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorSetBaseUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setPalette"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorSetPalette =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setPalette',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setPalettePointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorSetPalettePointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setPalettePointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setRenderer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorSetRenderer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setRenderer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"toggleDataURIEnabled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorToggleDataUriEnabled =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'toggleDataURIEnabled',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateAccessories"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorUpdateAccessories =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateAccessories',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateAccessoriesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorUpdateAccessoriesFromPointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateAccessoriesFromPointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateBodies"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorUpdateBodies =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateBodies',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateBodiesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorUpdateBodiesFromPointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateBodiesFromPointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateGlasses"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorUpdateGlasses =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateGlasses',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateGlassesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorUpdateGlassesFromPointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateGlassesFromPointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateHeads"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorUpdateHeads =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateHeads',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateHeadsFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useSimulateNounsDescriptorUpdateHeadsFromPointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateHeadsFromPointer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsDescriptorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWatchNounsDescriptorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `eventName` set to `"ArtUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWatchNounsDescriptorArtUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    eventName: 'ArtUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `eventName` set to `"BaseURIUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWatchNounsDescriptorBaseUriUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    eventName: 'BaseURIUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `eventName` set to `"DataURIToggled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWatchNounsDescriptorDataUriToggledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    eventName: 'DataURIToggled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWatchNounsDescriptorOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `eventName` set to `"PartsLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWatchNounsDescriptorPartsLockedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    eventName: 'PartsLocked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `eventName` set to `"RendererUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const useWatchNounsDescriptorRendererUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    eventName: 'RendererUpdated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsGovernorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useReadNounsGovernor = /*#__PURE__*/ createUseReadContract({
  abi: nounsGovernorAbi,
  address: nounsGovernorAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsGovernorAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useReadNounsGovernorAdmin = /*#__PURE__*/ createUseReadContract({
  abi: nounsGovernorAbi,
  address: nounsGovernorAddress,
  functionName: 'admin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsGovernorAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useReadNounsGovernorImplementation =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    functionName: 'implementation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsGovernorAbi}__ and `functionName` set to `"pendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useReadNounsGovernorPendingAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    functionName: 'pendingAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsGovernorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWriteNounsGovernor = /*#__PURE__*/ createUseWriteContract({
  abi: nounsGovernorAbi,
  address: nounsGovernorAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsGovernorAbi}__ and `functionName` set to `"_setImplementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWriteNounsGovernorSetImplementation =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    functionName: '_setImplementation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsGovernorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useSimulateNounsGovernor = /*#__PURE__*/ createUseSimulateContract(
  { abi: nounsGovernorAbi, address: nounsGovernorAddress },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsGovernorAbi}__ and `functionName` set to `"_setImplementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useSimulateNounsGovernorSetImplementation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    functionName: '_setImplementation',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWatchNounsGovernorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"NewAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWatchNounsGovernorNewAdminEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'NewAdmin',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"NewImplementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWatchNounsGovernorNewImplementationEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'NewImplementation',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"NewPendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWatchNounsGovernorNewPendingAdminEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'NewPendingAdmin',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"NewVetoer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWatchNounsGovernorNewVetoerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'NewVetoer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"ProposalCanceled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWatchNounsGovernorProposalCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"ProposalCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWatchNounsGovernorProposalCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"ProposalCreatedWithRequirements"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWatchNounsGovernorProposalCreatedWithRequirementsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'ProposalCreatedWithRequirements',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"ProposalExecuted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWatchNounsGovernorProposalExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"ProposalQueued"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWatchNounsGovernorProposalQueuedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"ProposalThresholdBPSSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWatchNounsGovernorProposalThresholdBpsSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'ProposalThresholdBPSSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"ProposalVetoed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWatchNounsGovernorProposalVetoedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'ProposalVetoed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"QuorumVotesBPSSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWatchNounsGovernorQuorumVotesBpsSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'QuorumVotesBPSSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"VoteCast"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWatchNounsGovernorVoteCastEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"VotingDelaySet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWatchNounsGovernorVotingDelaySetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'VotingDelaySet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"VotingPeriodSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const useWatchNounsGovernorVotingPeriodSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'VotingPeriodSet',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsToken = /*#__PURE__*/ createUseReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"DELEGATION_TYPEHASH"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenDelegationTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'DELEGATION_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"DOMAIN_TYPEHASH"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenDomainTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'DOMAIN_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"checkpoints"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenCheckpoints = /*#__PURE__*/ createUseReadContract(
  {
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'checkpoints',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"contractURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenContractUri = /*#__PURE__*/ createUseReadContract(
  {
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'contractURI',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"dataURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenDataUri = /*#__PURE__*/ createUseReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'dataURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"delegates"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenDelegates = /*#__PURE__*/ createUseReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'delegates',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"descriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenDescriptor = /*#__PURE__*/ createUseReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'descriptor',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"getApproved"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenGetApproved = /*#__PURE__*/ createUseReadContract(
  {
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'getApproved',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"getCurrentVotes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenGetCurrentVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'getCurrentVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"getPriorVotes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenGetPriorVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'getPriorVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"isDescriptorLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenIsDescriptorLocked =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'isDescriptorLocked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"isMinterLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenIsMinterLocked =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'isMinterLocked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"isSeederLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenIsSeederLocked =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'isSeederLocked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"minter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenMinter = /*#__PURE__*/ createUseReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'minter',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenName = /*#__PURE__*/ createUseReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"nonces"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenNonces = /*#__PURE__*/ createUseReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"noundersDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenNoundersDao = /*#__PURE__*/ createUseReadContract(
  {
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'noundersDAO',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"numCheckpoints"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenNumCheckpoints =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'numCheckpoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenOwner = /*#__PURE__*/ createUseReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"ownerOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"proxyRegistry"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenProxyRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'proxyRegistry',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"seeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenSeeder = /*#__PURE__*/ createUseReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'seeder',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"seeds"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenSeeds = /*#__PURE__*/ createUseReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'seeds',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"tokenByIndex"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenTokenByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'tokenByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenTokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"tokenURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenTotalSupply = /*#__PURE__*/ createUseReadContract(
  {
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'totalSupply',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"votesToDelegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useReadNounsTokenVotesToDelegate =
  /*#__PURE__*/ createUseReadContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'votesToDelegate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsToken = /*#__PURE__*/ createUseWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenBurn = /*#__PURE__*/ createUseWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenDelegate = /*#__PURE__*/ createUseWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenDelegateBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"lockDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenLockDescriptor =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'lockDescriptor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"lockMinter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenLockMinter =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'lockMinter',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"lockSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenLockSeeder =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'lockSeeder',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenMint = /*#__PURE__*/ createUseWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setContractURIHash"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenSetContractUriHash =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'setContractURIHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenSetDescriptor =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'setDescriptor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setMinter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenSetMinter = /*#__PURE__*/ createUseWriteContract(
  { abi: nounsTokenAbi, address: nounsTokenAddress, functionName: 'setMinter' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setNoundersDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenSetNoundersDao =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'setNoundersDAO',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenSetSeeder = /*#__PURE__*/ createUseWriteContract(
  { abi: nounsTokenAbi, address: nounsTokenAddress, functionName: 'setSeeder' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWriteNounsTokenTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsToken = /*#__PURE__*/ createUseSimulateContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenDelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"lockDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenLockDescriptor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'lockDescriptor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"lockMinter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenLockMinter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'lockMinter',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"lockSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenLockSeeder =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'lockSeeder',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setContractURIHash"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenSetContractUriHash =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'setContractURIHash',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenSetDescriptor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'setDescriptor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setMinter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenSetMinter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'setMinter',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setNoundersDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenSetNoundersDao =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'setNoundersDAO',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenSetSeeder =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'setSeeder',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useSimulateNounsTokenTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWatchNounsTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWatchNounsTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWatchNounsTokenApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"DelegateChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWatchNounsTokenDelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWatchNounsTokenDelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"DescriptorLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWatchNounsTokenDescriptorLockedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'DescriptorLocked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"DescriptorUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWatchNounsTokenDescriptorUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'DescriptorUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"MinterLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWatchNounsTokenMinterLockedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'MinterLocked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"MinterUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWatchNounsTokenMinterUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'MinterUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"NounBurned"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWatchNounsTokenNounBurnedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'NounBurned',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"NounCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWatchNounsTokenNounCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'NounCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"NoundersDAOUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWatchNounsTokenNoundersDaoUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'NoundersDAOUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWatchNounsTokenOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"SeederLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWatchNounsTokenSeederLockedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'SeederLocked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"SeederUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWatchNounsTokenSeederUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'SeederUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const useWatchNounsTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTreasuryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const useWatchNounsTreasuryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTreasuryAbi,
    address: nounsTreasuryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTreasuryAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const useWatchNounsTreasuryAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTreasuryAbi,
    address: nounsTreasuryAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTreasuryAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const useWatchNounsTreasuryBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTreasuryAbi,
    address: nounsTreasuryAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link nounsTreasuryAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const useWatchNounsTreasuryUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: nounsTreasuryAbi,
    address: nounsTreasuryAddress,
    eventName: 'Upgraded',
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsAuctionAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const writeNounsAuction = /*#__PURE__*/ createWriteContract({
  abi: nounsAuctionAbi,
  address: nounsAuctionAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const writeNounsAuctionAdmin = /*#__PURE__*/ createWriteContract({
  abi: nounsAuctionAbi,
  address: nounsAuctionAddress,
  functionName: 'admin',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"changeAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const writeNounsAuctionChangeAdmin = /*#__PURE__*/ createWriteContract({
  abi: nounsAuctionAbi,
  address: nounsAuctionAddress,
  functionName: 'changeAdmin',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const writeNounsAuctionImplementation =
  /*#__PURE__*/ createWriteContract({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    functionName: 'implementation',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const writeNounsAuctionUpgradeTo = /*#__PURE__*/ createWriteContract({
  abi: nounsAuctionAbi,
  address: nounsAuctionAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const writeNounsAuctionUpgradeToAndCall =
  /*#__PURE__*/ createWriteContract({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsAuctionAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const simulateNounsAuction = /*#__PURE__*/ createSimulateContract({
  abi: nounsAuctionAbi,
  address: nounsAuctionAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const simulateNounsAuctionAdmin = /*#__PURE__*/ createSimulateContract({
  abi: nounsAuctionAbi,
  address: nounsAuctionAddress,
  functionName: 'admin',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"changeAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const simulateNounsAuctionChangeAdmin =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    functionName: 'changeAdmin',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const simulateNounsAuctionImplementation =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    functionName: 'implementation',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const simulateNounsAuctionUpgradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsAuctionAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const simulateNounsAuctionUpgradeToAndCall =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsAuctionAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const watchNounsAuctionEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: nounsAuctionAbi,
  address: nounsAuctionAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsAuctionAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const watchNounsAuctionAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsAuctionAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const watchNounsAuctionBeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsAuctionAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x830bd73e4184cef73443c15111a1df14e495c706)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x488609b7113fcf3b761a05956300d605e8f6bcaf)
 */
export const watchNounsAuctionUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsAuctionAbi,
    address: nounsAuctionAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsDataAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xf790a5f59678dd733fb3de93493a91f472ca1365)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9040f720aa8a693f950b9cf94764b4b06079d002)
 */
export const watchNounsDataEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: nounsDataAbi,
  address: nounsDataAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsDataAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xf790a5f59678dd733fb3de93493a91f472ca1365)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9040f720aa8a693f950b9cf94764b4b06079d002)
 */
export const watchNounsDataAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsDataAbi,
    address: nounsDataAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsDataAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xf790a5f59678dd733fb3de93493a91f472ca1365)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9040f720aa8a693f950b9cf94764b4b06079d002)
 */
export const watchNounsDataBeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsDataAbi,
    address: nounsDataAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsDataAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xf790a5f59678dd733fb3de93493a91f472ca1365)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9040f720aa8a693f950b9cf94764b4b06079d002)
 */
export const watchNounsDataUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsDataAbi,
    address: nounsDataAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptor = /*#__PURE__*/ createReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"accessories"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorAccessories = /*#__PURE__*/ createReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'accessories',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"accessoryCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorAccessoryCount =
  /*#__PURE__*/ createReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'accessoryCount',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"arePartsLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorArePartsLocked =
  /*#__PURE__*/ createReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'arePartsLocked',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"art"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorArt = /*#__PURE__*/ createReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'art',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"backgroundCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorBackgroundCount =
  /*#__PURE__*/ createReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'backgroundCount',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"backgrounds"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorBackgrounds = /*#__PURE__*/ createReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'backgrounds',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"baseURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorBaseUri = /*#__PURE__*/ createReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'baseURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"bodies"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorBodies = /*#__PURE__*/ createReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'bodies',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"bodyCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorBodyCount = /*#__PURE__*/ createReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'bodyCount',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"dataURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorDataUri = /*#__PURE__*/ createReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'dataURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"generateSVGImage"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorGenerateSvgImage =
  /*#__PURE__*/ createReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'generateSVGImage',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"genericDataURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorGenericDataUri =
  /*#__PURE__*/ createReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'genericDataURI',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"getPartsForSeed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorGetPartsForSeed =
  /*#__PURE__*/ createReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'getPartsForSeed',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"glasses"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorGlasses = /*#__PURE__*/ createReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'glasses',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"glassesCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorGlassesCount = /*#__PURE__*/ createReadContract(
  {
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'glassesCount',
  },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"headCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorHeadCount = /*#__PURE__*/ createReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'headCount',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"heads"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorHeads = /*#__PURE__*/ createReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'heads',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"isDataURIEnabled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorIsDataUriEnabled =
  /*#__PURE__*/ createReadContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'isDataURIEnabled',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorOwner = /*#__PURE__*/ createReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"palettes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorPalettes = /*#__PURE__*/ createReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'palettes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"renderer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorRenderer = /*#__PURE__*/ createReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'renderer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"tokenURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const readNounsDescriptorTokenUri = /*#__PURE__*/ createReadContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptor = /*#__PURE__*/ createWriteContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addAccessories"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorAddAccessories =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addAccessories',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addAccessoriesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorAddAccessoriesFromPointer =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addAccessoriesFromPointer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addBackground"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorAddBackground =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addBackground',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addBodies"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorAddBodies = /*#__PURE__*/ createWriteContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'addBodies',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addBodiesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorAddBodiesFromPointer =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addBodiesFromPointer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addGlasses"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorAddGlasses = /*#__PURE__*/ createWriteContract(
  {
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addGlasses',
  },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addGlassesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorAddGlassesFromPointer =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addGlassesFromPointer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addHeads"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorAddHeads = /*#__PURE__*/ createWriteContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'addHeads',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addHeadsFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorAddHeadsFromPointer =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addHeadsFromPointer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addManyBackgrounds"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorAddManyBackgrounds =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addManyBackgrounds',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"lockParts"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorLockParts = /*#__PURE__*/ createWriteContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'lockParts',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setArt"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorSetArt = /*#__PURE__*/ createWriteContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
  functionName: 'setArt',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setArtDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorSetArtDescriptor =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setArtDescriptor',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setArtInflator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorSetArtInflator =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setArtInflator',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorSetBaseUri = /*#__PURE__*/ createWriteContract(
  {
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setBaseURI',
  },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setPalette"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorSetPalette = /*#__PURE__*/ createWriteContract(
  {
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setPalette',
  },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setPalettePointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorSetPalettePointer =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setPalettePointer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setRenderer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorSetRenderer =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setRenderer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"toggleDataURIEnabled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorToggleDataUriEnabled =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'toggleDataURIEnabled',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateAccessories"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorUpdateAccessories =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateAccessories',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateAccessoriesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorUpdateAccessoriesFromPointer =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateAccessoriesFromPointer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateBodies"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorUpdateBodies =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateBodies',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateBodiesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorUpdateBodiesFromPointer =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateBodiesFromPointer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateGlasses"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorUpdateGlasses =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateGlasses',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateGlassesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorUpdateGlassesFromPointer =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateGlassesFromPointer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateHeads"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorUpdateHeads =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateHeads',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateHeadsFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const writeNounsDescriptorUpdateHeadsFromPointer =
  /*#__PURE__*/ createWriteContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateHeadsFromPointer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptor = /*#__PURE__*/ createSimulateContract({
  abi: nounsDescriptorAbi,
  address: nounsDescriptorAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addAccessories"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorAddAccessories =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addAccessories',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addAccessoriesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorAddAccessoriesFromPointer =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addAccessoriesFromPointer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addBackground"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorAddBackground =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addBackground',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addBodies"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorAddBodies =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addBodies',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addBodiesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorAddBodiesFromPointer =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addBodiesFromPointer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addGlasses"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorAddGlasses =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addGlasses',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addGlassesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorAddGlassesFromPointer =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addGlassesFromPointer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addHeads"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorAddHeads =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addHeads',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addHeadsFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorAddHeadsFromPointer =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addHeadsFromPointer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"addManyBackgrounds"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorAddManyBackgrounds =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'addManyBackgrounds',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"lockParts"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorLockParts =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'lockParts',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setArt"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorSetArt =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setArt',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setArtDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorSetArtDescriptor =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setArtDescriptor',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setArtInflator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorSetArtInflator =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setArtInflator',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorSetBaseUri =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setPalette"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorSetPalette =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setPalette',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setPalettePointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorSetPalettePointer =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setPalettePointer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"setRenderer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorSetRenderer =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'setRenderer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"toggleDataURIEnabled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorToggleDataUriEnabled =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'toggleDataURIEnabled',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateAccessories"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorUpdateAccessories =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateAccessories',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateAccessoriesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorUpdateAccessoriesFromPointer =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateAccessoriesFromPointer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateBodies"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorUpdateBodies =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateBodies',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateBodiesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorUpdateBodiesFromPointer =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateBodiesFromPointer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateGlasses"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorUpdateGlasses =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateGlasses',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateGlassesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorUpdateGlassesFromPointer =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateGlassesFromPointer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateHeads"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorUpdateHeads =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateHeads',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `functionName` set to `"updateHeadsFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const simulateNounsDescriptorUpdateHeadsFromPointer =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    functionName: 'updateHeadsFromPointer',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsDescriptorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const watchNounsDescriptorEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: nounsDescriptorAbi, address: nounsDescriptorAddress },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `eventName` set to `"ArtUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const watchNounsDescriptorArtUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    eventName: 'ArtUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `eventName` set to `"BaseURIUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const watchNounsDescriptorBaseUriUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    eventName: 'BaseURIUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `eventName` set to `"DataURIToggled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const watchNounsDescriptorDataUriToggledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    eventName: 'DataURIToggled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const watchNounsDescriptorOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `eventName` set to `"PartsLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const watchNounsDescriptorPartsLockedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    eventName: 'PartsLocked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsDescriptorAbi}__ and `eventName` set to `"RendererUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x79e04ebcdf1ac2661697b23844149b43acc002d5)
 */
export const watchNounsDescriptorRendererUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsDescriptorAbi,
    address: nounsDescriptorAddress,
    eventName: 'RendererUpdated',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsGovernorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const readNounsGovernor = /*#__PURE__*/ createReadContract({
  abi: nounsGovernorAbi,
  address: nounsGovernorAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsGovernorAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const readNounsGovernorAdmin = /*#__PURE__*/ createReadContract({
  abi: nounsGovernorAbi,
  address: nounsGovernorAddress,
  functionName: 'admin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsGovernorAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const readNounsGovernorImplementation = /*#__PURE__*/ createReadContract(
  {
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    functionName: 'implementation',
  },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsGovernorAbi}__ and `functionName` set to `"pendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const readNounsGovernorPendingAdmin = /*#__PURE__*/ createReadContract({
  abi: nounsGovernorAbi,
  address: nounsGovernorAddress,
  functionName: 'pendingAdmin',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsGovernorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const writeNounsGovernor = /*#__PURE__*/ createWriteContract({
  abi: nounsGovernorAbi,
  address: nounsGovernorAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsGovernorAbi}__ and `functionName` set to `"_setImplementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const writeNounsGovernorSetImplementation =
  /*#__PURE__*/ createWriteContract({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    functionName: '_setImplementation',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsGovernorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const simulateNounsGovernor = /*#__PURE__*/ createSimulateContract({
  abi: nounsGovernorAbi,
  address: nounsGovernorAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsGovernorAbi}__ and `functionName` set to `"_setImplementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const simulateNounsGovernorSetImplementation =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    functionName: '_setImplementation',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const watchNounsGovernorEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: nounsGovernorAbi,
  address: nounsGovernorAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"NewAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const watchNounsGovernorNewAdminEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'NewAdmin',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"NewImplementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const watchNounsGovernorNewImplementationEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'NewImplementation',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"NewPendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const watchNounsGovernorNewPendingAdminEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'NewPendingAdmin',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"NewVetoer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const watchNounsGovernorNewVetoerEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'NewVetoer',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"ProposalCanceled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const watchNounsGovernorProposalCanceledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"ProposalCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const watchNounsGovernorProposalCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"ProposalCreatedWithRequirements"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const watchNounsGovernorProposalCreatedWithRequirementsEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'ProposalCreatedWithRequirements',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"ProposalExecuted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const watchNounsGovernorProposalExecutedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"ProposalQueued"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const watchNounsGovernorProposalQueuedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"ProposalThresholdBPSSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const watchNounsGovernorProposalThresholdBpsSetEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'ProposalThresholdBPSSet',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"ProposalVetoed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const watchNounsGovernorProposalVetoedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'ProposalVetoed',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"QuorumVotesBPSSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const watchNounsGovernorQuorumVotesBpsSetEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'QuorumVotesBPSSet',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"VoteCast"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const watchNounsGovernorVoteCastEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"VotingDelaySet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const watchNounsGovernorVotingDelaySetEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'VotingDelaySet',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsGovernorAbi}__ and `eventName` set to `"VotingPeriodSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x6f3e6272a167e8accb32072d08e0957f9c79223d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x35d2670d7c8931aacdd37c89ddcb0638c3c44a57)
 */
export const watchNounsGovernorVotingPeriodSetEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsGovernorAbi,
    address: nounsGovernorAddress,
    eventName: 'VotingPeriodSet',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsToken = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"DELEGATION_TYPEHASH"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenDelegationTypehash =
  /*#__PURE__*/ createReadContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'DELEGATION_TYPEHASH',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"DOMAIN_TYPEHASH"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenDomainTypehash = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'DOMAIN_TYPEHASH',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenBalanceOf = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"checkpoints"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenCheckpoints = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'checkpoints',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"contractURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenContractUri = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'contractURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"dataURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenDataUri = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'dataURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenDecimals = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"delegates"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenDelegates = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'delegates',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"descriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenDescriptor = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'descriptor',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"getApproved"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenGetApproved = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"getCurrentVotes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenGetCurrentVotes = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'getCurrentVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"getPriorVotes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenGetPriorVotes = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'getPriorVotes',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenIsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"isDescriptorLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenIsDescriptorLocked =
  /*#__PURE__*/ createReadContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'isDescriptorLocked',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"isMinterLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenIsMinterLocked = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'isMinterLocked',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"isSeederLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenIsSeederLocked = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'isSeederLocked',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"minter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenMinter = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'minter',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenName = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"nonces"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenNonces = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"noundersDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenNoundersDao = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'noundersDAO',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"numCheckpoints"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenNumCheckpoints = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'numCheckpoints',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenOwner = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"ownerOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenOwnerOf = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"proxyRegistry"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenProxyRegistry = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'proxyRegistry',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"seeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenSeeder = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'seeder',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"seeds"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenSeeds = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'seeds',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenSupportsInterface = /*#__PURE__*/ createReadContract(
  {
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'supportsInterface',
  },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenSymbol = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"tokenByIndex"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenTokenByIndex = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'tokenByIndex',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenTokenOfOwnerByIndex =
  /*#__PURE__*/ createReadContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"tokenURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenTokenUri = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenTotalSupply = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"votesToDelegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const readNounsTokenVotesToDelegate = /*#__PURE__*/ createReadContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'votesToDelegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsToken = /*#__PURE__*/ createWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenApprove = /*#__PURE__*/ createWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenBurn = /*#__PURE__*/ createWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenDelegate = /*#__PURE__*/ createWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'delegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenDelegateBySig = /*#__PURE__*/ createWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'delegateBySig',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"lockDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenLockDescriptor = /*#__PURE__*/ createWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'lockDescriptor',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"lockMinter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenLockMinter = /*#__PURE__*/ createWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'lockMinter',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"lockSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenLockSeeder = /*#__PURE__*/ createWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'lockSeeder',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenMint = /*#__PURE__*/ createWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenSafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setContractURIHash"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenSetContractUriHash =
  /*#__PURE__*/ createWriteContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'setContractURIHash',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenSetDescriptor = /*#__PURE__*/ createWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'setDescriptor',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setMinter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenSetMinter = /*#__PURE__*/ createWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'setMinter',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setNoundersDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenSetNoundersDao = /*#__PURE__*/ createWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'setNoundersDAO',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenSetSeeder = /*#__PURE__*/ createWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'setSeeder',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const writeNounsTokenTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsToken = /*#__PURE__*/ createSimulateContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenApprove = /*#__PURE__*/ createSimulateContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenBurn = /*#__PURE__*/ createSimulateContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenDelegate = /*#__PURE__*/ createSimulateContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'delegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenDelegateBySig =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"lockDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenLockDescriptor =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'lockDescriptor',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"lockMinter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenLockMinter =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'lockMinter',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"lockSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenLockSeeder =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'lockSeeder',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenMint = /*#__PURE__*/ createSimulateContract({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setContractURIHash"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenSetContractUriHash =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'setContractURIHash',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenSetDescriptor =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'setDescriptor',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setMinter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenSetMinter = /*#__PURE__*/ createSimulateContract(
  { abi: nounsTokenAbi, address: nounsTokenAddress, functionName: 'setMinter' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setNoundersDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenSetNoundersDao =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'setNoundersDAO',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"setSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenSetSeeder = /*#__PURE__*/ createSimulateContract(
  { abi: nounsTokenAbi, address: nounsTokenAddress, functionName: 'setSeeder' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nounsTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const simulateNounsTokenTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const watchNounsTokenEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: nounsTokenAbi,
  address: nounsTokenAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const watchNounsTokenApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const watchNounsTokenApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"DelegateChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const watchNounsTokenDelegateChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const watchNounsTokenDelegateVotesChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"DescriptorLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const watchNounsTokenDescriptorLockedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'DescriptorLocked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"DescriptorUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const watchNounsTokenDescriptorUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'DescriptorUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"MinterLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const watchNounsTokenMinterLockedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'MinterLocked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"MinterUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const watchNounsTokenMinterUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'MinterUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"NounBurned"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const watchNounsTokenNounBurnedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'NounBurned',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"NounCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const watchNounsTokenNounCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'NounCreated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"NoundersDAOUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const watchNounsTokenNoundersDaoUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'NoundersDAOUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const watchNounsTokenOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"SeederLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const watchNounsTokenSeederLockedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'SeederLocked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"SeederUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const watchNounsTokenSeederUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'SeederUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4c4674bb72a096855496a7204962297bd7e12b85)
 */
export const watchNounsTokenTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTokenAbi,
    address: nounsTokenAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTreasuryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const watchNounsTreasuryEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: nounsTreasuryAbi,
  address: nounsTreasuryAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTreasuryAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const watchNounsTreasuryAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTreasuryAbi,
    address: nounsTreasuryAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTreasuryAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const watchNounsTreasuryBeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTreasuryAbi,
    address: nounsTreasuryAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nounsTreasuryAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb1a32fc9f9d8b2cf86c068cae13108809547ef71)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07e5d6a1550ad5e597a9b0698a474aa080a2fb28)
 */
export const watchNounsTreasuryUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: nounsTreasuryAbi,
    address: nounsTreasuryAddress,
    eventName: 'Upgraded',
  })
