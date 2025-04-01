import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: "BigInt"; output: "BigInt"; }
  Bytes: { input: "Byte"; output: "Byte"; }
  Int8: { input: any; output: any; }
  Timestamp: { input: "Timestamp"; output: "Timestamp"; }
};

export type Account = {
  __typename?: 'Account';
  /** Delegate address of the token holder which will participate in votings. Delegates don't need to hold any tokens and can even be the token holder itself. */
  delegate?: Maybe<Delegate>;
  /** An Account is any address that holds any amount of Nouns, the id used is the blockchain address. */
  id: Scalars['ID']['output'];
  /** The Nouns owned by this account */
  nouns: Array<Noun>;
  /** Noun balance of this address expressed as a BigInt normalized value for the Nouns ERC721 Token */
  tokenBalance: Scalars['BigInt']['output'];
  /** Noun balance of this address expressed in the smallest unit of the Nouns ERC721 Token */
  tokenBalanceRaw: Scalars['BigInt']['output'];
  /** Total amount of Nouns ever held by this address expressed as a BigInt normalized value for the Nouns ERC721 Token */
  totalTokensHeld: Scalars['BigInt']['output'];
  /** Total amount of Nouns ever held by this address expressed in the smallest unit of the Nouns ERC721 Token */
  totalTokensHeldRaw: Scalars['BigInt']['output'];
};


export type AccountNounsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NounOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NounFilter>;
};

export type AccountFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AccountFilter>>>;
  delegate?: InputMaybe<Scalars['String']['input']>;
  delegate_?: InputMaybe<DelegateFilter>;
  delegate_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_gt?: InputMaybe<Scalars['String']['input']>;
  delegate_gte?: InputMaybe<Scalars['String']['input']>;
  delegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_lt?: InputMaybe<Scalars['String']['input']>;
  delegate_lte?: InputMaybe<Scalars['String']['input']>;
  delegate_not?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nouns?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_?: InputMaybe<NounFilter>;
  nouns_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_not?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AccountFilter>>>;
  tokenBalance?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalanceRaw?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalanceRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalanceRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalanceRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenBalanceRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalanceRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalanceRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalanceRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensHeld?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeldRaw?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeldRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeldRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeldRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensHeldRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeldRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeldRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeldRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensHeld_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeld_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeld_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokensHeld_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeld_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeld_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokensHeld_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum AccountOrderBy {
  Delegate = 'delegate',
  DelegateDelegatedVotes = 'delegate__delegatedVotes',
  DelegateDelegatedVotesRaw = 'delegate__delegatedVotesRaw',
  DelegateId = 'delegate__id',
  DelegateTokenHoldersRepresentedAmount = 'delegate__tokenHoldersRepresentedAmount',
  Id = 'id',
  Nouns = 'nouns',
  TokenBalance = 'tokenBalance',
  TokenBalanceRaw = 'tokenBalanceRaw',
  TotalTokensHeld = 'totalTokensHeld',
  TotalTokensHeldRaw = 'totalTokensHeldRaw'
}

export enum AggregationInterval {
  Day = 'day',
  Hour = 'hour'
}

export type Auction = {
  __typename?: 'Auction';
  /** The current highest bid amount */
  amount: Scalars['BigInt']['output'];
  /** The account with the current highest bid */
  bidder?: Maybe<Account>;
  /** The auction bids */
  bids: Array<Bid>;
  /** The time that the auction is scheduled to end */
  endTime: Scalars['BigInt']['output'];
  /** The Noun's ERC721 token id */
  id: Scalars['ID']['output'];
  /** The Noun */
  noun?: Maybe<Noun>;
  /** Whether or not the auction has been settled */
  settled: Scalars['Boolean']['output'];
  /** The time that the auction started */
  startTime: Scalars['BigInt']['output'];
  /** Whether the auction uses VRGDA */
  vrgda: Scalars['Boolean']['output'];
};


export type AuctionBidsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BidOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BidFilter>;
};

export type AuctionFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AuctionFilter>>>;
  bidder?: InputMaybe<Scalars['String']['input']>;
  bidder_?: InputMaybe<AccountFilter>;
  bidder_contains?: InputMaybe<Scalars['String']['input']>;
  bidder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_ends_with?: InputMaybe<Scalars['String']['input']>;
  bidder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_gt?: InputMaybe<Scalars['String']['input']>;
  bidder_gte?: InputMaybe<Scalars['String']['input']>;
  bidder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bidder_lt?: InputMaybe<Scalars['String']['input']>;
  bidder_lte?: InputMaybe<Scalars['String']['input']>;
  bidder_not?: InputMaybe<Scalars['String']['input']>;
  bidder_not_contains?: InputMaybe<Scalars['String']['input']>;
  bidder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  bidder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bidder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  bidder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_starts_with?: InputMaybe<Scalars['String']['input']>;
  bidder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bids_?: InputMaybe<BidFilter>;
  endTime?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  noun?: InputMaybe<Scalars['String']['input']>;
  noun_?: InputMaybe<NounFilter>;
  noun_contains?: InputMaybe<Scalars['String']['input']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_gt?: InputMaybe<Scalars['String']['input']>;
  noun_gte?: InputMaybe<Scalars['String']['input']>;
  noun_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_lt?: InputMaybe<Scalars['String']['input']>;
  noun_lte?: InputMaybe<Scalars['String']['input']>;
  noun_not?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AuctionFilter>>>;
  settled?: InputMaybe<Scalars['Boolean']['input']>;
  settled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  settled_not?: InputMaybe<Scalars['Boolean']['input']>;
  settled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  startTime?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vrgda?: InputMaybe<Scalars['Boolean']['input']>;
  vrgda_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  vrgda_not?: InputMaybe<Scalars['Boolean']['input']>;
  vrgda_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export enum AuctionOrderBy {
  Amount = 'amount',
  Bidder = 'bidder',
  BidderId = 'bidder__id',
  BidderTokenBalance = 'bidder__tokenBalance',
  BidderTokenBalanceRaw = 'bidder__tokenBalanceRaw',
  BidderTotalTokensHeld = 'bidder__totalTokensHeld',
  BidderTotalTokensHeldRaw = 'bidder__totalTokensHeldRaw',
  Bids = 'bids',
  EndTime = 'endTime',
  Id = 'id',
  Noun = 'noun',
  NounId = 'noun__id',
  Settled = 'settled',
  StartTime = 'startTime',
  Vrgda = 'vrgda'
}

export type Bid = {
  __typename?: 'Bid';
  /** Bid amount */
  amount: Scalars['BigInt']['output'];
  /** The auction being bid in */
  auction: Auction;
  /** Bidder account */
  bidder?: Maybe<Account>;
  /** Block number of the bid */
  blockNumber: Scalars['BigInt']['output'];
  /** The timestamp of the block the bid is in */
  blockTimestamp: Scalars['BigInt']['output'];
  /** The comment left by the bidder */
  comment?: Maybe<Scalars['String']['output']>;
  /** Bid transaction hash */
  id: Scalars['ID']['output'];
  /** The Noun being bid on */
  noun?: Maybe<Noun>;
  /** Transaction hash for the bid */
  txHash: Scalars['Bytes']['output'];
  /** Index of transaction within block */
  txIndex: Scalars['BigInt']['output'];
};

