import {
  createUseWatchContractEvent,
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LilNounsAuction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const lilNounsAuctionAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_logic', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'error',
    inputs: [{ name: 'impl', internalType: 'address', type: 'address' }],
    name: 'INVALID_UPGRADE',
  },
  { type: 'error', inputs: [], name: 'ONLY_UUPS' },
  { type: 'error', inputs: [], name: 'UNSUPPORTED_UUID' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'impl',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Upgraded',
  },
  { type: 'fallback', stateMutability: 'payable' },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const lilNounsAuctionAddress = {
  1: '0xA2587b1e2626904c8575640512b987Bd3d3B592D',
  11155111: '0x0d8c4d18765AB8808ab6CEE4d7A760e8b93AB20c',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const lilNounsAuctionConfig = {
  address: lilNounsAuctionAddress,
  abi: lilNounsAuctionAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LilNounsDescriptor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const lilNounsDescriptorAbi = [
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
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const lilNounsDescriptorAddress = {
  1: '0xb2a47999b3117c7dD628920ED8e77eBDfB948B68',
  11155111: '0x852f20f0140A4B5Aa29C70bF39C9a85edc2B454E',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const lilNounsDescriptorConfig = {
  address: lilNounsDescriptorAddress,
  abi: lilNounsDescriptorAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LilNounsGovernor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const lilNounsGovernorAbi = [
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const lilNounsGovernorAddress = {
  1: '0x5d2C31ce16924C2a71D317e5BbFd5ce387854039',
  11155111: '0xa7C37f79ff5E6F932147fC69724B6ED432CA6Aa7',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const lilNounsGovernorConfig = {
  address: lilNounsGovernorAddress,
  abi: lilNounsGovernorAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LilNounsToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const lilNounsTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_lilnoundersDAO', internalType: 'address', type: 'address' },
      { name: '_nounsDAO', internalType: 'address', type: 'address' },
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
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'lilnoundersDAO',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'LilNoundersDAOUpdated',
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
        name: 'nounsDAO',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'NounsDAOUpdated',
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
    name: 'lilnoundersDAO',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
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
    name: 'nounsDAO',
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
    inputs: [
      { name: '_lilnoundersDAO', internalType: 'address', type: 'address' },
    ],
    name: 'setLilNoundersDAO',
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
    inputs: [{ name: '_nounsDAO', internalType: 'address', type: 'address' }],
    name: 'setNounsDAO',
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
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const lilNounsTokenAddress = {
  1: '0x4b10701Bfd7BFEdc47d50562b76b436fbB5BdB3B',
  11155111: '0x6e48e79f718776CF412a87e047722dBFda5B465D',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const lilNounsTokenConfig = {
  address: lilNounsTokenAddress,
  abi: lilNounsTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LilNounsTreasury
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const lilNounsTreasuryAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'admin_', internalType: 'address', type: 'address' },
      { name: 'delay_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'txHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'target',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'signature',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'eta', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'CancelTransaction',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'txHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'target',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'signature',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'eta', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ExecuteTransaction',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'NewAdmin',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newDelay',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'NewDelay',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newPendingAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'NewPendingAdmin',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'txHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'target',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'signature',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'eta', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'QueueTransaction',
  },
  { type: 'fallback', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [],
    name: 'GRACE_PERIOD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAXIMUM_DELAY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MINIMUM_DELAY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptAdmin',
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
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'signature', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'eta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'cancelTransaction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'delay',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'signature', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'eta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'executeTransaction',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pendingAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'signature', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'eta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'queueTransaction',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'queuedTransactions',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delay_', internalType: 'uint256', type: 'uint256' }],
    name: 'setDelay',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pendingAdmin_', internalType: 'address', type: 'address' },
    ],
    name: 'setPendingAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const lilNounsTreasuryAddress = {
  1: '0xd5f279ff9EB21c6D40C8f345a66f2751C4eeA1fB',
  11155111: '0xE54f098b1880C536e0083720922b8a365FB403DC',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const lilNounsTreasuryConfig = {
  address: lilNounsTreasuryAddress,
  abi: lilNounsTreasuryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsAuctionAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWatchLilNounsAuctionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsAuctionAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xa2587b1e2626904c8575640512b987bd3d3b592d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0d8c4d18765ab8808ab6cee4d7a760e8b93ab20c)
 */
export const useWatchLilNounsAuctionUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsAuctionAbi,
    address: lilNounsAuctionAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptor = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsDescriptorAbi,
  address: lilNounsDescriptorAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"accessories"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorAccessories =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'accessories',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"accessoryCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorAccessoryCount =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'accessoryCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"arePartsLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorArePartsLocked =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'arePartsLocked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"art"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorArt = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'art',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"backgroundCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorBackgroundCount =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'backgroundCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"backgrounds"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorBackgrounds =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'backgrounds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"baseURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorBaseUri =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'baseURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"bodies"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorBodies =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'bodies',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"bodyCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorBodyCount =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'bodyCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"dataURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorDataUri =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'dataURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"generateSVGImage"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorGenerateSvgImage =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'generateSVGImage',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"genericDataURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorGenericDataUri =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'genericDataURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"getPartsForSeed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorGetPartsForSeed =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'getPartsForSeed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"glasses"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorGlasses =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'glasses',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"glassesCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorGlassesCount =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'glassesCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"headCount"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorHeadCount =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'headCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"heads"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorHeads =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'heads',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"isDataURIEnabled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorIsDataUriEnabled =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'isDataURIEnabled',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"palettes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorPalettes =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'palettes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"renderer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorRenderer =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'renderer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"tokenURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useReadLilNounsDescriptorTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptor = /*#__PURE__*/ createUseWriteContract({
  abi: lilNounsDescriptorAbi,
  address: lilNounsDescriptorAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addAccessories"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddAccessories =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addAccessories',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addAccessoriesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddAccessoriesFromPointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addAccessoriesFromPointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addBackground"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddBackground =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addBackground',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addBodies"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddBodies =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addBodies',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addBodiesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddBodiesFromPointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addBodiesFromPointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addGlasses"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddGlasses =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addGlasses',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addGlassesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddGlassesFromPointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addGlassesFromPointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addHeads"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddHeads =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addHeads',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addHeadsFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddHeadsFromPointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addHeadsFromPointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addManyBackgrounds"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorAddManyBackgrounds =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addManyBackgrounds',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"lockParts"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorLockParts =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'lockParts',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setArt"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorSetArt =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setArt',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setArtDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorSetArtDescriptor =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setArtDescriptor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setArtInflator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorSetArtInflator =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setArtInflator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorSetBaseUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setPalette"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorSetPalette =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setPalette',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setPalettePointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorSetPalettePointer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setPalettePointer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setRenderer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorSetRenderer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setRenderer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"toggleDataURIEnabled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorToggleDataUriEnabled =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'toggleDataURIEnabled',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWriteLilNounsDescriptorTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addAccessories"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddAccessories =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addAccessories',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addAccessoriesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddAccessoriesFromPointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addAccessoriesFromPointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addBackground"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddBackground =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addBackground',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addBodies"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddBodies =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addBodies',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addBodiesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddBodiesFromPointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addBodiesFromPointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addGlasses"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddGlasses =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addGlasses',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addGlassesFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddGlassesFromPointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addGlassesFromPointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addHeads"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddHeads =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addHeads',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addHeadsFromPointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddHeadsFromPointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addHeadsFromPointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"addManyBackgrounds"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorAddManyBackgrounds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'addManyBackgrounds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"lockParts"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorLockParts =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'lockParts',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setArt"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorSetArt =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setArt',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setArtDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorSetArtDescriptor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setArtDescriptor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setArtInflator"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorSetArtInflator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setArtInflator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorSetBaseUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setPalette"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorSetPalette =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setPalette',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setPalettePointer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorSetPalettePointer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setPalettePointer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"setRenderer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorSetRenderer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'setRenderer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"toggleDataURIEnabled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorToggleDataUriEnabled =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'toggleDataURIEnabled',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useSimulateLilNounsDescriptorTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDescriptorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWatchLilNounsDescriptorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `eventName` set to `"ArtUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWatchLilNounsDescriptorArtUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    eventName: 'ArtUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `eventName` set to `"BaseURIUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWatchLilNounsDescriptorBaseUriUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    eventName: 'BaseURIUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `eventName` set to `"DataURIToggled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWatchLilNounsDescriptorDataUriToggledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    eventName: 'DataURIToggled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWatchLilNounsDescriptorOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `eventName` set to `"PartsLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWatchLilNounsDescriptorPartsLockedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    eventName: 'PartsLocked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsDescriptorAbi}__ and `eventName` set to `"RendererUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xb2a47999b3117c7dd628920ed8e77ebdfb948b68)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x852f20f0140a4b5aa29c70bf39c9a85edc2b454e)
 */
export const useWatchLilNounsDescriptorRendererUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsDescriptorAbi,
    address: lilNounsDescriptorAddress,
    eventName: 'RendererUpdated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernor = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsGovernorAbi,
  address: lilNounsGovernorAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorAdmin = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'admin',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"implementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorImplementation =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'implementation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"pendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useReadLilNounsGovernorPendingAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: 'pendingAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernor = /*#__PURE__*/ createUseWriteContract({
  abi: lilNounsGovernorAbi,
  address: lilNounsGovernorAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setImplementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWriteLilNounsGovernorSetImplementation =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setImplementation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `functionName` set to `"_setImplementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useSimulateLilNounsGovernorSetImplementation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    functionName: '_setImplementation',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"NewAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorNewAdminEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'NewAdmin',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"NewImplementation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorNewImplementationEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'NewImplementation',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"NewPendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorNewPendingAdminEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'NewPendingAdmin',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"NewVetoer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorNewVetoerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'NewVetoer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"ProposalCanceled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorProposalCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'ProposalCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"ProposalCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorProposalCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'ProposalCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"ProposalCreatedWithRequirements"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorProposalCreatedWithRequirementsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'ProposalCreatedWithRequirements',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"ProposalExecuted"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorProposalExecutedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'ProposalExecuted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"ProposalQueued"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorProposalQueuedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'ProposalQueued',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"ProposalThresholdBPSSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorProposalThresholdBpsSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'ProposalThresholdBPSSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"ProposalVetoed"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorProposalVetoedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'ProposalVetoed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"QuorumVotesBPSSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorQuorumVotesBpsSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'QuorumVotesBPSSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"VoteCast"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorVoteCastEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'VoteCast',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"VotingDelaySet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorVotingDelaySetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'VotingDelaySet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsGovernorAbi}__ and `eventName` set to `"VotingPeriodSet"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x5d2c31ce16924c2a71d317e5bbfd5ce387854039)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xa7c37f79ff5e6f932147fc69724b6ed432ca6aa7)
 */
export const useWatchLilNounsGovernorVotingPeriodSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsGovernorAbi,
    address: lilNounsGovernorAddress,
    eventName: 'VotingPeriodSet',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsToken = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"DELEGATION_TYPEHASH"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenDelegationTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'DELEGATION_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"DOMAIN_TYPEHASH"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenDomainTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'DOMAIN_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"checkpoints"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenCheckpoints =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'checkpoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"contractURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenContractUri =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'contractURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"dataURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenDataUri = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'dataURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenDecimals = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'decimals',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"delegates"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenDelegates =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'delegates',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"descriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenDescriptor =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'descriptor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"getApproved"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"getCurrentVotes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenGetCurrentVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'getCurrentVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"getPriorVotes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenGetPriorVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'getPriorVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"isDescriptorLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenIsDescriptorLocked =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'isDescriptorLocked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"isMinterLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenIsMinterLocked =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'isMinterLocked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"isSeederLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenIsSeederLocked =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'isSeederLocked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"lilnoundersDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenLilnoundersDao =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'lilnoundersDAO',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"minter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenMinter = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'minter',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenName = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"nonces"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenNonces = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"nounsDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenNounsDao = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'nounsDAO',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"numCheckpoints"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenNumCheckpoints =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'numCheckpoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenOwner = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"ownerOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"proxyRegistry"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenProxyRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'proxyRegistry',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"seeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenSeeder = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'seeder',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"seeds"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenSeeds = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'seeds',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"tokenByIndex"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenTokenByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'tokenByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenTokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"tokenURI"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenTokenUri = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'tokenURI',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"votesToDelegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useReadLilNounsTokenVotesToDelegate =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'votesToDelegate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsToken = /*#__PURE__*/ createUseWriteContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenBurn = /*#__PURE__*/ createUseWriteContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenDelegate =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenDelegateBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"lockDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenLockDescriptor =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'lockDescriptor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"lockMinter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenLockMinter =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'lockMinter',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"lockSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenLockSeeder =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'lockSeeder',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenMint = /*#__PURE__*/ createUseWriteContract({
  abi: lilNounsTokenAbi,
  address: lilNounsTokenAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setContractURIHash"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenSetContractUriHash =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setContractURIHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenSetDescriptor =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setDescriptor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setLilNoundersDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenSetLilNoundersDao =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setLilNoundersDAO',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setMinter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenSetMinter =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setMinter',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setNounsDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenSetNounsDao =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setNounsDAO',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenSetSeeder =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setSeeder',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWriteLilNounsTokenTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsToken = /*#__PURE__*/ createUseSimulateContract(
  { abi: lilNounsTokenAbi, address: lilNounsTokenAddress },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenDelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"lockDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenLockDescriptor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'lockDescriptor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"lockMinter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenLockMinter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'lockMinter',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"lockSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenLockSeeder =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'lockSeeder',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setContractURIHash"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenSetContractUriHash =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setContractURIHash',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setDescriptor"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenSetDescriptor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setDescriptor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setLilNoundersDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenSetLilNoundersDao =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setLilNoundersDAO',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setMinter"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenSetMinter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setMinter',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setNounsDAO"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenSetNounsDao =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setNounsDAO',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"setSeeder"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenSetSeeder =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'setSeeder',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useSimulateLilNounsTokenTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"DelegateChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenDelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenDelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"DescriptorLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenDescriptorLockedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'DescriptorLocked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"DescriptorUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenDescriptorUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'DescriptorUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"LilNoundersDAOUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenLilNoundersDaoUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'LilNoundersDAOUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"MinterLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenMinterLockedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'MinterLocked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"MinterUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenMinterUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'MinterUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"NounBurned"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenNounBurnedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'NounBurned',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"NounCreated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenNounCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'NounCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"NounsDAOUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenNounsDaoUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'NounsDAOUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"SeederLocked"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenSeederLockedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'SeederLocked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"SeederUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenSeederUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'SeederUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x6e48e79f718776cf412a87e047722dbfda5b465d)
 */
export const useWatchLilNounsTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTokenAbi,
    address: lilNounsTokenAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useReadLilNounsTreasury = /*#__PURE__*/ createUseReadContract({
  abi: lilNounsTreasuryAbi,
  address: lilNounsTreasuryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"GRACE_PERIOD"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useReadLilNounsTreasuryGracePeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'GRACE_PERIOD',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"MAXIMUM_DELAY"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useReadLilNounsTreasuryMaximumDelay =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'MAXIMUM_DELAY',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"MINIMUM_DELAY"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useReadLilNounsTreasuryMinimumDelay =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'MINIMUM_DELAY',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"admin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useReadLilNounsTreasuryAdmin = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'admin',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"delay"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useReadLilNounsTreasuryDelay = /*#__PURE__*/ createUseReadContract(
  {
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'delay',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"pendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useReadLilNounsTreasuryPendingAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'pendingAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"queuedTransactions"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useReadLilNounsTreasuryQueuedTransactions =
  /*#__PURE__*/ createUseReadContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'queuedTransactions',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWriteLilNounsTreasury = /*#__PURE__*/ createUseWriteContract({
  abi: lilNounsTreasuryAbi,
  address: lilNounsTreasuryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"acceptAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWriteLilNounsTreasuryAcceptAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'acceptAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"cancelTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWriteLilNounsTreasuryCancelTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'cancelTransaction',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"executeTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWriteLilNounsTreasuryExecuteTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'executeTransaction',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"queueTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWriteLilNounsTreasuryQueueTransaction =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'queueTransaction',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"setDelay"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWriteLilNounsTreasurySetDelay =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'setDelay',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"setPendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWriteLilNounsTreasurySetPendingAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'setPendingAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useSimulateLilNounsTreasury =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"acceptAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useSimulateLilNounsTreasuryAcceptAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'acceptAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"cancelTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useSimulateLilNounsTreasuryCancelTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'cancelTransaction',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"executeTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useSimulateLilNounsTreasuryExecuteTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'executeTransaction',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"queueTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useSimulateLilNounsTreasuryQueueTransaction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'queueTransaction',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"setDelay"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useSimulateLilNounsTreasurySetDelay =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'setDelay',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `functionName` set to `"setPendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useSimulateLilNounsTreasurySetPendingAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    functionName: 'setPendingAdmin',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTreasuryAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWatchLilNounsTreasuryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `eventName` set to `"CancelTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWatchLilNounsTreasuryCancelTransactionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    eventName: 'CancelTransaction',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `eventName` set to `"ExecuteTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWatchLilNounsTreasuryExecuteTransactionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    eventName: 'ExecuteTransaction',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `eventName` set to `"NewAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWatchLilNounsTreasuryNewAdminEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    eventName: 'NewAdmin',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `eventName` set to `"NewDelay"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWatchLilNounsTreasuryNewDelayEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    eventName: 'NewDelay',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `eventName` set to `"NewPendingAdmin"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWatchLilNounsTreasuryNewPendingAdminEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    eventName: 'NewPendingAdmin',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lilNounsTreasuryAbi}__ and `eventName` set to `"QueueTransaction"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xd5f279ff9eb21c6d40c8f345a66f2751c4eea1fb)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xe54f098b1880c536e0083720922b8a365fb403dc)
 */
export const useWatchLilNounsTreasuryQueueTransactionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lilNounsTreasuryAbi,
    address: lilNounsTreasuryAddress,
    eventName: 'QueueTransaction',
  })
