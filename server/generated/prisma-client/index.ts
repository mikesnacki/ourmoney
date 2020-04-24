// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  lineItem: (where?: LineItemWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  lineItem: (where: LineItemWhereUniqueInput) => LineItemNullablePromise;
  lineItems: (args?: {
    where?: LineItemWhereInput;
    orderBy?: LineItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<LineItem>;
  lineItemsConnection: (args?: {
    where?: LineItemWhereInput;
    orderBy?: LineItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => LineItemConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createLineItem: (data: LineItemCreateInput) => LineItemPromise;
  updateLineItem: (args: {
    data: LineItemUpdateInput;
    where: LineItemWhereUniqueInput;
  }) => LineItemPromise;
  updateManyLineItems: (args: {
    data: LineItemUpdateManyMutationInput;
    where?: LineItemWhereInput;
  }) => BatchPayloadPromise;
  upsertLineItem: (args: {
    where: LineItemWhereUniqueInput;
    create: LineItemCreateInput;
    update: LineItemUpdateInput;
  }) => LineItemPromise;
  deleteLineItem: (where: LineItemWhereUniqueInput) => LineItemPromise;
  deleteManyLineItems: (where?: LineItemWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  lineItem: (
    where?: LineItemSubscriptionWhereInput
  ) => LineItemSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type LineItemType = "INCOME" | "EXPENSE";

export type LineItemOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "name_ASC"
  | "name_DESC"
  | "amount_ASC"
  | "amount_DESC"
  | "type_ASC"
  | "type_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface LineItemCreateManyWithoutUserInput {
  create?: Maybe<
    LineItemCreateWithoutUserInput[] | LineItemCreateWithoutUserInput
  >;
  connect?: Maybe<LineItemWhereUniqueInput[] | LineItemWhereUniqueInput>;
}

export type LineItemWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface LineItemUpsertWithWhereUniqueWithoutUserInput {
  where: LineItemWhereUniqueInput;
  update: LineItemUpdateWithoutUserDataInput;
  create: LineItemCreateWithoutUserInput;
}

export interface LineItemUpdateManyWithoutUserInput {
  create?: Maybe<
    LineItemCreateWithoutUserInput[] | LineItemCreateWithoutUserInput
  >;
  delete?: Maybe<LineItemWhereUniqueInput[] | LineItemWhereUniqueInput>;
  connect?: Maybe<LineItemWhereUniqueInput[] | LineItemWhereUniqueInput>;
  set?: Maybe<LineItemWhereUniqueInput[] | LineItemWhereUniqueInput>;
  disconnect?: Maybe<LineItemWhereUniqueInput[] | LineItemWhereUniqueInput>;
  update?: Maybe<
    | LineItemUpdateWithWhereUniqueWithoutUserInput[]
    | LineItemUpdateWithWhereUniqueWithoutUserInput
  >;
  upsert?: Maybe<
    | LineItemUpsertWithWhereUniqueWithoutUserInput[]
    | LineItemUpsertWithWhereUniqueWithoutUserInput
  >;
  deleteMany?: Maybe<LineItemScalarWhereInput[] | LineItemScalarWhereInput>;
  updateMany?: Maybe<
    | LineItemUpdateManyWithWhereNestedInput[]
    | LineItemUpdateManyWithWhereNestedInput
  >;
}

export interface UserUpdateOneRequiredWithoutLineItemsInput {
  create?: Maybe<UserCreateWithoutLineItemsInput>;
  update?: Maybe<UserUpdateWithoutLineItemsDataInput>;
  upsert?: Maybe<UserUpsertWithoutLineItemsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  relatedUser?: Maybe<UserWhereInput>;
  lineItems_every?: Maybe<LineItemWhereInput>;
  lineItems_some?: Maybe<LineItemWhereInput>;
  lineItems_none?: Maybe<LineItemWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface LineItemCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  amount: Float;
  type: LineItemType;
  user: UserCreateOneWithoutLineItemsInput;
}

export interface LineItemSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<LineItemWhereInput>;
  AND?: Maybe<
    LineItemSubscriptionWhereInput[] | LineItemSubscriptionWhereInput
  >;
  OR?: Maybe<LineItemSubscriptionWhereInput[] | LineItemSubscriptionWhereInput>;
  NOT?: Maybe<
    LineItemSubscriptionWhereInput[] | LineItemSubscriptionWhereInput
  >;
}

export interface UserCreateOneWithoutLineItemsInput {
  create?: Maybe<UserCreateWithoutLineItemsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  relatedUser?: Maybe<UserUpdateOneInput>;
  lineItems?: Maybe<LineItemUpdateManyWithoutUserInput>;
}

export interface UserCreateWithoutLineItemsInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  relatedUser?: Maybe<UserCreateOneInput>;
}

export interface UserUpsertWithoutLineItemsInput {
  update: UserUpdateWithoutLineItemsDataInput;
  create: UserCreateWithoutLineItemsInput;
}

export interface UserCreateOneInput {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  relatedUser?: Maybe<UserCreateOneInput>;
  lineItems?: Maybe<LineItemCreateManyWithoutUserInput>;
}

export interface LineItemUpdateManyWithWhereNestedInput {
  where: LineItemScalarWhereInput;
  data: LineItemUpdateManyDataInput;
}

export interface LineItemUpdateWithoutUserDataInput {
  name?: Maybe<String>;
  amount?: Maybe<Float>;
  type?: Maybe<LineItemType>;
}

export interface LineItemWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  amount?: Maybe<Float>;
  amount_not?: Maybe<Float>;
  amount_in?: Maybe<Float[] | Float>;
  amount_not_in?: Maybe<Float[] | Float>;
  amount_lt?: Maybe<Float>;
  amount_lte?: Maybe<Float>;
  amount_gt?: Maybe<Float>;
  amount_gte?: Maybe<Float>;
  type?: Maybe<LineItemType>;
  type_not?: Maybe<LineItemType>;
  type_in?: Maybe<LineItemType[] | LineItemType>;
  type_not_in?: Maybe<LineItemType[] | LineItemType>;
  user?: Maybe<UserWhereInput>;
  AND?: Maybe<LineItemWhereInput[] | LineItemWhereInput>;
  OR?: Maybe<LineItemWhereInput[] | LineItemWhereInput>;
  NOT?: Maybe<LineItemWhereInput[] | LineItemWhereInput>;
}

export interface LineItemCreateWithoutUserInput {
  id?: Maybe<ID_Input>;
  name: String;
  amount: Float;
  type: LineItemType;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
}

export interface LineItemUpdateInput {
  name?: Maybe<String>;
  amount?: Maybe<Float>;
  type?: Maybe<LineItemType>;
  user?: Maybe<UserUpdateOneRequiredWithoutLineItemsInput>;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface UserUpdateDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  relatedUser?: Maybe<UserUpdateOneInput>;
  lineItems?: Maybe<LineItemUpdateManyWithoutUserInput>;
}

export interface UserUpdateOneInput {
  create?: Maybe<UserCreateInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutLineItemsDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  relatedUser?: Maybe<UserUpdateOneInput>;
}

export interface LineItemUpdateWithWhereUniqueWithoutUserInput {
  where: LineItemWhereUniqueInput;
  data: LineItemUpdateWithoutUserDataInput;
}

export interface LineItemUpdateManyDataInput {
  name?: Maybe<String>;
  amount?: Maybe<Float>;
  type?: Maybe<LineItemType>;
}

export interface LineItemUpdateManyMutationInput {
  name?: Maybe<String>;
  amount?: Maybe<Float>;
  type?: Maybe<LineItemType>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface LineItemScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  amount?: Maybe<Float>;
  amount_not?: Maybe<Float>;
  amount_in?: Maybe<Float[] | Float>;
  amount_not_in?: Maybe<Float[] | Float>;
  amount_lt?: Maybe<Float>;
  amount_lte?: Maybe<Float>;
  amount_gt?: Maybe<Float>;
  amount_gte?: Maybe<Float>;
  type?: Maybe<LineItemType>;
  type_not?: Maybe<LineItemType>;
  type_in?: Maybe<LineItemType[] | LineItemType>;
  type_not_in?: Maybe<LineItemType[] | LineItemType>;
  AND?: Maybe<LineItemScalarWhereInput[] | LineItemScalarWhereInput>;
  OR?: Maybe<LineItemScalarWhereInput[] | LineItemScalarWhereInput>;
  NOT?: Maybe<LineItemScalarWhereInput[] | LineItemScalarWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
}

export interface LineItemEdge {
  node: LineItem;
  cursor: String;
}

export interface LineItemEdgePromise
  extends Promise<LineItemEdge>,
    Fragmentable {
  node: <T = LineItemPromise>() => T;
  cursor: () => Promise<String>;
}

export interface LineItemEdgeSubscription
  extends Promise<AsyncIterator<LineItemEdge>>,
    Fragmentable {
  node: <T = LineItemSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface LineItem {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  amount: Float;
  type: LineItemType;
}

export interface LineItemPromise extends Promise<LineItem>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  amount: () => Promise<Float>;
  type: () => Promise<LineItemType>;
  user: <T = UserPromise>() => T;
}

export interface LineItemSubscription
  extends Promise<AsyncIterator<LineItem>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  amount: () => Promise<AsyncIterator<Float>>;
  type: () => Promise<AsyncIterator<LineItemType>>;
  user: <T = UserSubscription>() => T;
}