export type BidFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<BidFilter>>>;
  auction?: InputMaybe<Scalars['String']['input']>;
  auction_?: InputMaybe<AuctionFilter>;
  auction_contains?: InputMaybe<Scalars['String']['input']>;
  auction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_ends_with?: InputMaybe<Scalars['String']['input']>;
  auction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_gt?: InputMaybe<Scalars['String']['input']>;
  auction_gte?: InputMaybe<Scalars['String']['input']>;
  auction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  auction_lt?: InputMaybe<Scalars['String']['input']>;
  auction_lte?: InputMaybe<Scalars['String']['input']>;
  auction_not?: InputMaybe<Scalars['String']['input']>;
  auction_not_contains?: InputMaybe<Scalars['String']['input']>;
  auction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  auction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  auction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  auction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_starts_with?: InputMaybe<Scalars['String']['input']>;
  auction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder?: InputMaybe<Scalars['String']['input']>;
  bidder_?: InputMaybe<AccountFilter>;
  bidder_contains?: InputMaybe<Scalars['String']['input']>;
  bidder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_ends_with?: InputMaybe<Scalars['String']['input']>;
  bidder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_gt?: InputMaybe<Scalars['String']['input']>;
  bidder_gte?: InputMaybe<Scalars['String']['input']>;
  bidder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bidder_lt?: InputMaybe<Scalars['String']['input']>;
  bidder_lte?: InputMaybe<Scalars['String']['input']>;
  bidder_not?: InputMaybe<Scalars['String']['input']>;
  bidder_not_contains?: InputMaybe<Scalars['String']['input']>;
  bidder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  bidder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bidder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  bidder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bidder_starts_with?: InputMaybe<Scalars['String']['input']>;
  bidder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  comment?: InputMaybe<Scalars['String']['input']>;
  comment_contains?: InputMaybe<Scalars['String']['input']>;
  comment_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  comment_ends_with?: InputMaybe<Scalars['String']['input']>;
  comment_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  comment_gt?: InputMaybe<Scalars['String']['input']>;
  comment_gte?: InputMaybe<Scalars['String']['input']>;
  comment_in?: InputMaybe<Array<Scalars['String']['input']>>;
  comment_lt?: InputMaybe<Scalars['String']['input']>;
  comment_lte?: InputMaybe<Scalars['String']['input']>;
  comment_not?: InputMaybe<Scalars['String']['input']>;
  comment_not_contains?: InputMaybe<Scalars['String']['input']>;
  comment_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  comment_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  comment_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  comment_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  comment_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  comment_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  comment_starts_with?: InputMaybe<Scalars['String']['input']>;
  comment_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  noun?: InputMaybe<Scalars['String']['input']>;
  noun_?: InputMaybe<NounFilter>;
  noun_contains?: InputMaybe<Scalars['String']['input']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_gt?: InputMaybe<Scalars['String']['input']>;
  noun_gte?: InputMaybe<Scalars['String']['input']>;
  noun_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_lt?: InputMaybe<Scalars['String']['input']>;
  noun_lte?: InputMaybe<Scalars['String']['input']>;
  noun_not?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<BidFilter>>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txIndex?: InputMaybe<Scalars['BigInt']['input']>;
  txIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  txIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum BidOrderBy {
  Amount = 'amount',
  Auction = 'auction',
  AuctionAmount = 'auction__amount',
  AuctionEndTime = 'auction__endTime',
  AuctionId = 'auction__id',
  AuctionSettled = 'auction__settled',
  AuctionStartTime = 'auction__startTime',
  AuctionVrgda = 'auction__vrgda',
  Bidder = 'bidder',
  BidderId = 'bidder__id',
  BidderTokenBalance = 'bidder__tokenBalance',
  BidderTokenBalanceRaw = 'bidder__tokenBalanceRaw',
  BidderTotalTokensHeld = 'bidder__totalTokensHeld',
  BidderTotalTokensHeldRaw = 'bidder__totalTokensHeldRaw',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Comment = 'comment',
  Id = 'id',
  Noun = 'noun',
  NounId = 'noun__id',
  TxHash = 'txHash',
  TxIndex = 'txIndex'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type BlockHeight = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Delegate = {
  __typename?: 'Delegate';
  /** Amount of votes delegated to this delegate to be used on proposal votings expressed as a BigInt normalized value for the Nouns ERC721 Token */
  delegatedVotes: Scalars['BigInt']['output'];
  /** Amount of votes delegated to this delegate to be used on proposal votings expressed in the smallest unit of the Nouns ERC721 Token */
  delegatedVotesRaw: Scalars['BigInt']['output'];
  /** A Delegate is any address that has been delegated with voting tokens by a token holder, id is the blockchain address of said delegate */
  id: Scalars['ID']['output'];
  /** Nouns that this delegate represents */
  nounsRepresented: Array<Noun>;
  /** Proposals that the delegate has created */
  proposals: Array<Proposal>;
  /** Token holders that this delegate represents */
  tokenHoldersRepresented: Array<Account>;
  tokenHoldersRepresentedAmount: Scalars['Int']['output'];
  /** Votes that a delegate has made in different proposals */
  votes: Array<Vote>;
};


export type DelegateNounsRepresentedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NounOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NounFilter>;
};


export type DelegateProposalsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProposalOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProposalFilter>;
};


export type DelegateTokenHoldersRepresentedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountFilter>;
};


export type DelegateVotesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VoteOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VoteFilter>;
};

export type DelegateFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DelegateFilter>>>;
  delegatedVotes?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedVotesRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedVotes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedVotes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_not?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nounsRepresented?: InputMaybe<Array<Scalars['String']['input']>>;
  nounsRepresented_?: InputMaybe<NounFilter>;
  nounsRepresented_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  nounsRepresented_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  nounsRepresented_not?: InputMaybe<Array<Scalars['String']['input']>>;
  nounsRepresented_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  nounsRepresented_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DelegateFilter>>>;
  proposals_?: InputMaybe<ProposalFilter>;
  tokenHoldersRepresentedAmount?: InputMaybe<Scalars['Int']['input']>;
  tokenHoldersRepresentedAmount_gt?: InputMaybe<Scalars['Int']['input']>;
  tokenHoldersRepresentedAmount_gte?: InputMaybe<Scalars['Int']['input']>;
  tokenHoldersRepresentedAmount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokenHoldersRepresentedAmount_lt?: InputMaybe<Scalars['Int']['input']>;
  tokenHoldersRepresentedAmount_lte?: InputMaybe<Scalars['Int']['input']>;
  tokenHoldersRepresentedAmount_not?: InputMaybe<Scalars['Int']['input']>;
  tokenHoldersRepresentedAmount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokenHoldersRepresented_?: InputMaybe<AccountFilter>;
  votes_?: InputMaybe<VoteFilter>;
};

