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
  expense: (where?: ExpenseWhereInput) => Promise<boolean>;
  income: (where?: IncomeWhereInput) => Promise<boolean>;
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

  expense: (where: ExpenseWhereUniqueInput) => ExpenseNullablePromise;
  expenses: (args?: {
    where?: ExpenseWhereInput;
    orderBy?: ExpenseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Expense>;
  expensesConnection: (args?: {
    where?: ExpenseWhereInput;
    orderBy?: ExpenseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ExpenseConnectionPromise;
  income: (where: IncomeWhereUniqueInput) => IncomeNullablePromise;
  incomes: (args?: {
    where?: IncomeWhereInput;
    orderBy?: IncomeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Income>;
  incomesConnection: (args?: {
    where?: IncomeWhereInput;
    orderBy?: IncomeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => IncomeConnectionPromise;
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

  createExpense: (data: ExpenseCreateInput) => ExpensePromise;
  updateExpense: (args: {
    data: ExpenseUpdateInput;
    where: ExpenseWhereUniqueInput;
  }) => ExpensePromise;
  updateManyExpenses: (args: {
    data: ExpenseUpdateManyMutationInput;
    where?: ExpenseWhereInput;
  }) => BatchPayloadPromise;
  upsertExpense: (args: {
    where: ExpenseWhereUniqueInput;
    create: ExpenseCreateInput;
    update: ExpenseUpdateInput;
  }) => ExpensePromise;
  deleteExpense: (where: ExpenseWhereUniqueInput) => ExpensePromise;
  deleteManyExpenses: (where?: ExpenseWhereInput) => BatchPayloadPromise;
  createIncome: (data: IncomeCreateInput) => IncomePromise;
  updateIncome: (args: {
    data: IncomeUpdateInput;
    where: IncomeWhereUniqueInput;
  }) => IncomePromise;
  updateManyIncomes: (args: {
    data: IncomeUpdateManyMutationInput;
    where?: IncomeWhereInput;
  }) => BatchPayloadPromise;
  upsertIncome: (args: {
    where: IncomeWhereUniqueInput;
    create: IncomeCreateInput;
    update: IncomeUpdateInput;
  }) => IncomePromise;
  deleteIncome: (where: IncomeWhereUniqueInput) => IncomePromise;
  deleteManyIncomes: (where?: IncomeWhereInput) => BatchPayloadPromise;
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
  expense: (
    where?: ExpenseSubscriptionWhereInput
  ) => ExpenseSubscriptionPayloadSubscription;
  income: (
    where?: IncomeSubscriptionWhereInput
  ) => IncomeSubscriptionPayloadSubscription;
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

export type IncomeOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "title_ASC"
  | "title_DESC"
  | "amount_ASC"
  | "amount_DESC";

export type ExpenseOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "title_ASC"
  | "title_DESC"
  | "amount_ASC"
  | "amount_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "spouse_ASC"
  | "spouse_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface IncomeUpdateWithoutUserDataInput {
  title?: Maybe<String>;
  amount?: Maybe<Float>;
}

export type ExpenseWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ExpenseCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  amount?: Maybe<Float>;
  user: UserCreateOneWithoutExpensesInput;
}

export interface ExpenseCreateManyWithoutUserInput {
  create?: Maybe<
    ExpenseCreateWithoutUserInput[] | ExpenseCreateWithoutUserInput
  >;
  connect?: Maybe<ExpenseWhereUniqueInput[] | ExpenseWhereUniqueInput>;
}

export interface UserCreateOneWithoutExpensesInput {
  create?: Maybe<UserCreateWithoutExpensesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface IncomeUpdateManyWithWhereNestedInput {
  where: IncomeScalarWhereInput;
  data: IncomeUpdateManyDataInput;
}

export interface UserCreateWithoutExpensesInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  spouse: String;
  incomes?: Maybe<IncomeCreateManyWithoutUserInput>;
}

export interface ExpenseWhereInput {
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
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  amount?: Maybe<Float>;
  amount_not?: Maybe<Float>;
  amount_in?: Maybe<Float[] | Float>;
  amount_not_in?: Maybe<Float[] | Float>;
  amount_lt?: Maybe<Float>;
  amount_lte?: Maybe<Float>;
  amount_gt?: Maybe<Float>;
  amount_gte?: Maybe<Float>;
  user?: Maybe<UserWhereInput>;
  AND?: Maybe<ExpenseWhereInput[] | ExpenseWhereInput>;
}

export interface IncomeCreateManyWithoutUserInput {
  create?: Maybe<IncomeCreateWithoutUserInput[] | IncomeCreateWithoutUserInput>;
  connect?: Maybe<IncomeWhereUniqueInput[] | IncomeWhereUniqueInput>;
}

export interface IncomeSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<IncomeWhereInput>;
  AND?: Maybe<IncomeSubscriptionWhereInput[] | IncomeSubscriptionWhereInput>;
}

export interface IncomeCreateWithoutUserInput {
  id?: Maybe<ID_Input>;
  title: String;
  amount?: Maybe<Float>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  spouse?: Maybe<String>;
}

export interface ExpenseUpdateInput {
  title?: Maybe<String>;
  amount?: Maybe<Float>;
  user?: Maybe<UserUpdateOneRequiredWithoutExpensesInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  spouse: String;
  incomes?: Maybe<IncomeCreateManyWithoutUserInput>;
  expenses?: Maybe<ExpenseCreateManyWithoutUserInput>;
}

export interface UserUpdateOneRequiredWithoutExpensesInput {
  create?: Maybe<UserCreateWithoutExpensesInput>;
  update?: Maybe<UserUpdateWithoutExpensesDataInput>;
  upsert?: Maybe<UserUpsertWithoutExpensesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpsertWithoutIncomesInput {
  update: UserUpdateWithoutIncomesDataInput;
  create: UserCreateWithoutIncomesInput;
}

export interface UserUpdateWithoutExpensesDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  spouse?: Maybe<String>;
  incomes?: Maybe<IncomeUpdateManyWithoutUserInput>;
}

export type IncomeWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface IncomeUpdateManyWithoutUserInput {
  create?: Maybe<IncomeCreateWithoutUserInput[] | IncomeCreateWithoutUserInput>;
  delete?: Maybe<IncomeWhereUniqueInput[] | IncomeWhereUniqueInput>;
  connect?: Maybe<IncomeWhereUniqueInput[] | IncomeWhereUniqueInput>;
  set?: Maybe<IncomeWhereUniqueInput[] | IncomeWhereUniqueInput>;
  disconnect?: Maybe<IncomeWhereUniqueInput[] | IncomeWhereUniqueInput>;
  update?: Maybe<
    | IncomeUpdateWithWhereUniqueWithoutUserInput[]
    | IncomeUpdateWithWhereUniqueWithoutUserInput
  >;
  upsert?: Maybe<
    | IncomeUpsertWithWhereUniqueWithoutUserInput[]
    | IncomeUpsertWithWhereUniqueWithoutUserInput
  >;
  deleteMany?: Maybe<IncomeScalarWhereInput[] | IncomeScalarWhereInput>;
  updateMany?: Maybe<
    | IncomeUpdateManyWithWhereNestedInput[]
    | IncomeUpdateManyWithWhereNestedInput
  >;
}

export interface ExpenseScalarWhereInput {
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
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  amount?: Maybe<Float>;
  amount_not?: Maybe<Float>;
  amount_in?: Maybe<Float[] | Float>;
  amount_not_in?: Maybe<Float[] | Float>;
  amount_lt?: Maybe<Float>;
  amount_lte?: Maybe<Float>;
  amount_gt?: Maybe<Float>;
  amount_gte?: Maybe<Float>;
  AND?: Maybe<ExpenseScalarWhereInput[] | ExpenseScalarWhereInput>;
  OR?: Maybe<ExpenseScalarWhereInput[] | ExpenseScalarWhereInput>;
  NOT?: Maybe<ExpenseScalarWhereInput[] | ExpenseScalarWhereInput>;
}

export interface IncomeUpdateWithWhereUniqueWithoutUserInput {
  where: IncomeWhereUniqueInput;
  data: IncomeUpdateWithoutUserDataInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface UserUpdateOneRequiredWithoutIncomesInput {
  create?: Maybe<UserCreateWithoutIncomesInput>;
  update?: Maybe<UserUpdateWithoutIncomesDataInput>;
  upsert?: Maybe<UserUpsertWithoutIncomesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface ExpenseUpdateWithWhereUniqueWithoutUserInput {
  where: ExpenseWhereUniqueInput;
  data: ExpenseUpdateWithoutUserDataInput;
}

export interface IncomeUpsertWithWhereUniqueWithoutUserInput {
  where: IncomeWhereUniqueInput;
  update: IncomeUpdateWithoutUserDataInput;
  create: IncomeCreateWithoutUserInput;
}

export interface UserUpdateWithoutIncomesDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  spouse?: Maybe<String>;
  expenses?: Maybe<ExpenseUpdateManyWithoutUserInput>;
}

export interface IncomeScalarWhereInput {
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
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  amount?: Maybe<Float>;
  amount_not?: Maybe<Float>;
  amount_in?: Maybe<Float[] | Float>;
  amount_not_in?: Maybe<Float[] | Float>;
  amount_lt?: Maybe<Float>;
  amount_lte?: Maybe<Float>;
  amount_gt?: Maybe<Float>;
  amount_gte?: Maybe<Float>;
  AND?: Maybe<IncomeScalarWhereInput[] | IncomeScalarWhereInput>;
  OR?: Maybe<IncomeScalarWhereInput[] | IncomeScalarWhereInput>;
  NOT?: Maybe<IncomeScalarWhereInput[] | IncomeScalarWhereInput>;
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
  spouse?: Maybe<String>;
  spouse_not?: Maybe<String>;
  spouse_in?: Maybe<String[] | String>;
  spouse_not_in?: Maybe<String[] | String>;
  spouse_lt?: Maybe<String>;
  spouse_lte?: Maybe<String>;
  spouse_gt?: Maybe<String>;
  spouse_gte?: Maybe<String>;
  spouse_contains?: Maybe<String>;
  spouse_not_contains?: Maybe<String>;
  spouse_starts_with?: Maybe<String>;
  spouse_not_starts_with?: Maybe<String>;
  spouse_ends_with?: Maybe<String>;
  spouse_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  incomes_some?: Maybe<IncomeWhereInput>;
  expenses_some?: Maybe<ExpenseWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface IncomeWhereInput {
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
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  amount?: Maybe<Float>;
  amount_not?: Maybe<Float>;
  amount_in?: Maybe<Float[] | Float>;
  amount_not_in?: Maybe<Float[] | Float>;
  amount_lt?: Maybe<Float>;
  amount_lte?: Maybe<Float>;
  amount_gt?: Maybe<Float>;
  amount_gte?: Maybe<Float>;
  user?: Maybe<UserWhereInput>;
  AND?: Maybe<IncomeWhereInput[] | IncomeWhereInput>;
}

export interface ExpenseSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ExpenseWhereInput>;
  AND?: Maybe<ExpenseSubscriptionWhereInput[] | ExpenseSubscriptionWhereInput>;
}

export interface IncomeUpdateManyDataInput {
  title?: Maybe<String>;
  amount?: Maybe<Float>;
}

export interface IncomeUpdateManyMutationInput {
  title?: Maybe<String>;
  amount?: Maybe<Float>;
}

export interface UserUpsertWithoutExpensesInput {
  update: UserUpdateWithoutExpensesDataInput;
  create: UserCreateWithoutExpensesInput;
}

export interface ExpenseUpdateManyWithWhereNestedInput {
  where: ExpenseScalarWhereInput;
  data: ExpenseUpdateManyDataInput;
}

export interface ExpenseUpdateManyMutationInput {
  title?: Maybe<String>;
  amount?: Maybe<Float>;
}

export interface ExpenseUpdateWithoutUserDataInput {
  title?: Maybe<String>;
  amount?: Maybe<Float>;
}

export interface IncomeUpdateInput {
  title?: Maybe<String>;
  amount?: Maybe<Float>;
  user?: Maybe<UserUpdateOneRequiredWithoutIncomesInput>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  spouse?: Maybe<String>;
  incomes?: Maybe<IncomeUpdateManyWithoutUserInput>;
  expenses?: Maybe<ExpenseUpdateManyWithoutUserInput>;
}

export interface UserCreateWithoutIncomesInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  spouse: String;
  expenses?: Maybe<ExpenseCreateManyWithoutUserInput>;
}

export interface UserCreateOneWithoutIncomesInput {
  create?: Maybe<UserCreateWithoutIncomesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface IncomeCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  amount?: Maybe<Float>;
  user: UserCreateOneWithoutIncomesInput;
}

export interface ExpenseCreateWithoutUserInput {
  id?: Maybe<ID_Input>;
  title: String;
  amount?: Maybe<Float>;
}

export interface ExpenseUpdateManyDataInput {
  title?: Maybe<String>;
  amount?: Maybe<Float>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface ExpenseUpdateManyWithoutUserInput {
  create?: Maybe<
    ExpenseCreateWithoutUserInput[] | ExpenseCreateWithoutUserInput
  >;
  delete?: Maybe<ExpenseWhereUniqueInput[] | ExpenseWhereUniqueInput>;
  connect?: Maybe<ExpenseWhereUniqueInput[] | ExpenseWhereUniqueInput>;
  set?: Maybe<ExpenseWhereUniqueInput[] | ExpenseWhereUniqueInput>;
  disconnect?: Maybe<ExpenseWhereUniqueInput[] | ExpenseWhereUniqueInput>;
  update?: Maybe<
    | ExpenseUpdateWithWhereUniqueWithoutUserInput[]
    | ExpenseUpdateWithWhereUniqueWithoutUserInput
  >;
  upsert?: Maybe<
    | ExpenseUpsertWithWhereUniqueWithoutUserInput[]
    | ExpenseUpsertWithWhereUniqueWithoutUserInput
  >;
  deleteMany?: Maybe<ExpenseScalarWhereInput[] | ExpenseScalarWhereInput>;
  updateMany?: Maybe<
    | ExpenseUpdateManyWithWhereNestedInput[]
    | ExpenseUpdateManyWithWhereNestedInput
  >;
}

export interface ExpenseUpsertWithWhereUniqueWithoutUserInput {
  where: ExpenseWhereUniqueInput;
  update: ExpenseUpdateWithoutUserDataInput;
  create: ExpenseCreateWithoutUserInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  spouse: String;
  createdAt: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  spouse: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  spouse: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
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

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  spouse: String;
  createdAt: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  spouse: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  incomes: <T = FragmentableArray<Income>>(args?: {
    where?: IncomeWhereInput;
    orderBy?: IncomeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  expenses: <T = FragmentableArray<Expense>>(args?: {
    where?: ExpenseWhereInput;
    orderBy?: ExpenseOrderByInput;
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
  spouse: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  incomes: <T = Promise<AsyncIterator<IncomeSubscription>>>(args?: {
    where?: IncomeWhereInput;
    orderBy?: IncomeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  expenses: <T = Promise<AsyncIterator<ExpenseSubscription>>>(args?: {
    where?: ExpenseWhereInput;
    orderBy?: ExpenseOrderByInput;
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
  spouse: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  incomes: <T = FragmentableArray<Income>>(args?: {
    where?: IncomeWhereInput;
    orderBy?: IncomeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  expenses: <T = FragmentableArray<Expense>>(args?: {
    where?: ExpenseWhereInput;
    orderBy?: ExpenseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface ExpenseEdge {
  node: Expense;
  cursor: String;
}

export interface ExpenseEdgePromise extends Promise<ExpenseEdge>, Fragmentable {
  node: <T = ExpensePromise>() => T;
  cursor: () => Promise<String>;
}

export interface ExpenseEdgeSubscription
  extends Promise<AsyncIterator<ExpenseEdge>>,
    Fragmentable {
  node: <T = ExpenseSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ExpensePreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  title: String;
  amount?: Float;
}

export interface ExpensePreviousValuesPromise
  extends Promise<ExpensePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  amount: () => Promise<Float>;
}

export interface ExpensePreviousValuesSubscription
  extends Promise<AsyncIterator<ExpensePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  amount: () => Promise<AsyncIterator<Float>>;
}

export interface IncomePreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  title: String;
  amount?: Float;
}

export interface IncomePreviousValuesPromise
  extends Promise<IncomePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  amount: () => Promise<Float>;
}

export interface IncomePreviousValuesSubscription
  extends Promise<AsyncIterator<IncomePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  amount: () => Promise<AsyncIterator<Float>>;
}

export interface ExpenseConnection {
  pageInfo: PageInfo;
  edges: ExpenseEdge[];
}

export interface ExpenseConnectionPromise
  extends Promise<ExpenseConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ExpenseEdge>>() => T;
  aggregate: <T = AggregateExpensePromise>() => T;
}

export interface ExpenseConnectionSubscription
  extends Promise<AsyncIterator<ExpenseConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ExpenseEdgeSubscription>>>() => T;
  aggregate: <T = AggregateExpenseSubscription>() => T;
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

export interface AggregateIncome {
  count: Int;
}

export interface AggregateIncomePromise
  extends Promise<AggregateIncome>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateIncomeSubscription
  extends Promise<AsyncIterator<AggregateIncome>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface IncomeConnection {
  pageInfo: PageInfo;
  edges: IncomeEdge[];
}

export interface IncomeConnectionPromise
  extends Promise<IncomeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<IncomeEdge>>() => T;
  aggregate: <T = AggregateIncomePromise>() => T;
}

export interface IncomeConnectionSubscription
  extends Promise<AsyncIterator<IncomeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<IncomeEdgeSubscription>>>() => T;
  aggregate: <T = AggregateIncomeSubscription>() => T;
}

export interface ExpenseSubscriptionPayload {
  mutation: MutationType;
  node: Expense;
  updatedFields: String[];
  previousValues: ExpensePreviousValues;
}

export interface ExpenseSubscriptionPayloadPromise
  extends Promise<ExpenseSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ExpensePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ExpensePreviousValuesPromise>() => T;
}

export interface ExpenseSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ExpenseSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ExpenseSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ExpensePreviousValuesSubscription>() => T;
}

export interface Expense {
  id: ID_Output;
  createdAt: DateTimeOutput;
  title: String;
  amount?: Float;
}

export interface ExpensePromise extends Promise<Expense>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  amount: () => Promise<Float>;
  user: <T = UserPromise>() => T;
}

export interface ExpenseSubscription
  extends Promise<AsyncIterator<Expense>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  amount: () => Promise<AsyncIterator<Float>>;
  user: <T = UserSubscription>() => T;
}

export interface ExpenseNullablePromise
  extends Promise<Expense | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  amount: () => Promise<Float>;
  user: <T = UserPromise>() => T;
}

export interface Income {
  id: ID_Output;
  createdAt: DateTimeOutput;
  title: String;
  amount?: Float;
}

export interface IncomePromise extends Promise<Income>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  amount: () => Promise<Float>;
  user: <T = UserPromise>() => T;
}

export interface IncomeSubscription
  extends Promise<AsyncIterator<Income>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  amount: () => Promise<AsyncIterator<Float>>;
  user: <T = UserSubscription>() => T;
}

export interface IncomeNullablePromise
  extends Promise<Income | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  amount: () => Promise<Float>;
  user: <T = UserPromise>() => T;
}

export interface IncomeSubscriptionPayload {
  mutation: MutationType;
  node: Income;
  updatedFields: String[];
  previousValues: IncomePreviousValues;
}

export interface IncomeSubscriptionPayloadPromise
  extends Promise<IncomeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = IncomePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = IncomePreviousValuesPromise>() => T;
}

export interface IncomeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<IncomeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = IncomeSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = IncomePreviousValuesSubscription>() => T;
}

export interface AggregateExpense {
  count: Int;
}

export interface AggregateExpensePromise
  extends Promise<AggregateExpense>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateExpenseSubscription
  extends Promise<AsyncIterator<AggregateExpense>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface IncomeEdge {
  node: Income;
  cursor: String;
}

export interface IncomeEdgePromise extends Promise<IncomeEdge>, Fragmentable {
  node: <T = IncomePromise>() => T;
  cursor: () => Promise<String>;
}

export interface IncomeEdgeSubscription
  extends Promise<AsyncIterator<IncomeEdge>>,
    Fragmentable {
  node: <T = IncomeSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
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

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Income",
    embedded: false
  },
  {
    name: "Expense",
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
