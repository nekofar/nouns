import 'dotenv/config'
import type { CodegenConfig } from '@graphql-codegen/cli'
import {
  TimestampResolver,
  BigIntResolver,
  ByteResolver,
} from 'graphql-scalars'

const config: CodegenConfig = {
  emitLegacyCommonJSImports: false,
  generates: {
    './src/subgraphs/index.ts': {
      schema: process.env.SUBGRAPH_URL,
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        strictScalars: false,
        scalars: {
          BigInt: BigIntResolver,
          Bytes: ByteResolver,
          Timestamp: TimestampResolver,
        },
        useTypeImports: true,
        namingConvention: {
          transformUnderscore: true,
        },
      },
    },
  },
}

export default config