export enum DelegateOrderBy {
  DelegatedVotes = 'delegatedVotes',
  DelegatedVotesRaw = 'delegatedVotesRaw',
  Id = 'id',
  NounsRepresented = 'nounsRepresented',
  Proposals = 'proposals',
  TokenHoldersRepresented = 'tokenHoldersRepresented',
  TokenHoldersRepresentedAmount = 'tokenHoldersRepresentedAmount',
  Votes = 'votes'
}

export type DelegationEvent = {
  __typename?: 'DelegationEvent';
  /** Block number of the event */
  blockNumber: Scalars['BigInt']['output'];
  /** The timestamp of the block the event is in */
  blockTimestamp: Scalars['BigInt']['output'];
  /** Current delegator address */
  delegator: Account;
  /** The txn hash of this event + nounId */
  id: Scalars['ID']['output'];
  /** New delegate address */
  newDelegate: Delegate;
  /** The Noun being delegated */
  noun: Noun;
  /** Previous delegate address */
  previousDelegate: Delegate;
};

export type DelegationEventFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DelegationEventFilter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  delegator_?: InputMaybe<AccountFilter>;
  delegator_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_gt?: InputMaybe<Scalars['String']['input']>;
  delegator_gte?: InputMaybe<Scalars['String']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_lt?: InputMaybe<Scalars['String']['input']>;
  delegator_lte?: InputMaybe<Scalars['String']['input']>;
  delegator_not?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  newDelegate?: InputMaybe<Scalars['String']['input']>;
  newDelegate_?: InputMaybe<DelegateFilter>;
  newDelegate_contains?: InputMaybe<Scalars['String']['input']>;
  newDelegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newDelegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  newDelegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newDelegate_gt?: InputMaybe<Scalars['String']['input']>;
  newDelegate_gte?: InputMaybe<Scalars['String']['input']>;
  newDelegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newDelegate_lt?: InputMaybe<Scalars['String']['input']>;
  newDelegate_lte?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newDelegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newDelegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newDelegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  newDelegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun?: InputMaybe<Scalars['String']['input']>;
  noun_?: InputMaybe<NounFilter>;
  noun_contains?: InputMaybe<Scalars['String']['input']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_gt?: InputMaybe<Scalars['String']['input']>;
  noun_gte?: InputMaybe<Scalars['String']['input']>;
  noun_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_lt?: InputMaybe<Scalars['String']['input']>;
  noun_lte?: InputMaybe<Scalars['String']['input']>;
  noun_not?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<DelegationEventFilter>>>;
  previousDelegate?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_?: InputMaybe<DelegateFilter>;
  previousDelegate_contains?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_ends_with?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_gt?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_gte?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_in?: InputMaybe<Array<Scalars['String']['input']>>;
  previousDelegate_lt?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_lte?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_not?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_not_contains?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  previousDelegate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_starts_with?: InputMaybe<Scalars['String']['input']>;
  previousDelegate_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum DelegationEventOrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Delegator = 'delegator',
  DelegatorId = 'delegator__id',
  DelegatorTokenBalance = 'delegator__tokenBalance',
  DelegatorTokenBalanceRaw = 'delegator__tokenBalanceRaw',
  DelegatorTotalTokensHeld = 'delegator__totalTokensHeld',
  DelegatorTotalTokensHeldRaw = 'delegator__totalTokensHeldRaw',
  Id = 'id',
  NewDelegate = 'newDelegate',
  NewDelegateDelegatedVotes = 'newDelegate__delegatedVotes',
  NewDelegateDelegatedVotesRaw = 'newDelegate__delegatedVotesRaw',
  NewDelegateId = 'newDelegate__id',
  NewDelegateTokenHoldersRepresentedAmount = 'newDelegate__tokenHoldersRepresentedAmount',
  Noun = 'noun',
  NounId = 'noun__id',
  PreviousDelegate = 'previousDelegate',
  PreviousDelegateDelegatedVotes = 'previousDelegate__delegatedVotes',
  PreviousDelegateDelegatedVotesRaw = 'previousDelegate__delegatedVotesRaw',
  PreviousDelegateId = 'previousDelegate__id',
  PreviousDelegateTokenHoldersRepresentedAmount = 'previousDelegate__tokenHoldersRepresentedAmount'
}

export type DynamicQuorumParams = {
  __typename?: 'DynamicQuorumParams';
  /** The block from which proposals are using DQ, based on when we first see configuration being set */
  dynamicQuorumStartBlock?: Maybe<Scalars['BigInt']['output']>;
  /** Unique entity used to store the latest dymanic quorum params */
  id: Scalars['ID']['output'];
  /** Max quorum basis points */
  maxQuorumVotesBPS: Scalars['Int']['output'];
  /** Min quorum basis points */
  minQuorumVotesBPS: Scalars['Int']['output'];
  /** The dynamic quorum coefficient */
  quorumCoefficient: Scalars['BigInt']['output'];
};

export type DynamicQuorumParamsFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DynamicQuorumParamsFilter>>>;
  dynamicQuorumStartBlock?: InputMaybe<Scalars['BigInt']['input']>;
  dynamicQuorumStartBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  dynamicQuorumStartBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  dynamicQuorumStartBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dynamicQuorumStartBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  dynamicQuorumStartBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  dynamicQuorumStartBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  dynamicQuorumStartBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  maxQuorumVotesBPS?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_gt?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_gte?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  maxQuorumVotesBPS_lt?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_lte?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_not?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  minQuorumVotesBPS?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_gt?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_gte?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  minQuorumVotesBPS_lt?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_lte?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_not?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<DynamicQuorumParamsFilter>>>;
  quorumCoefficient?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quorumCoefficient_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_not?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum DynamicQuorumParamsOrderBy {
  DynamicQuorumStartBlock = 'dynamicQuorumStartBlock',
  Id = 'id',
  MaxQuorumVotesBps = 'maxQuorumVotesBPS',
  MinQuorumVotesBps = 'minQuorumVotesBPS',
  QuorumCoefficient = 'quorumCoefficient'
}

export type Governance = {
  __typename?: 'Governance';
  /** Total number of delegates participating on the governance currently */
  currentDelegates: Scalars['BigInt']['output'];
  /** Total number of token holders currently */
  currentTokenHolders: Scalars['BigInt']['output'];
  /** Total number of votes delegated expressed as a BigInt normalized value for the Nouns ERC721 Token */
  delegatedVotes: Scalars['BigInt']['output'];
  /** Total number of votes delegated expressed in the smallest unit of the Nouns ERC721 Token */
  delegatedVotesRaw: Scalars['BigInt']['output'];
  /** Unique entity used to keep track of common aggregated data */
  id: Scalars['ID']['output'];
  /** Number of proposals created */
  proposals: Scalars['BigInt']['output'];
  /** Number of proposals currently queued for execution */
  proposalsQueued: Scalars['BigInt']['output'];
  /** Total number of delegates that held delegated votes */
  totalDelegates: Scalars['BigInt']['output'];
  /** Total number of token holders */
  totalTokenHolders: Scalars['BigInt']['output'];
};

