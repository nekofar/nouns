## [1.0.0-alpha.27] - 2025-11-16

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies
## [1.0.0-alpha.26] - 2025-11-09

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies
## [1.0.0-alpha.25] - 2025-11-04

### 🚜 Refactor

- *(build)* Replace `tsup` with `tsdown`
- *(build)* Replace `tsup` with `tsdown`
- *(build)* Update `build` script to use `tsdown`
- *(build)* Update `exports` for ESM and CJS support
## [1.0.0-alpha.24] - 2025-10-21

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies
## [1.0.0-alpha.23] - 2025-10-18

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies
## [1.0.0-alpha.22] - 2025-10-14

### 📚 Documentation

- *(changelog)* Regenerate with new template

### ⚙️ Miscellaneous Tasks

- *(config)* Update git-cliff configuration
- *(config)* Ignore ci deps commits
## [1.0.0-alpha.20] - 2025-10-03

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies
## [1.0.0-alpha.19] - 2025-09-25

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies
## [1.0.0-alpha.18] - 2025-09-17

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies
## [1.0.0-alpha.17] - 2025-09-17

### ⚙️ Miscellaneous Tasks

- *(gitignore)* Remove `pnpm-lock.yaml` from ignored files
- *(workflows)* Simplify caching in GitHub Actions
## [1.0.0-alpha.16] - 2025-07-20

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies
## [1.0.0-alpha.15] - 2025-05-17

### 🚀 Features

- *(config)* Add `NounsClientRewards` contract details
- *(contracts)* Add `nounsClientRewardsAbi` support
## [1.0.0-alpha.14] - 2025-05-10

### 🐛 Bug Fixes

- *(scripts)* Adjust `prebuild` logic for CI environments
## [1.0.0-alpha.13] - 2025-05-10

### 🐛 Bug Fixes

- *(scripts)* Correct `prebuild` logic for CI detection
## [1.0.0-alpha.12] - 2025-05-10

### 🚀 Features

- *(wagmi)* Add new contracts to configuration
- *(contracts)* Add `nounsPayer`, `nounsStreamFactory`, and `nounsTokenBuyer` configs
## [1.0.0-alpha.11] - 2025-05-07

### 📚 Documentation

- *(readme)* Add npm version badge

### ⚙️ Miscellaneous Tasks

- *(workflows)* Cache wagmi ABI cache in build workflow
- *(wagmi)* Add `cacheDuration` for Etherscan configuration
## [1.0.0-alpha.10] - 2025-05-03

### ⚙️ Miscellaneous Tasks

- *(cliff)* Update config to skip specific commit types
## [1.0.0-alpha.9] - 2025-04-25

### 🧪 Testing

- *(src)* Add unit test for `version` export

### ⚙️ Miscellaneous Tasks

- *(config)* Exclude test files from build
## [1.0.0-alpha.8] - 2025-04-21

### 🐛 Bug Fixes

- *(config)* Update `NounsAuction` to `NounsAuctionHouse`

### 🚜 Refactor

- *(contracts)* Rename `nounsAuction` to `nounsAuctionHouse`
## [1.0.0-alpha.7] - 2025-04-20

### ⚙️ Miscellaneous Tasks

- *(files)* Exclude test files from package output
## [1.0.0-alpha.6] - 2025-04-20

### 🚜 Refactor

- *(tsup)* Simplify configuration structure
## [1.0.0-alpha.5] - 2025-04-20

### 🚀 Features

- *(tsup)* Enable sourcemap generation
- *(build)* Enable terser minification and remove comments

### 🚜 Refactor

- *(tsup)* Simplify `entry` configuration

### ⚙️ Miscellaneous Tasks

- *(build)* Disable dts resolution in tsup config
- *(build)* Remove `cjs` format from build output
## [1.0.0-alpha.4] - 2025-04-20

### 🚜 Refactor

- *(tsup)* Remove `external` and `noExternal` config
## [1.0.0-alpha.3] - 2025-04-05

### 🚀 Features

- *(config)* Enable `tryFetchProxyImplementation`
- *(contracts)* Enhance contract definitions and events
- *(tsconfig)* Enable `emitDeclarationOnly` option

### ⚙️ Miscellaneous Tasks

- *(build)* Increase memory for `build` script
- *(build)* Update `dts` configuration in build script
## [1.0.0-alpha.2] - 2025-04-05

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies
## [1.0.0-alpha.1] - 2025-04-02

### 🐛 Bug Fixes

- Solve some minor issues and update dependencies
## [1.0.0-alpha.0] - 2025-04-02

### 🚀 Features

- *(index)* Add initial implementation
- *(subgraphs)* Add schema types and resolvers for GraphQL
- *(index)* Export `version` from package.json
- *(build)* Enhance build configuration with splitting
- *(contracts)* Add LilNouns contract abstractions
- *(wagmi)* Add wagmi config with etherscan integration
- *(tsup)* Add entry point for `contracts`
- *(contracts)* Add new utility methods for LilNouns
- *(contracts)* Add config and ABIs for Nouns contracts

### 🐛 Bug Fixes

- *(tsup)* Disable `splitting` in the build config
- Solve some minor issues and update dependencies

### 🚜 Refactor

- *(contracts)* Remove unused contract definitions

### 📚 Documentation

- *(readme)* Add project overview and badges
- *(readme)* Update project name and badge links

### ⚙️ Miscellaneous Tasks

- Add `.gitignore` for project-wide exclusions
- *(package)* Set `private` to false
- Add `.editorconfig` to standardize code formatting
- *(build)* Add `tsconfig.json` for TypeScript configuration
- *(build)* Add `tsup` config for bundling
- Add Apache 2.0 license
- *(scripts)* Add build, format, lint, and clean commands
- *(scripts)* Update build and cleanup scripts
- *(tsconfig)* Enable `resolveJsonModule` in config
- *(scripts)* Update build scripts for improved code generation
- *(ci)* Add GitHub issue templates
- *(workflows)* Add build, test, and release pipeline
- *(git-flow)* Add Git Flow workflow for branch PR creation
- *(dependabot)* Add configuration for dependency updates
- *(ci)* Add funding configuration
- *(stale)* Add GitHub Actions config for stale issues
- *(build)* Add env vars for `SUBGRAPH_URL` and `ETHERSCAN_API_KEY`
- *(package)* Update metadata in `package.json`
- *(package)* Update metadata fields in `package.json`
- *(workflows)* Remove `guard` job from build workflow
- *(docs)* Remove changelog file
- *(wagmi)* Update contract names and addresses