export interface LineItemNullablePromise
  extends Promise<LineItem | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  amount: () => Promise<Float>;
  type: () => Promise<LineItemType>;
  user: <T = UserPromise>() => T;
}

export interface LineItemPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  name: String;
  amount: Float;
  type: LineItemType;
}

export interface LineItemPreviousValuesPromise
  extends Promise<LineItemPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  name: () => Promise<String>;
  amount: () => Promise<Float>;
  type: () => Promise<LineItemType>;
}

export interface LineItemPreviousValuesSubscription
  extends Promise<AsyncIterator<LineItemPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  name: () => Promise<AsyncIterator<String>>;
  amount: () => Promise<AsyncIterator<Float>>;
  type: () => Promise<AsyncIterator<LineItemType>>;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  relatedUser: <T = UserPromise>() => T;
  lineItems: <T = FragmentableArray<LineItem>>(args?: {
    where?: LineItemWhereInput;
    orderBy?: LineItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  relatedUser: <T = UserSubscription>() => T;
  lineItems: <T = Promise<AsyncIterator<LineItemSubscription>>>(args?: {
    where?: LineItemWhereInput;
    orderBy?: LineItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  relatedUser: <T = UserPromise>() => T;
  lineItems: <T = FragmentableArray<LineItem>>(args?: {
    where?: LineItemWhereInput;
    orderBy?: LineItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface LineItemConnection {
  pageInfo: PageInfo;
  edges: LineItemEdge[];
}

export interface LineItemConnectionPromise
  extends Promise<LineItemConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<LineItemEdge>>() => T;
  aggregate: <T = AggregateLineItemPromise>() => T;
}

export interface LineItemConnectionSubscription
  extends Promise<AsyncIterator<LineItemConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<LineItemEdgeSubscription>>>() => T;
  aggregate: <T = AggregateLineItemSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface LineItemSubscriptionPayload {
  mutation: MutationType;
  node: LineItem;
  updatedFields: String[];
  previousValues: LineItemPreviousValues;
}

export interface LineItemSubscriptionPayloadPromise
  extends Promise<LineItemSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = LineItemPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = LineItemPreviousValuesPromise>() => T;
}

export interface LineItemSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<LineItemSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = LineItemSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = LineItemPreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AggregateLineItem {
  count: Int;
}

export interface AggregateLineItemPromise
  extends Promise<AggregateLineItem>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateLineItemSubscription
  extends Promise<AsyncIterator<AggregateLineItem>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export type Long = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "LineItemType",
    embedded: false
  },
  {
    name: "LineItem",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://192.168.99.100:4466`
});
export const prisma = new Prisma();