export type GovernanceFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GovernanceFilter>>>;
  currentDelegates?: InputMaybe<Scalars['BigInt']['input']>;
  currentDelegates_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentDelegates_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentDelegates_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentDelegates_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentDelegates_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentDelegates_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentDelegates_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentTokenHolders?: InputMaybe<Scalars['BigInt']['input']>;
  currentTokenHolders_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentTokenHolders_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentTokenHolders_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentTokenHolders_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentTokenHolders_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentTokenHolders_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentTokenHolders_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedVotes?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedVotesRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedVotes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedVotes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_not?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedVotes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<GovernanceFilter>>>;
  proposals?: InputMaybe<Scalars['BigInt']['input']>;
  proposalsQueued?: InputMaybe<Scalars['BigInt']['input']>;
  proposalsQueued_gt?: InputMaybe<Scalars['BigInt']['input']>;
  proposalsQueued_gte?: InputMaybe<Scalars['BigInt']['input']>;
  proposalsQueued_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposalsQueued_lt?: InputMaybe<Scalars['BigInt']['input']>;
  proposalsQueued_lte?: InputMaybe<Scalars['BigInt']['input']>;
  proposalsQueued_not?: InputMaybe<Scalars['BigInt']['input']>;
  proposalsQueued_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposals_gt?: InputMaybe<Scalars['BigInt']['input']>;
  proposals_gte?: InputMaybe<Scalars['BigInt']['input']>;
  proposals_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposals_lt?: InputMaybe<Scalars['BigInt']['input']>;
  proposals_lte?: InputMaybe<Scalars['BigInt']['input']>;
  proposals_not?: InputMaybe<Scalars['BigInt']['input']>;
  proposals_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegates?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegates_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegates_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegates_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegates_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegates_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegates_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegates_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokenHolders?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokenHolders_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokenHolders_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokenHolders_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTokenHolders_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokenHolders_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokenHolders_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTokenHolders_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum GovernanceOrderBy {
  CurrentDelegates = 'currentDelegates',
  CurrentTokenHolders = 'currentTokenHolders',
  DelegatedVotes = 'delegatedVotes',
  DelegatedVotesRaw = 'delegatedVotesRaw',
  Id = 'id',
  Proposals = 'proposals',
  ProposalsQueued = 'proposalsQueued',
  TotalDelegates = 'totalDelegates',
  TotalTokenHolders = 'totalTokenHolders'
}

export type Noun = {
  __typename?: 'Noun';
  /** The Noun's ERC721 token id */
  id: Scalars['ID']['output'];
  /** The owner of the Noun */
  owner: Account;
  /** The seed used to determine the Noun's traits */
  seed?: Maybe<Seed>;
  /** Historical votes for the Noun */
  votes: Array<Vote>;
};


export type NounVotesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VoteOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VoteFilter>;
};

export type NounFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NounFilter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<NounFilter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<AccountFilter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  seed?: InputMaybe<Scalars['String']['input']>;
  seed_?: InputMaybe<SeedFilter>;
  seed_contains?: InputMaybe<Scalars['String']['input']>;
  seed_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  seed_ends_with?: InputMaybe<Scalars['String']['input']>;
  seed_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  seed_gt?: InputMaybe<Scalars['String']['input']>;
  seed_gte?: InputMaybe<Scalars['String']['input']>;
  seed_in?: InputMaybe<Array<Scalars['String']['input']>>;
  seed_lt?: InputMaybe<Scalars['String']['input']>;
  seed_lte?: InputMaybe<Scalars['String']['input']>;
  seed_not?: InputMaybe<Scalars['String']['input']>;
  seed_not_contains?: InputMaybe<Scalars['String']['input']>;
  seed_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  seed_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  seed_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  seed_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  seed_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  seed_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  seed_starts_with?: InputMaybe<Scalars['String']['input']>;
  seed_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  votes_?: InputMaybe<VoteFilter>;
};

export enum NounOrderBy {
  Id = 'id',
  Owner = 'owner',
  OwnerId = 'owner__id',
  OwnerTokenBalance = 'owner__tokenBalance',
  OwnerTokenBalanceRaw = 'owner__tokenBalanceRaw',
  OwnerTotalTokensHeld = 'owner__totalTokensHeld',
  OwnerTotalTokensHeldRaw = 'owner__totalTokensHeldRaw',
  Seed = 'seed',
  SeedAccessory = 'seed__accessory',
  SeedBackground = 'seed__background',
  SeedBody = 'seed__body',
  SeedGlasses = 'seed__glasses',
  SeedHead = 'seed__head',
  SeedId = 'seed__id',
  Votes = 'votes'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Proposal = {
  __typename?: 'Proposal';
  /** The number of votes to abstain on the proposal */
  abstainVotes: Scalars['BigInt']['output'];
  /** The number of votes against of the proposal */
  againstVotes: Scalars['BigInt']['output'];
  /** Call data for the change */
  calldatas?: Maybe<Array<Scalars['Bytes']['output']>>;
  /** The block number at which this proposal was canceled */
  canceledBlock?: Maybe<Scalars['BigInt']['output']>;
  /** The timestamp when this proposal was canceled */
  canceledTimestamp?: Maybe<Scalars['BigInt']['output']>;
  /** The transaction hash when the proposal was canceled */
  canceledTransactionHash?: Maybe<Scalars['Bytes']['output']>;
  /** The proposal creation block */
  createdBlock: Scalars['BigInt']['output'];
  /** The proposal creation timestamp */
  createdTimestamp: Scalars['BigInt']['output'];
  /** The proposal creation transaction hash */
  createdTransactionHash: Scalars['Bytes']['output'];
  /** The full proposal description, which includes the title */
  description: Scalars['String']['output'];
  /** Block number from where the voting ends */
  endBlock: Scalars['BigInt']['output'];
  /** The block number at which this proposal was executed */
  executedBlock?: Maybe<Scalars['BigInt']['output']>;
  /** The timestamp when this proposal was executed */
  executedTimestamp?: Maybe<Scalars['BigInt']['output']>;
  /** The transaction hash when the proposal was executed */
  executedTransactionHash?: Maybe<Scalars['Bytes']['output']>;
  /** Once the proposal is queued for execution it will have an ETA of the execution */
  executionETA?: Maybe<Scalars['BigInt']['output']>;
  /** The number of votes in favor of the proposal */
  forVotes: Scalars['BigInt']['output'];
  /** Internal proposal ID, in this implementation it seems to be a autoincremental id */
  id: Scalars['ID']['output'];
  /** Dynamic quorum param snapshot: max quorum basis points */
  maxQuorumVotesBPS: Scalars['Int']['output'];
  /** Dynamic quorum param snapshot: min quorum basis points */
  minQuorumVotesBPS: Scalars['Int']['output'];
  /** The proposal threshold at the time of proposal creation */
  proposalThreshold: Scalars['BigInt']['output'];
  /** Delegate that proposed the change */
  proposer: Delegate;
  /** The block number at which this proposal was queued */
  queuedBlock?: Maybe<Scalars['BigInt']['output']>;
  /** The timestamp when this proposal was queued */
  queuedTimestamp?: Maybe<Scalars['BigInt']['output']>;
  /** The transaction hash when the proposal was queued */
  queuedTransactionHash?: Maybe<Scalars['Bytes']['output']>;
  /** Dynamic quorum param snapshot: the dynamic quorum coefficient */
  quorumCoefficient: Scalars['BigInt']['output'];
  /** The required number of votes for quorum at the time of proposal creation */
  quorumVotes: Scalars['BigInt']['output'];
  /** Signature data for the change */
  signatures?: Maybe<Array<Scalars['String']['output']>>;
  /** Block number from where the voting starts */
  startBlock: Scalars['BigInt']['output'];
  /** Status of the proposal */
  status: ProposalStatus;
  /** Targets data for the change */
  targets?: Maybe<Array<Scalars['Bytes']['output']>>;
  /** The proposal title, parsed from the description */
  title: Scalars['String']['output'];
  /** Total supply when this proposal was created */
  totalSupply: Scalars['BigInt']['output'];
  /** Values data for the change */
  values?: Maybe<Array<Scalars['BigInt']['output']>>;
  /** The block number at which this proposal was vetoed */
  vetoedBlock?: Maybe<Scalars['BigInt']['output']>;
  /** The timestamp when this proposal was vetoed */
  vetoedTimestamp?: Maybe<Scalars['BigInt']['output']>;
  /** The transaction hash when the proposal was vetoed */
  vetoedTransactionHash?: Maybe<Scalars['Bytes']['output']>;
  /** Votes associated to this proposal */
  votes: Array<Vote>;
};


export type ProposalVotesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VoteOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VoteFilter>;
};

export enum ProposalStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Executed = 'EXECUTED',
  Pending = 'PENDING',
  Queued = 'QUEUED',
  Vetoed = 'VETOED'
}

export type ProposalFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  abstainVotes?: InputMaybe<Scalars['BigInt']['input']>;
  abstainVotes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  abstainVotes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  abstainVotes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  abstainVotes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  abstainVotes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  abstainVotes_not?: InputMaybe<Scalars['BigInt']['input']>;
  abstainVotes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  againstVotes?: InputMaybe<Scalars['BigInt']['input']>;
  againstVotes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  againstVotes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  againstVotes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  againstVotes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  againstVotes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  againstVotes_not?: InputMaybe<Scalars['BigInt']['input']>;
  againstVotes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<ProposalFilter>>>;
  calldatas?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  canceledBlock?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  canceledBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  canceledBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  canceledTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  canceledTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  canceledTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  canceledTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  canceledTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  canceledTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  canceledTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  canceledTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  canceledTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  canceledTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  canceledTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  canceledTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  canceledTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  createdBlock?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  createdTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  createdTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  endBlock?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executedBlock?: InputMaybe<Scalars['BigInt']['input']>;
  executedBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  executedBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  executedBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executedBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  executedBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  executedBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  executedBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executedTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  executedTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  executedTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  executedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executedTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  executedTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  executedTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executedTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  executedTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  executedTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  executedTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  executedTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  executedTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  executedTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  executionETA?: InputMaybe<Scalars['BigInt']['input']>;
  executionETA_gt?: InputMaybe<Scalars['BigInt']['input']>;
  executionETA_gte?: InputMaybe<Scalars['BigInt']['input']>;
  executionETA_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executionETA_lt?: InputMaybe<Scalars['BigInt']['input']>;
  executionETA_lte?: InputMaybe<Scalars['BigInt']['input']>;
  executionETA_not?: InputMaybe<Scalars['BigInt']['input']>;
  executionETA_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  forVotes?: InputMaybe<Scalars['BigInt']['input']>;
  forVotes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  forVotes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  forVotes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  forVotes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  forVotes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  forVotes_not?: InputMaybe<Scalars['BigInt']['input']>;
  forVotes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  maxQuorumVotesBPS?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_gt?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_gte?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  maxQuorumVotesBPS_lt?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_lte?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_not?: InputMaybe<Scalars['Int']['input']>;
  maxQuorumVotesBPS_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  minQuorumVotesBPS?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_gt?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_gte?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  minQuorumVotesBPS_lt?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_lte?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_not?: InputMaybe<Scalars['Int']['input']>;
  minQuorumVotesBPS_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ProposalFilter>>>;
  proposalThreshold?: InputMaybe<Scalars['BigInt']['input']>;
  proposalThreshold_gt?: InputMaybe<Scalars['BigInt']['input']>;
  proposalThreshold_gte?: InputMaybe<Scalars['BigInt']['input']>;
  proposalThreshold_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposalThreshold_lt?: InputMaybe<Scalars['BigInt']['input']>;
  proposalThreshold_lte?: InputMaybe<Scalars['BigInt']['input']>;
  proposalThreshold_not?: InputMaybe<Scalars['BigInt']['input']>;
  proposalThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposer?: InputMaybe<Scalars['String']['input']>;
  proposer_?: InputMaybe<DelegateFilter>;
  proposer_contains?: InputMaybe<Scalars['String']['input']>;
  proposer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposer_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposer_gt?: InputMaybe<Scalars['String']['input']>;
  proposer_gte?: InputMaybe<Scalars['String']['input']>;
  proposer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposer_lt?: InputMaybe<Scalars['String']['input']>;
  proposer_lte?: InputMaybe<Scalars['String']['input']>;
  proposer_not?: InputMaybe<Scalars['String']['input']>;
  proposer_not_contains?: InputMaybe<Scalars['String']['input']>;
  proposer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposer_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  queuedBlock?: InputMaybe<Scalars['BigInt']['input']>;
  queuedBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  queuedBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  queuedBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queuedBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  queuedBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  queuedBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  queuedBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queuedTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  queuedTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  queuedTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  queuedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queuedTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  queuedTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  queuedTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  queuedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  queuedTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  queuedTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  queuedTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  queuedTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  queuedTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  queuedTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  queuedTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  queuedTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  queuedTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  queuedTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  quorumCoefficient?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quorumCoefficient_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_not?: InputMaybe<Scalars['BigInt']['input']>;
  quorumCoefficient_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quorumVotes?: InputMaybe<Scalars['BigInt']['input']>;
  quorumVotes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quorumVotes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quorumVotes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quorumVotes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quorumVotes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quorumVotes_not?: InputMaybe<Scalars['BigInt']['input']>;
  quorumVotes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signatures?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  startBlock?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  status?: InputMaybe<ProposalStatus>;
  status_in?: InputMaybe<Array<ProposalStatus>>;
  status_not?: InputMaybe<ProposalStatus>;
  status_not_in?: InputMaybe<Array<ProposalStatus>>;
  targets?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vetoedBlock?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vetoedBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vetoedTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vetoedTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  vetoedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vetoedTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  vetoedTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vetoedTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  vetoedTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  vetoedTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vetoedTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  vetoedTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  vetoedTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  vetoedTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vetoedTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  votes_?: InputMaybe<VoteFilter>;
};

export enum ProposalOrderBy {
  AbstainVotes = 'abstainVotes',
  AgainstVotes = 'againstVotes',
  Calldatas = 'calldatas',
  CanceledBlock = 'canceledBlock',
  CanceledTimestamp = 'canceledTimestamp',
  CanceledTransactionHash = 'canceledTransactionHash',
  CreatedBlock = 'createdBlock',
  CreatedTimestamp = 'createdTimestamp',
  CreatedTransactionHash = 'createdTransactionHash',
  Description = 'description',
  EndBlock = 'endBlock',
  ExecutedBlock = 'executedBlock',
  ExecutedTimestamp = 'executedTimestamp',
  ExecutedTransactionHash = 'executedTransactionHash',
  ExecutionEta = 'executionETA',
  ForVotes = 'forVotes',
  Id = 'id',
  MaxQuorumVotesBps = 'maxQuorumVotesBPS',
  MinQuorumVotesBps = 'minQuorumVotesBPS',
  ProposalThreshold = 'proposalThreshold',
  Proposer = 'proposer',
  ProposerDelegatedVotes = 'proposer__delegatedVotes',
  ProposerDelegatedVotesRaw = 'proposer__delegatedVotesRaw',
  ProposerId = 'proposer__id',
  ProposerTokenHoldersRepresentedAmount = 'proposer__tokenHoldersRepresentedAmount',
  QueuedBlock = 'queuedBlock',
  QueuedTimestamp = 'queuedTimestamp',
  QueuedTransactionHash = 'queuedTransactionHash',
  QuorumCoefficient = 'quorumCoefficient',
  QuorumVotes = 'quorumVotes',
  Signatures = 'signatures',
  StartBlock = 'startBlock',
  Status = 'status',
  Targets = 'targets',
  Title = 'title',
  TotalSupply = 'totalSupply',
  Values = 'values',
  VetoedBlock = 'vetoedBlock',
  VetoedTimestamp = 'vetoedTimestamp',
  VetoedTransactionHash = 'vetoedTransactionHash',
  Votes = 'votes'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<Meta>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  auction?: Maybe<Auction>;
  auctions: Array<Auction>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  delegate?: Maybe<Delegate>;
  delegates: Array<Delegate>;
  delegationEvent?: Maybe<DelegationEvent>;
  delegationEvents: Array<DelegationEvent>;
  dynamicQuorumParams?: Maybe<DynamicQuorumParams>;
  dynamicQuorumParams_collection: Array<DynamicQuorumParams>;
  governance?: Maybe<Governance>;
  governances: Array<Governance>;
  noun?: Maybe<Noun>;
  nouns: Array<Noun>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
  seed?: Maybe<Seed>;
  seeds: Array<Seed>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
};


export type QueryMetaArgs = {
  block?: InputMaybe<BlockHeight>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<AccountFilter>;
};


export type QueryAuctionArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryAuctionsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AuctionOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<AuctionFilter>;
};


export type QueryBidArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryBidsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BidOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<BidFilter>;
};


export type QueryDelegateArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryDelegatesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DelegateOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<DelegateFilter>;
};


export type QueryDelegationEventArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryDelegationEventsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DelegationEventOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<DelegationEventFilter>;
};


export type QueryDynamicQuorumParamsArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryDynamicQuorumParamsCollectionArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DynamicQuorumParamsOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<DynamicQuorumParamsFilter>;
};


export type QueryGovernanceArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryGovernancesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GovernanceOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<GovernanceFilter>;
};


export type QueryNounArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryNounsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NounOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<NounFilter>;
};


export type QueryProposalArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryProposalsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProposalOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<ProposalFilter>;
};


export type QuerySeedArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QuerySeedsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SeedOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<SeedFilter>;
};


export type QueryTransferEventArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryTransferEventsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferEventOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<TransferEventFilter>;
};


export type QueryVoteArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type QueryVotesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VoteOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<VoteFilter>;
};

export type Seed = {
  __typename?: 'Seed';
  /** The accessory index */
  accessory: Scalars['BigInt']['output'];
  /** The background index */
  background: Scalars['BigInt']['output'];
  /** The body index */
  body: Scalars['BigInt']['output'];
  /** The glasses index */
  glasses: Scalars['BigInt']['output'];
  /** The head index */
  head: Scalars['BigInt']['output'];
  /** The Noun's ERC721 token id */
  id: Scalars['ID']['output'];
};

export type SeedFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accessory?: InputMaybe<Scalars['BigInt']['input']>;
  accessory_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accessory_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accessory_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accessory_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accessory_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accessory_not?: InputMaybe<Scalars['BigInt']['input']>;
  accessory_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<SeedFilter>>>;
  background?: InputMaybe<Scalars['BigInt']['input']>;
  background_gt?: InputMaybe<Scalars['BigInt']['input']>;
  background_gte?: InputMaybe<Scalars['BigInt']['input']>;
  background_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  background_lt?: InputMaybe<Scalars['BigInt']['input']>;
  background_lte?: InputMaybe<Scalars['BigInt']['input']>;
  background_not?: InputMaybe<Scalars['BigInt']['input']>;
  background_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  body?: InputMaybe<Scalars['BigInt']['input']>;
  body_gt?: InputMaybe<Scalars['BigInt']['input']>;
  body_gte?: InputMaybe<Scalars['BigInt']['input']>;
  body_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  body_lt?: InputMaybe<Scalars['BigInt']['input']>;
  body_lte?: InputMaybe<Scalars['BigInt']['input']>;
  body_not?: InputMaybe<Scalars['BigInt']['input']>;
  body_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  glasses?: InputMaybe<Scalars['BigInt']['input']>;
  glasses_gt?: InputMaybe<Scalars['BigInt']['input']>;
  glasses_gte?: InputMaybe<Scalars['BigInt']['input']>;
  glasses_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  glasses_lt?: InputMaybe<Scalars['BigInt']['input']>;
  glasses_lte?: InputMaybe<Scalars['BigInt']['input']>;
  glasses_not?: InputMaybe<Scalars['BigInt']['input']>;
  glasses_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  head?: InputMaybe<Scalars['BigInt']['input']>;
  head_gt?: InputMaybe<Scalars['BigInt']['input']>;
  head_gte?: InputMaybe<Scalars['BigInt']['input']>;
  head_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  head_lt?: InputMaybe<Scalars['BigInt']['input']>;
  head_lte?: InputMaybe<Scalars['BigInt']['input']>;
  head_not?: InputMaybe<Scalars['BigInt']['input']>;
  head_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<SeedFilter>>>;
};

export enum SeedOrderBy {
  Accessory = 'accessory',
  Background = 'background',
  Body = 'body',
  Glasses = 'glasses',
  Head = 'head',
  Id = 'id'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<Meta>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  auction?: Maybe<Auction>;
  auctions: Array<Auction>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  delegate?: Maybe<Delegate>;
  delegates: Array<Delegate>;
  delegationEvent?: Maybe<DelegationEvent>;
  delegationEvents: Array<DelegationEvent>;
  dynamicQuorumParams?: Maybe<DynamicQuorumParams>;
  dynamicQuorumParams_collection: Array<DynamicQuorumParams>;
  governance?: Maybe<Governance>;
  governances: Array<Governance>;
  noun?: Maybe<Noun>;
  nouns: Array<Noun>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
  seed?: Maybe<Seed>;
  seeds: Array<Seed>;
  transferEvent?: Maybe<TransferEvent>;
  transferEvents: Array<TransferEvent>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
};


export type SubscriptionMetaArgs = {
  block?: InputMaybe<BlockHeight>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionAccountsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<AccountFilter>;
};


export type SubscriptionAuctionArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionAuctionsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AuctionOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<AuctionFilter>;
};


export type SubscriptionBidArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionBidsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BidOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<BidFilter>;
};


export type SubscriptionDelegateArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionDelegatesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DelegateOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<DelegateFilter>;
};


export type SubscriptionDelegationEventArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionDelegationEventsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DelegationEventOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<DelegationEventFilter>;
};


export type SubscriptionDynamicQuorumParamsArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionDynamicQuorumParamsCollectionArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DynamicQuorumParamsOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<DynamicQuorumParamsFilter>;
};


export type SubscriptionGovernanceArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionGovernancesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GovernanceOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<GovernanceFilter>;
};


export type SubscriptionNounArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionNounsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NounOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<NounFilter>;
};


export type SubscriptionProposalArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionProposalsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProposalOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<ProposalFilter>;
};


export type SubscriptionSeedArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionSeedsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SeedOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<SeedFilter>;
};


export type SubscriptionTransferEventArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionTransferEventsArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferEventOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<TransferEventFilter>;
};


export type SubscriptionVoteArgs = {
  block?: InputMaybe<BlockHeight>;
  id: Scalars['ID']['input'];
  subgraphError?: SubgraphErrorPolicy;
};


export type SubscriptionVotesArgs = {
  block?: InputMaybe<BlockHeight>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VoteOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: SubgraphErrorPolicy;
  where?: InputMaybe<VoteFilter>;
};

export type TransferEvent = {
  __typename?: 'TransferEvent';
  /** Block number of the event */
  blockNumber: Scalars['BigInt']['output'];
  /** The timestamp of the block the event is in */
  blockTimestamp: Scalars['BigInt']['output'];
  /** The txn hash of this event */
  id: Scalars['ID']['output'];
  /** New holder address */
  newHolder: Account;
  /** The Noun being transfered */
  noun: Noun;
  /** Previous holder address */
  previousHolder: Account;
};

export type TransferEventFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransferEventFilter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  newHolder?: InputMaybe<Scalars['String']['input']>;
  newHolder_?: InputMaybe<AccountFilter>;
  newHolder_contains?: InputMaybe<Scalars['String']['input']>;
  newHolder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newHolder_ends_with?: InputMaybe<Scalars['String']['input']>;
  newHolder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newHolder_gt?: InputMaybe<Scalars['String']['input']>;
  newHolder_gte?: InputMaybe<Scalars['String']['input']>;
  newHolder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newHolder_lt?: InputMaybe<Scalars['String']['input']>;
  newHolder_lte?: InputMaybe<Scalars['String']['input']>;
  newHolder_not?: InputMaybe<Scalars['String']['input']>;
  newHolder_not_contains?: InputMaybe<Scalars['String']['input']>;
  newHolder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newHolder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newHolder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newHolder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newHolder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newHolder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newHolder_starts_with?: InputMaybe<Scalars['String']['input']>;
  newHolder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun?: InputMaybe<Scalars['String']['input']>;
  noun_?: InputMaybe<NounFilter>;
  noun_contains?: InputMaybe<Scalars['String']['input']>;
  noun_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_gt?: InputMaybe<Scalars['String']['input']>;
  noun_gte?: InputMaybe<Scalars['String']['input']>;
  noun_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_lt?: InputMaybe<Scalars['String']['input']>;
  noun_lte?: InputMaybe<Scalars['String']['input']>;
  noun_not?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains?: InputMaybe<Scalars['String']['input']>;
  noun_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  noun_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with?: InputMaybe<Scalars['String']['input']>;
  noun_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<TransferEventFilter>>>;
  previousHolder?: InputMaybe<Scalars['String']['input']>;
  previousHolder_?: InputMaybe<AccountFilter>;
  previousHolder_contains?: InputMaybe<Scalars['String']['input']>;
  previousHolder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  previousHolder_ends_with?: InputMaybe<Scalars['String']['input']>;
  previousHolder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousHolder_gt?: InputMaybe<Scalars['String']['input']>;
  previousHolder_gte?: InputMaybe<Scalars['String']['input']>;
  previousHolder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  previousHolder_lt?: InputMaybe<Scalars['String']['input']>;
  previousHolder_lte?: InputMaybe<Scalars['String']['input']>;
  previousHolder_not?: InputMaybe<Scalars['String']['input']>;
  previousHolder_not_contains?: InputMaybe<Scalars['String']['input']>;
  previousHolder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  previousHolder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  previousHolder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousHolder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  previousHolder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  previousHolder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  previousHolder_starts_with?: InputMaybe<Scalars['String']['input']>;
  previousHolder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TransferEventOrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewHolder = 'newHolder',
  NewHolderId = 'newHolder__id',
  NewHolderTokenBalance = 'newHolder__tokenBalance',
  NewHolderTokenBalanceRaw = 'newHolder__tokenBalanceRaw',
  NewHolderTotalTokensHeld = 'newHolder__totalTokensHeld',
  NewHolderTotalTokensHeldRaw = 'newHolder__totalTokensHeldRaw',
  Noun = 'noun',
  NounId = 'noun__id',
  PreviousHolder = 'previousHolder',
  PreviousHolderId = 'previousHolder__id',
  PreviousHolderTokenBalance = 'previousHolder__tokenBalance',
  PreviousHolderTokenBalanceRaw = 'previousHolder__tokenBalanceRaw',
  PreviousHolderTotalTokensHeld = 'previousHolder__totalTokensHeld',
  PreviousHolderTotalTokensHeldRaw = 'previousHolder__totalTokensHeldRaw'
}

export type Vote = {
  __typename?: 'Vote';
  /** Block number of vote */
  blockNumber: Scalars['BigInt']['output'];
  /** The timestamp of the block the vote is in */
  blockTimestamp: Scalars['BigInt']['output'];
  /** Delegate ID + Proposal ID */
  id: Scalars['ID']['output'];
  /** The Nouns used to vote */
  nouns?: Maybe<Array<Noun>>;
  /** Proposal that is being voted on */
  proposal: Proposal;
  /** The optional vote reason */
  reason?: Maybe<Scalars['String']['output']>;
  /** Whether the vote is in favour of the proposal */
  support: Scalars['Boolean']['output'];
  /** The integer support value: against (0), for (1), or abstain (2) */
  supportDetailed: Scalars['Int']['output'];
  /** The transaction hash of the vote */
  transactionHash: Scalars['Bytes']['output'];
  /** Delegate that emitted the vote */
  voter: Delegate;
  /** Amount of votes in favour or against expressed as a BigInt normalized value for the Nouns ERC721 Token */
  votes: Scalars['BigInt']['output'];
  /** Amount of votes in favour or against expressed in the smallest unit of the Nouns ERC721 Token */
  votesRaw: Scalars['BigInt']['output'];
};


export type VoteNounsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NounOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NounFilter>;
};

export type VoteFilter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VoteFilter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nouns?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_?: InputMaybe<NounFilter>;
  nouns_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_not?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  nouns_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VoteFilter>>>;
  proposal?: InputMaybe<Scalars['String']['input']>;
  proposal_?: InputMaybe<ProposalFilter>;
  proposal_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_gt?: InputMaybe<Scalars['String']['input']>;
  proposal_gte?: InputMaybe<Scalars['String']['input']>;
  proposal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_lt?: InputMaybe<Scalars['String']['input']>;
  proposal_lte?: InputMaybe<Scalars['String']['input']>;
  proposal_not?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  reason_contains?: InputMaybe<Scalars['String']['input']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_gt?: InputMaybe<Scalars['String']['input']>;
  reason_gte?: InputMaybe<Scalars['String']['input']>;
  reason_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_lt?: InputMaybe<Scalars['String']['input']>;
  reason_lte?: InputMaybe<Scalars['String']['input']>;
  reason_not?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains?: InputMaybe<Scalars['String']['input']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  reason_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with?: InputMaybe<Scalars['String']['input']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  support?: InputMaybe<Scalars['Boolean']['input']>;
  supportDetailed?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_gt?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_gte?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  supportDetailed_lt?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_lte?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_not?: InputMaybe<Scalars['Int']['input']>;
  supportDetailed_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  support_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  support_not?: InputMaybe<Scalars['Boolean']['input']>;
  support_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  voter?: InputMaybe<Scalars['String']['input']>;
  voter_?: InputMaybe<DelegateFilter>;
  voter_contains?: InputMaybe<Scalars['String']['input']>;
  voter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_ends_with?: InputMaybe<Scalars['String']['input']>;
  voter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_gt?: InputMaybe<Scalars['String']['input']>;
  voter_gte?: InputMaybe<Scalars['String']['input']>;
  voter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  voter_lt?: InputMaybe<Scalars['String']['input']>;
  voter_lte?: InputMaybe<Scalars['String']['input']>;
  voter_not?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains?: InputMaybe<Scalars['String']['input']>;
  voter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  voter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  voter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  voter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  voter_starts_with?: InputMaybe<Scalars['String']['input']>;
  voter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  votes?: InputMaybe<Scalars['BigInt']['input']>;
  votesRaw?: InputMaybe<Scalars['BigInt']['input']>;
  votesRaw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  votesRaw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  votesRaw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  votesRaw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  votesRaw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  votesRaw_not?: InputMaybe<Scalars['BigInt']['input']>;
  votesRaw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  votes_gt?: InputMaybe<Scalars['BigInt']['input']>;
  votes_gte?: InputMaybe<Scalars['BigInt']['input']>;
  votes_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  votes_lt?: InputMaybe<Scalars['BigInt']['input']>;
  votes_lte?: InputMaybe<Scalars['BigInt']['input']>;
  votes_not?: InputMaybe<Scalars['BigInt']['input']>;
  votes_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum VoteOrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Nouns = 'nouns',
  Proposal = 'proposal',
  ProposalAbstainVotes = 'proposal__abstainVotes',
  ProposalAgainstVotes = 'proposal__againstVotes',
  ProposalCanceledBlock = 'proposal__canceledBlock',
  ProposalCanceledTimestamp = 'proposal__canceledTimestamp',
  ProposalCanceledTransactionHash = 'proposal__canceledTransactionHash',
  ProposalCreatedBlock = 'proposal__createdBlock',
  ProposalCreatedTimestamp = 'proposal__createdTimestamp',
  ProposalCreatedTransactionHash = 'proposal__createdTransactionHash',
  ProposalDescription = 'proposal__description',
  ProposalEndBlock = 'proposal__endBlock',
  ProposalExecutedBlock = 'proposal__executedBlock',
  ProposalExecutedTimestamp = 'proposal__executedTimestamp',
  ProposalExecutedTransactionHash = 'proposal__executedTransactionHash',
  ProposalExecutionEta = 'proposal__executionETA',
  ProposalForVotes = 'proposal__forVotes',
  ProposalId = 'proposal__id',
  ProposalMaxQuorumVotesBps = 'proposal__maxQuorumVotesBPS',
  ProposalMinQuorumVotesBps = 'proposal__minQuorumVotesBPS',
  ProposalProposalThreshold = 'proposal__proposalThreshold',
  ProposalQueuedBlock = 'proposal__queuedBlock',
  ProposalQueuedTimestamp = 'proposal__queuedTimestamp',
  ProposalQueuedTransactionHash = 'proposal__queuedTransactionHash',
  ProposalQuorumCoefficient = 'proposal__quorumCoefficient',
  ProposalQuorumVotes = 'proposal__quorumVotes',
  ProposalStartBlock = 'proposal__startBlock',
  ProposalStatus = 'proposal__status',
  ProposalTitle = 'proposal__title',
  ProposalTotalSupply = 'proposal__totalSupply',
  ProposalVetoedBlock = 'proposal__vetoedBlock',
  ProposalVetoedTimestamp = 'proposal__vetoedTimestamp',
  ProposalVetoedTransactionHash = 'proposal__vetoedTransactionHash',
  Reason = 'reason',
  Support = 'support',
  SupportDetailed = 'supportDetailed',
  TransactionHash = 'transactionHash',
  Voter = 'voter',
  VoterDelegatedVotes = 'voter__delegatedVotes',
  VoterDelegatedVotesRaw = 'voter__delegatedVotesRaw',
  VoterId = 'voter__id',
  VoterTokenHoldersRepresentedAmount = 'voter__tokenHoldersRepresentedAmount',
  Votes = 'votes',
  VotesRaw = 'votesRaw'
}

export type Block = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type Meta = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: Block;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum SubgraphErrorPolicy {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}



export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;