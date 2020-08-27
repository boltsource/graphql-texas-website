import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Hex: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
  /** Raw JSON value */
  Json: any;
  RGBATransparency: any;
  RGBAHue: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
};

/** Identifies documents */
export type FormTextareaWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormTextareaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormTextareaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormTextareaWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  label_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  label_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  placeholder_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  placeholder_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  placeholder_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  placeholder_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  placeholder_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  placeholder_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  placeholder_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  placeholder_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  placeholder_not_ends_with?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  required_not?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type FormTextareaManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormTextareaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormTextareaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormTextareaWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  label_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  label_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  placeholder_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  placeholder_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  placeholder_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  placeholder_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  placeholder_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  placeholder_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  placeholder_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  placeholder_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  placeholder_not_ends_with?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  required_not?: Maybe<Scalars['Boolean']>;
};

export type TalkUpdateManyInlineInput = {
  /** Create and connect multiple Talk documents */
  create?: Maybe<Array<TalkCreateInput>>;
  /** Connect multiple existing Talk documents */
  connect?: Maybe<Array<TalkConnectInput>>;
  /** Override currently-connected documents with multiple existing Talk documents */
  set?: Maybe<Array<TalkWhereUniqueInput>>;
  /** Update multiple Talk documents */
  update?: Maybe<Array<TalkUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Talk documents */
  upsert?: Maybe<Array<TalkUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Talk documents */
  disconnect?: Maybe<Array<TalkWhereUniqueInput>>;
  /** Delete multiple Talk documents */
  delete?: Maybe<Array<TalkWhereUniqueInput>>;
};

/** References Form record uniquely */
export type FormWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type FormUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormWhereUniqueInput;
  /** Document to update */
  data: FormUpdateInput;
};

export type FormCheckboxUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: FormCheckboxWhereInput;
  /** Update many input */
  data: FormCheckboxUpdateManyInput;
};

export type FormCheckboxUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  required?: Maybe<Scalars['Boolean']>;
};

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type FormInputUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormInputWhereUniqueInput;
  /** Document to update */
  data: FormInputUpdateInput;
};

export type SpeakerCreateManyInlineInput = {
  /** Create and connect multiple existing Speaker documents */
  create?: Maybe<Array<SpeakerCreateInput>>;
  /** Connect multiple existing Speaker documents */
  connect?: Maybe<Array<SpeakerWhereUniqueInput>>;
};

export type TalkUpsertInput = {
  /** Create document if it didn't exist */
  create: TalkCreateInput;
  /** Update document if it exists */
  update: TalkUpdateInput;
};

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export type CompanyCreateOneInlineInput = {
  /** Create and connect one Company document */
  create?: Maybe<CompanyCreateInput>;
  /** Connect one existing Company document */
  connect?: Maybe<CompanyWhereUniqueInput>;
};

export enum EventOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  MeetupIdAsc = 'meetupId_ASC',
  MeetupIdDesc = 'meetupId_DESC',
  IsCompleteAsc = 'isComplete_ASC',
  IsCompleteDesc = 'isComplete_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC'
}

export enum FormTextareaOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  PlaceholderAsc = 'placeholder_ASC',
  PlaceholderDesc = 'placeholder_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC'
}

/** Identifies documents */
export type PageManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  form?: Maybe<FormWhereInput>;
};

export type FormTextarea = Node & {
  __typename?: 'FormTextarea';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<FormTextarea>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  form?: Maybe<Form>;
  placeholder?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  /** List of FormTextarea versions */
  history: Array<Version>;
};


export type FormTextareaDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type FormTextareaHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type SpeakerUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: SpeakerWhereInput;
  /** Update many input */
  data: SpeakerUpdateManyInput;
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}


export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

export type FormUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: FormWhereInput;
  /** Update many input */
  data: FormUpdateManyInput;
};


export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>;
};

export type FormCheckboxUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormCheckboxWhereUniqueInput;
  /** Document to update */
  data: FormCheckboxUpdateInput;
};

export type FormCheckboxCreateOneInlineInput = {
  /** Create and connect one FormCheckbox document */
  create?: Maybe<FormCheckboxCreateInput>;
  /** Connect one existing FormCheckbox document */
  connect?: Maybe<FormCheckboxWhereUniqueInput>;
};

export enum SubmissionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC'
}

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type EventUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EventWhereUniqueInput;
  /** Upsert data */
  data: EventUpsertInput;
};

export type FormInputUpdateOneInlineInput = {
  /** Create and connect one FormInput document */
  create?: Maybe<FormInputCreateInput>;
  /** Update single FormInput document */
  update?: Maybe<FormInputUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormInput document */
  upsert?: Maybe<FormInputUpsertWithNestedWhereUniqueInput>;
  /** Connect existing FormInput document */
  connect?: Maybe<FormInputWhereUniqueInput>;
  /** Disconnect currently connected FormInput document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected FormInput document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

/** References Submission record uniquely */
export type SubmissionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type FormFieldsUpdateOneInlineInput = {
  /** Create and connect one FormFields document */
  create?: Maybe<FormFieldsCreateInput>;
  /** Update single FormFields document */
  update?: Maybe<FormFieldsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormFields document */
  upsert?: Maybe<FormFieldsUpsertWithNestedWhereUniqueInput>;
  /** Connect existing FormFields document */
  connect?: Maybe<FormFieldsWhereUniqueInput>;
  /** Disconnect currently connected FormFields document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected FormFields document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type CompanyUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CompanyWhereUniqueInput;
  /** Document to update */
  data: CompanyUpdateInput;
};

export type CompanyUpdateManyInlineInput = {
  /** Create and connect multiple Company documents */
  create?: Maybe<Array<CompanyCreateInput>>;
  /** Connect multiple existing Company documents */
  connect?: Maybe<Array<CompanyConnectInput>>;
  /** Override currently-connected documents with multiple existing Company documents */
  set?: Maybe<Array<CompanyWhereUniqueInput>>;
  /** Update multiple Company documents */
  update?: Maybe<Array<CompanyUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Company documents */
  upsert?: Maybe<Array<CompanyUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Company documents */
  disconnect?: Maybe<Array<CompanyWhereUniqueInput>>;
  /** Delete multiple Company documents */
  delete?: Maybe<Array<CompanyWhereUniqueInput>>;
};

export type SpeakerUpdateManyInput = {
  role: Scalars['String'];
};

export type SubmissionUpdateInput = {
  formData?: Maybe<Scalars['Json']>;
  form?: Maybe<FormUpdateOneInlineInput>;
};

export type Talk = Node & {
  __typename?: 'Talk';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Talk>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  time: Scalars['DateTime'];
  speaker?: Maybe<Speaker>;
  title: Scalars['String'];
  description: Scalars['String'];
  event?: Maybe<Event>;
  /** List of Talk versions */
  history: Array<Version>;
};


export type TalkDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type TalkHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
};

export type EventUpdateManyInlineInput = {
  /** Create and connect multiple Event documents */
  create?: Maybe<Array<EventCreateInput>>;
  /** Connect multiple existing Event documents */
  connect?: Maybe<Array<EventConnectInput>>;
  /** Override currently-connected documents with multiple existing Event documents */
  set?: Maybe<Array<EventWhereUniqueInput>>;
  /** Update multiple Event documents */
  update?: Maybe<Array<EventUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Event documents */
  upsert?: Maybe<Array<EventUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Event documents */
  disconnect?: Maybe<Array<EventWhereUniqueInput>>;
  /** Delete multiple Event documents */
  delete?: Maybe<Array<EventWhereUniqueInput>>;
};

export type FormTextareaUpsertInput = {
  /** Create document if it didn't exist */
  create: FormTextareaCreateInput;
  /** Update document if it exists */
  update: FormTextareaUpdateInput;
};

export type CompanyUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: CompanyWhereUniqueInput;
  /** Upsert data */
  data: CompanyUpsertInput;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** Identifies documents */
export type SpeakerManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SpeakerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SpeakerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SpeakerWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<AssetWhereInput>;
  company?: Maybe<CompanyWhereInput>;
  role?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  role_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  role_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  role_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  role_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  role_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  role_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  role_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  role_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  role_not_ends_with?: Maybe<Scalars['String']>;
  talks_every?: Maybe<TalkWhereInput>;
  talks_some?: Maybe<TalkWhereInput>;
  talks_none?: Maybe<TalkWhereInput>;
};

export type FormInputUpsertInput = {
  /** Create document if it didn't exist */
  create: FormInputCreateInput;
  /** Update document if it exists */
  update: FormInputUpdateInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageWhereUniqueInput;
  /** Upsert data */
  data: PageUpsertInput;
};

export type FormFieldsUpdateManyInlineInput = {
  /** Create and connect multiple FormFields documents */
  create?: Maybe<Array<FormFieldsCreateInput>>;
  /** Connect multiple existing FormFields documents */
  connect?: Maybe<Array<FormFieldsConnectInput>>;
  /** Override currently-connected documents with multiple existing FormFields documents */
  set?: Maybe<Array<FormFieldsWhereUniqueInput>>;
  /** Update multiple FormFields documents */
  update?: Maybe<Array<FormFieldsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FormFields documents */
  upsert?: Maybe<Array<FormFieldsUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple FormFields documents */
  disconnect?: Maybe<Array<FormFieldsWhereUniqueInput>>;
  /** Delete multiple FormFields documents */
  delete?: Maybe<Array<FormFieldsWhereUniqueInput>>;
};

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type CompanyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CompanyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CompanyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CompanyWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: Maybe<Scalars['String']>;
  participants_every?: Maybe<SpeakerWhereInput>;
  participants_some?: Maybe<SpeakerWhereInput>;
  participants_none?: Maybe<SpeakerWhereInput>;
};

export type FormUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormWhereUniqueInput;
  /** Upsert data */
  data: FormUpsertInput;
};

export type FormTextareaConnectInput = {
  /** Document to connect */
  where: FormTextareaWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type TalkUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TalkWhereUniqueInput;
  /** Document to update */
  data: TalkUpdateInput;
};


/** An edge in a connection. */
export type FormCheckboxEdge = {
  __typename?: 'FormCheckboxEdge';
  /** The item at the end of the edge. */
  node: FormCheckbox;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type FormInputManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormInputWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormInputWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormInputWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<FormInputType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<FormInputType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<FormInputType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<FormInputType>>;
  label?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  label_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  label_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  placeholder_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  placeholder_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  placeholder_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  placeholder_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  placeholder_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  placeholder_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  placeholder_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  placeholder_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  placeholder_not_ends_with?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  required_not?: Maybe<Scalars['Boolean']>;
};

export type SubmissionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: SubmissionWhereInput;
  /** Update many input */
  data: SubmissionUpdateManyInput;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
};

export enum FormOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC'
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  speakerPicture?: Maybe<SpeakerUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

/** Identifies documents */
export type EventManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EventWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  meetupId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  meetupId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  meetupId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  meetupId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  meetupId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  meetupId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  meetupId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  meetupId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  meetupId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  meetupId_not_ends_with?: Maybe<Scalars['String']>;
  isComplete?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isComplete_not?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  schedule_every?: Maybe<TalkWhereInput>;
  schedule_some?: Maybe<TalkWhereInput>;
  schedule_none?: Maybe<TalkWhereInput>;
  form?: Maybe<FormWhereInput>;
};

export type FormUpdateOneInlineInput = {
  /** Create and connect one Form document */
  create?: Maybe<FormCreateInput>;
  /** Update single Form document */
  update?: Maybe<FormUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Form document */
  upsert?: Maybe<FormUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Form document */
  connect?: Maybe<FormWhereUniqueInput>;
  /** Disconnect currently connected Form document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Form document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type FormFieldsWhereUniqueInput = {
  FormInput?: Maybe<FormInputWhereUniqueInput>;
  FormTextarea?: Maybe<FormTextareaWhereUniqueInput>;
  FormCheckbox?: Maybe<FormCheckboxWhereUniqueInput>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export type AssetUpdateManyInput = {
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type EventUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: EventWhereInput;
  /** Update many input */
  data: EventUpdateManyInput;
};

export type FormCheckbox = Node & {
  __typename?: 'FormCheckbox';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<FormCheckbox>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  form?: Maybe<Form>;
  required?: Maybe<Scalars['Boolean']>;
  /** List of FormCheckbox versions */
  history: Array<Version>;
};


export type FormCheckboxDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type FormCheckboxHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type FormCheckboxCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  form?: Maybe<FormCreateOneInlineInput>;
  required?: Maybe<Scalars['Boolean']>;
};

export type TalkUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: TalkWhereUniqueInput;
  /** Upsert data */
  data: TalkUpsertInput;
};

export type Form = Node & {
  __typename?: 'Form';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Form>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  page?: Maybe<Page>;
  fields: Array<FormFields>;
  event?: Maybe<Event>;
  submissions: Array<Submission>;
  /** List of Form versions */
  history: Array<Version>;
};


export type FormDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type FormFieldsArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type FormSubmissionsArgs = {
  where?: Maybe<SubmissionWhereInput>;
  orderBy?: Maybe<SubmissionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type FormHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type FormUpdateManyInlineInput = {
  /** Create and connect multiple Form documents */
  create?: Maybe<Array<FormCreateInput>>;
  /** Connect multiple existing Form documents */
  connect?: Maybe<Array<FormConnectInput>>;
  /** Override currently-connected documents with multiple existing Form documents */
  set?: Maybe<Array<FormWhereUniqueInput>>;
  /** Update multiple Form documents */
  update?: Maybe<Array<FormUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Form documents */
  upsert?: Maybe<Array<FormUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Form documents */
  disconnect?: Maybe<Array<FormWhereUniqueInput>>;
  /** Delete multiple Form documents */
  delete?: Maybe<Array<FormWhereUniqueInput>>;
};

export type FormInputUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormInputWhereUniqueInput;
  /** Upsert data */
  data: FormInputUpsertInput;
};

/** An edge in a connection. */
export type SpeakerEdge = {
  __typename?: 'SpeakerEdge';
  /** The item at the end of the edge. */
  node: Speaker;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type FormTextareaCreateOneInlineInput = {
  /** Create and connect one FormTextarea document */
  create?: Maybe<FormTextareaCreateInput>;
  /** Connect one existing FormTextarea document */
  connect?: Maybe<FormTextareaWhereUniqueInput>;
};

export type SpeakerUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SpeakerWhereUniqueInput;
  /** Document to update */
  data: SpeakerUpdateInput;
};

export type SubmissionUpsertInput = {
  /** Create document if it didn't exist */
  create: SubmissionCreateInput;
  /** Update document if it exists */
  update: SubmissionUpdateInput;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** A connection to a list of items. */
export type CompanyConnection = {
  __typename?: 'CompanyConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<CompanyEdge>;
  aggregate: Aggregate;
};

export type EventCreateManyInlineInput = {
  /** Create and connect multiple existing Event documents */
  create?: Maybe<Array<EventCreateInput>>;
  /** Connect multiple existing Event documents */
  connect?: Maybe<Array<EventWhereUniqueInput>>;
};

/** Identifies documents */
export type FormManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  page?: Maybe<PageWhereInput>;
  event?: Maybe<EventWhereInput>;
  submissions_every?: Maybe<SubmissionWhereInput>;
  submissions_some?: Maybe<SubmissionWhereInput>;
  submissions_none?: Maybe<SubmissionWhereInput>;
};

export type FormTextareaUpdateOneInlineInput = {
  /** Create and connect one FormTextarea document */
  create?: Maybe<FormTextareaCreateInput>;
  /** Update single FormTextarea document */
  update?: Maybe<FormTextareaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormTextarea document */
  upsert?: Maybe<FormTextareaUpsertWithNestedWhereUniqueInput>;
  /** Connect existing FormTextarea document */
  connect?: Maybe<FormTextareaWhereUniqueInput>;
  /** Disconnect currently connected FormTextarea document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected FormTextarea document */
  delete?: Maybe<Scalars['Boolean']>;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<PageEdge>;
  aggregate: Aggregate;
};

export type Version = {
  __typename?: 'Version';
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Upsert data */
  data: AssetUpsertInput;
};

export type CompanyUpdateInput = {
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  participants?: Maybe<SpeakerUpdateManyInlineInput>;
};

/** References FormTextarea record uniquely */
export type FormTextareaWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** References Speaker record uniquely */
export type SpeakerWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  speakerPicture_every?: Maybe<SpeakerWhereInput>;
  speakerPicture_some?: Maybe<SpeakerWhereInput>;
  speakerPicture_none?: Maybe<SpeakerWhereInput>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

/** An edge in a connection. */
export type FormEdge = {
  __typename?: 'FormEdge';
  /** The item at the end of the edge. */
  node: Form;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type FormInputCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<FormInputType>;
  form?: Maybe<FormCreateOneInlineInput>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
};

export type FormFieldsCreateInput = {
  FormInput?: Maybe<FormInputCreateInput>;
  FormTextarea?: Maybe<FormTextareaCreateInput>;
  FormCheckbox?: Maybe<FormCheckboxCreateInput>;
};

export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  speakerPicture?: Maybe<SpeakerCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type FormUpsertInput = {
  /** Create document if it didn't exist */
  create: FormCreateInput;
  /** Update document if it exists */
  update: FormUpdateInput;
};

/** References FormCheckbox record uniquely */
export type FormCheckboxWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/** An edge in a connection. */
export type FormInputEdge = {
  __typename?: 'FormInputEdge';
  /** The item at the end of the edge. */
  node: FormInput;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type PageWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  form?: Maybe<FormWhereInput>;
};

export type FormFieldsConnectInput = {
  FormInput?: Maybe<FormInputConnectInput>;
  FormTextarea?: Maybe<FormTextareaConnectInput>;
  FormCheckbox?: Maybe<FormCheckboxConnectInput>;
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type FormWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  page?: Maybe<PageWhereInput>;
  event?: Maybe<EventWhereInput>;
  submissions_every?: Maybe<SubmissionWhereInput>;
  submissions_some?: Maybe<SubmissionWhereInput>;
  submissions_none?: Maybe<SubmissionWhereInput>;
};

export type FormCreateManyInlineInput = {
  /** Create and connect multiple existing Form documents */
  create?: Maybe<Array<FormCreateInput>>;
  /** Connect multiple existing Form documents */
  connect?: Maybe<Array<FormWhereUniqueInput>>;
};

export type CompanyUpsertInput = {
  /** Create document if it didn't exist */
  create: CompanyCreateInput;
  /** Update document if it exists */
  update: CompanyUpdateInput;
};

export type PageCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  slug: Scalars['String'];
  form?: Maybe<FormCreateOneInlineInput>;
};

export enum SpeakerOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC'
}

export type SpeakerUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SpeakerWhereUniqueInput;
  /** Upsert data */
  data: SpeakerUpsertInput;
};

/** Identifies documents */
export type TalkWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TalkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TalkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TalkWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  time?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  time_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  time_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  time_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  time_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  time_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  time_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  time_gte?: Maybe<Scalars['DateTime']>;
  speaker?: Maybe<SpeakerWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  event?: Maybe<EventWhereInput>;
};

export type FormFieldsUpdateWithNestedWhereUniqueInput = {
  FormInput?: Maybe<FormInputUpdateWithNestedWhereUniqueInput>;
  FormTextarea?: Maybe<FormTextareaUpdateWithNestedWhereUniqueInput>;
  FormCheckbox?: Maybe<FormCheckboxUpdateWithNestedWhereUniqueInput>;
};

/** References FormInput record uniquely */
export type FormInputWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type FormInputCreateOneInlineInput = {
  /** Create and connect one FormInput document */
  create?: Maybe<FormInputCreateInput>;
  /** Connect one existing FormInput document */
  connect?: Maybe<FormInputWhereUniqueInput>;
};

export type FormTextareaUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormTextareaWhereUniqueInput;
  /** Upsert data */
  data: FormTextareaUpsertInput;
};

export type Speaker = Node & {
  __typename?: 'Speaker';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Speaker>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  picture: Asset;
  company?: Maybe<Company>;
  role: Scalars['String'];
  talks: Array<Talk>;
  /** List of Speaker versions */
  history: Array<Version>;
};


export type SpeakerDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type SpeakerTalksArgs = {
  where?: Maybe<TalkWhereInput>;
  orderBy?: Maybe<TalkOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type SpeakerHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type EventUpdateOneInlineInput = {
  /** Create and connect one Event document */
  create?: Maybe<EventCreateInput>;
  /** Update single Event document */
  update?: Maybe<EventUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Event document */
  upsert?: Maybe<EventUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Event document */
  connect?: Maybe<EventWhereUniqueInput>;
  /** Disconnect currently connected Event document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Event document */
  delete?: Maybe<Scalars['Boolean']>;
};

/** An edge in a connection. */
export type TalkEdge = {
  __typename?: 'TalkEdge';
  /** The item at the end of the edge. */
  node: Talk;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type FormFieldsUpdateManyWithNestedWhereInput = {
  FormInput?: Maybe<FormInputUpdateManyWithNestedWhereInput>;
  FormTextarea?: Maybe<FormTextareaUpdateManyWithNestedWhereInput>;
  FormCheckbox?: Maybe<FormCheckboxUpdateManyWithNestedWhereInput>;
};

export type TalkUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: TalkWhereInput;
  /** Update many input */
  data: TalkUpdateManyInput;
};

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export type FormCheckboxUpsertInput = {
  /** Create document if it didn't exist */
  create: FormCheckboxCreateInput;
  /** Update document if it exists */
  update: FormCheckboxUpdateInput;
};

export type SpeakerUpdateManyInlineInput = {
  /** Create and connect multiple Speaker documents */
  create?: Maybe<Array<SpeakerCreateInput>>;
  /** Connect multiple existing Speaker documents */
  connect?: Maybe<Array<SpeakerConnectInput>>;
  /** Override currently-connected documents with multiple existing Speaker documents */
  set?: Maybe<Array<SpeakerWhereUniqueInput>>;
  /** Update multiple Speaker documents */
  update?: Maybe<Array<SpeakerUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Speaker documents */
  upsert?: Maybe<Array<SpeakerUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Speaker documents */
  disconnect?: Maybe<Array<SpeakerWhereUniqueInput>>;
  /** Delete multiple Speaker documents */
  delete?: Maybe<Array<SpeakerWhereUniqueInput>>;
};

export type FormCheckboxUpdateManyInlineInput = {
  /** Create and connect multiple FormCheckbox documents */
  create?: Maybe<Array<FormCheckboxCreateInput>>;
  /** Connect multiple existing FormCheckbox documents */
  connect?: Maybe<Array<FormCheckboxConnectInput>>;
  /** Override currently-connected documents with multiple existing FormCheckbox documents */
  set?: Maybe<Array<FormCheckboxWhereUniqueInput>>;
  /** Update multiple FormCheckbox documents */
  update?: Maybe<Array<FormCheckboxUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FormCheckbox documents */
  upsert?: Maybe<Array<FormCheckboxUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple FormCheckbox documents */
  disconnect?: Maybe<Array<FormCheckboxWhereUniqueInput>>;
  /** Delete multiple FormCheckbox documents */
  delete?: Maybe<Array<FormCheckboxWhereUniqueInput>>;
};

export type Submission = Node & {
  __typename?: 'Submission';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Submission>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  formData?: Maybe<Scalars['Json']>;
  form?: Maybe<Form>;
  /** List of Submission versions */
  history: Array<Version>;
};


export type SubmissionDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type SubmissionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type SubmissionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SubmissionWhereUniqueInput;
  /** Document to update */
  data: SubmissionUpdateInput;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PageWhereInput;
  /** Update many input */
  data: PageUpdateManyInput;
};

export type SpeakerCreateOneInlineInput = {
  /** Create and connect one Speaker document */
  create?: Maybe<SpeakerCreateInput>;
  /** Connect one existing Speaker document */
  connect?: Maybe<SpeakerWhereUniqueInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type EventWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EventWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  meetupId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  meetupId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  meetupId_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  meetupId_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  meetupId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  meetupId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  meetupId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  meetupId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  meetupId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  meetupId_not_ends_with?: Maybe<Scalars['String']>;
  isComplete?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isComplete_not?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['Date']>>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  schedule_every?: Maybe<TalkWhereInput>;
  schedule_some?: Maybe<TalkWhereInput>;
  schedule_none?: Maybe<TalkWhereInput>;
  form?: Maybe<FormWhereInput>;
};

export type EventUpdateManyInput = {
  isComplete: Scalars['Boolean'];
  date: Scalars['Date'];
  description: Scalars['String'];
};

export type PageConnectInput = {
  /** Document to connect */
  where: PageWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   * 
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>;
};

export type FormCheckboxConnectInput = {
  /** Document to connect */
  where: FormCheckboxWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type Page = Node & {
  __typename?: 'Page';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  slug: Scalars['String'];
  form?: Maybe<Form>;
  /** List of Page versions */
  history: Array<Version>;
};


export type PageDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum TalkOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TimeAsc = 'time_ASC',
  TimeDesc = 'time_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC'
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type FormCheckboxCreateManyInlineInput = {
  /** Create and connect multiple existing FormCheckbox documents */
  create?: Maybe<Array<FormCheckboxCreateInput>>;
  /** Connect multiple existing FormCheckbox documents */
  connect?: Maybe<Array<FormCheckboxWhereUniqueInput>>;
};

/** A connection to a list of items. */
export type FormInputConnection = {
  __typename?: 'FormInputConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<FormInputEdge>;
  aggregate: Aggregate;
};

/** Identifies documents */
export type SpeakerWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SpeakerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SpeakerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SpeakerWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  picture?: Maybe<AssetWhereInput>;
  company?: Maybe<CompanyWhereInput>;
  role?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  role_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  role_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  role_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  role_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  role_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  role_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  role_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  role_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  role_not_ends_with?: Maybe<Scalars['String']>;
  talks_every?: Maybe<TalkWhereInput>;
  talks_some?: Maybe<TalkWhereInput>;
  talks_none?: Maybe<TalkWhereInput>;
};

export type TalkCreateOneInlineInput = {
  /** Create and connect one Talk document */
  create?: Maybe<TalkCreateInput>;
  /** Connect one existing Talk document */
  connect?: Maybe<TalkWhereUniqueInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Create one company */
  createCompany?: Maybe<Company>;
  /** Update one company */
  updateCompany?: Maybe<Company>;
  /** Delete one company from _all_ existing stages. Returns deleted document. */
  deleteCompany?: Maybe<Company>;
  /** Upsert one company */
  upsertCompany?: Maybe<Company>;
  /** Publish one company */
  publishCompany?: Maybe<Company>;
  /** Unpublish one company from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCompany?: Maybe<Company>;
  /** Update many Company documents */
  updateManyCompaniesConnection: CompanyConnection;
  /** Delete many Company documents, return deleted documents */
  deleteManyCompaniesConnection: CompanyConnection;
  /** Publish many Company documents */
  publishManyCompaniesConnection: CompanyConnection;
  /** Find many Company documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCompaniesConnection: CompanyConnection;
  /**
   * Update many companies
   * @deprecated Please use the new paginated many mutation (updateManyCompaniesConnection)
   */
  updateManyCompanies: BatchPayload;
  /**
   * Delete many Company documents
   * @deprecated Please use the new paginated many mutation (deleteManyCompaniesConnection)
   */
  deleteManyCompanies: BatchPayload;
  /**
   * Publish many Company documents
   * @deprecated Please use the new paginated many mutation (publishManyCompaniesConnection)
   */
  publishManyCompanies: BatchPayload;
  /**
   * Unpublish many Company documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCompaniesConnection)
   */
  unpublishManyCompanies: BatchPayload;
  /** Create one event */
  createEvent?: Maybe<Event>;
  /** Update one event */
  updateEvent?: Maybe<Event>;
  /** Delete one event from _all_ existing stages. Returns deleted document. */
  deleteEvent?: Maybe<Event>;
  /** Upsert one event */
  upsertEvent?: Maybe<Event>;
  /** Publish one event */
  publishEvent?: Maybe<Event>;
  /** Unpublish one event from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEvent?: Maybe<Event>;
  /** Update many Event documents */
  updateManyEventsConnection: EventConnection;
  /** Delete many Event documents, return deleted documents */
  deleteManyEventsConnection: EventConnection;
  /** Publish many Event documents */
  publishManyEventsConnection: EventConnection;
  /** Find many Event documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEventsConnection: EventConnection;
  /**
   * Update many events
   * @deprecated Please use the new paginated many mutation (updateManyEventsConnection)
   */
  updateManyEvents: BatchPayload;
  /**
   * Delete many Event documents
   * @deprecated Please use the new paginated many mutation (deleteManyEventsConnection)
   */
  deleteManyEvents: BatchPayload;
  /**
   * Publish many Event documents
   * @deprecated Please use the new paginated many mutation (publishManyEventsConnection)
   */
  publishManyEvents: BatchPayload;
  /**
   * Unpublish many Event documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEventsConnection)
   */
  unpublishManyEvents: BatchPayload;
  /** Create one form */
  createForm?: Maybe<Form>;
  /** Update one form */
  updateForm?: Maybe<Form>;
  /** Delete one form from _all_ existing stages. Returns deleted document. */
  deleteForm?: Maybe<Form>;
  /** Upsert one form */
  upsertForm?: Maybe<Form>;
  /** Publish one form */
  publishForm?: Maybe<Form>;
  /** Unpublish one form from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishForm?: Maybe<Form>;
  /** Update many Form documents */
  updateManyFormsConnection: FormConnection;
  /** Delete many Form documents, return deleted documents */
  deleteManyFormsConnection: FormConnection;
  /** Publish many Form documents */
  publishManyFormsConnection: FormConnection;
  /** Find many Form documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFormsConnection: FormConnection;
  /**
   * Update many forms
   * @deprecated Please use the new paginated many mutation (updateManyFormsConnection)
   */
  updateManyForms: BatchPayload;
  /**
   * Delete many Form documents
   * @deprecated Please use the new paginated many mutation (deleteManyFormsConnection)
   */
  deleteManyForms: BatchPayload;
  /**
   * Publish many Form documents
   * @deprecated Please use the new paginated many mutation (publishManyFormsConnection)
   */
  publishManyForms: BatchPayload;
  /**
   * Unpublish many Form documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFormsConnection)
   */
  unpublishManyForms: BatchPayload;
  /** Create one formCheckbox */
  createFormCheckbox?: Maybe<FormCheckbox>;
  /** Update one formCheckbox */
  updateFormCheckbox?: Maybe<FormCheckbox>;
  /** Delete one formCheckbox from _all_ existing stages. Returns deleted document. */
  deleteFormCheckbox?: Maybe<FormCheckbox>;
  /** Upsert one formCheckbox */
  upsertFormCheckbox?: Maybe<FormCheckbox>;
  /** Publish one formCheckbox */
  publishFormCheckbox?: Maybe<FormCheckbox>;
  /** Unpublish one formCheckbox from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFormCheckbox?: Maybe<FormCheckbox>;
  /** Update many FormCheckbox documents */
  updateManyFormCheckboxesConnection: FormCheckboxConnection;
  /** Delete many FormCheckbox documents, return deleted documents */
  deleteManyFormCheckboxesConnection: FormCheckboxConnection;
  /** Publish many FormCheckbox documents */
  publishManyFormCheckboxesConnection: FormCheckboxConnection;
  /** Find many FormCheckbox documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFormCheckboxesConnection: FormCheckboxConnection;
  /**
   * Update many formCheckboxes
   * @deprecated Please use the new paginated many mutation (updateManyFormCheckboxesConnection)
   */
  updateManyFormCheckboxes: BatchPayload;
  /**
   * Delete many FormCheckbox documents
   * @deprecated Please use the new paginated many mutation (deleteManyFormCheckboxesConnection)
   */
  deleteManyFormCheckboxes: BatchPayload;
  /**
   * Publish many FormCheckbox documents
   * @deprecated Please use the new paginated many mutation (publishManyFormCheckboxesConnection)
   */
  publishManyFormCheckboxes: BatchPayload;
  /**
   * Unpublish many FormCheckbox documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFormCheckboxesConnection)
   */
  unpublishManyFormCheckboxes: BatchPayload;
  /** Create one formInput */
  createFormInput?: Maybe<FormInput>;
  /** Update one formInput */
  updateFormInput?: Maybe<FormInput>;
  /** Delete one formInput from _all_ existing stages. Returns deleted document. */
  deleteFormInput?: Maybe<FormInput>;
  /** Upsert one formInput */
  upsertFormInput?: Maybe<FormInput>;
  /** Publish one formInput */
  publishFormInput?: Maybe<FormInput>;
  /** Unpublish one formInput from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFormInput?: Maybe<FormInput>;
  /** Update many FormInput documents */
  updateManyFormInputsConnection: FormInputConnection;
  /** Delete many FormInput documents, return deleted documents */
  deleteManyFormInputsConnection: FormInputConnection;
  /** Publish many FormInput documents */
  publishManyFormInputsConnection: FormInputConnection;
  /** Find many FormInput documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFormInputsConnection: FormInputConnection;
  /**
   * Update many formInputs
   * @deprecated Please use the new paginated many mutation (updateManyFormInputsConnection)
   */
  updateManyFormInputs: BatchPayload;
  /**
   * Delete many FormInput documents
   * @deprecated Please use the new paginated many mutation (deleteManyFormInputsConnection)
   */
  deleteManyFormInputs: BatchPayload;
  /**
   * Publish many FormInput documents
   * @deprecated Please use the new paginated many mutation (publishManyFormInputsConnection)
   */
  publishManyFormInputs: BatchPayload;
  /**
   * Unpublish many FormInput documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFormInputsConnection)
   */
  unpublishManyFormInputs: BatchPayload;
  /** Create one formTextarea */
  createFormTextarea?: Maybe<FormTextarea>;
  /** Update one formTextarea */
  updateFormTextarea?: Maybe<FormTextarea>;
  /** Delete one formTextarea from _all_ existing stages. Returns deleted document. */
  deleteFormTextarea?: Maybe<FormTextarea>;
  /** Upsert one formTextarea */
  upsertFormTextarea?: Maybe<FormTextarea>;
  /** Publish one formTextarea */
  publishFormTextarea?: Maybe<FormTextarea>;
  /** Unpublish one formTextarea from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFormTextarea?: Maybe<FormTextarea>;
  /** Update many FormTextarea documents */
  updateManyFormTextareasConnection: FormTextareaConnection;
  /** Delete many FormTextarea documents, return deleted documents */
  deleteManyFormTextareasConnection: FormTextareaConnection;
  /** Publish many FormTextarea documents */
  publishManyFormTextareasConnection: FormTextareaConnection;
  /** Find many FormTextarea documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFormTextareasConnection: FormTextareaConnection;
  /**
   * Update many formTextareas
   * @deprecated Please use the new paginated many mutation (updateManyFormTextareasConnection)
   */
  updateManyFormTextareas: BatchPayload;
  /**
   * Delete many FormTextarea documents
   * @deprecated Please use the new paginated many mutation (deleteManyFormTextareasConnection)
   */
  deleteManyFormTextareas: BatchPayload;
  /**
   * Publish many FormTextarea documents
   * @deprecated Please use the new paginated many mutation (publishManyFormTextareasConnection)
   */
  publishManyFormTextareas: BatchPayload;
  /**
   * Unpublish many FormTextarea documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFormTextareasConnection)
   */
  unpublishManyFormTextareas: BatchPayload;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Create one speaker */
  createSpeaker?: Maybe<Speaker>;
  /** Update one speaker */
  updateSpeaker?: Maybe<Speaker>;
  /** Delete one speaker from _all_ existing stages. Returns deleted document. */
  deleteSpeaker?: Maybe<Speaker>;
  /** Upsert one speaker */
  upsertSpeaker?: Maybe<Speaker>;
  /** Publish one speaker */
  publishSpeaker?: Maybe<Speaker>;
  /** Unpublish one speaker from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSpeaker?: Maybe<Speaker>;
  /** Update many Speaker documents */
  updateManySpeakersConnection: SpeakerConnection;
  /** Delete many Speaker documents, return deleted documents */
  deleteManySpeakersConnection: SpeakerConnection;
  /** Publish many Speaker documents */
  publishManySpeakersConnection: SpeakerConnection;
  /** Find many Speaker documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySpeakersConnection: SpeakerConnection;
  /**
   * Update many speakers
   * @deprecated Please use the new paginated many mutation (updateManySpeakersConnection)
   */
  updateManySpeakers: BatchPayload;
  /**
   * Delete many Speaker documents
   * @deprecated Please use the new paginated many mutation (deleteManySpeakersConnection)
   */
  deleteManySpeakers: BatchPayload;
  /**
   * Publish many Speaker documents
   * @deprecated Please use the new paginated many mutation (publishManySpeakersConnection)
   */
  publishManySpeakers: BatchPayload;
  /**
   * Unpublish many Speaker documents
   * @deprecated Please use the new paginated many mutation (unpublishManySpeakersConnection)
   */
  unpublishManySpeakers: BatchPayload;
  /** Create one submission */
  createSubmission?: Maybe<Submission>;
  /** Update one submission */
  updateSubmission?: Maybe<Submission>;
  /** Delete one submission from _all_ existing stages. Returns deleted document. */
  deleteSubmission?: Maybe<Submission>;
  /** Upsert one submission */
  upsertSubmission?: Maybe<Submission>;
  /** Publish one submission */
  publishSubmission?: Maybe<Submission>;
  /** Unpublish one submission from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSubmission?: Maybe<Submission>;
  /** Update many Submission documents */
  updateManySubmissionsConnection: SubmissionConnection;
  /** Delete many Submission documents, return deleted documents */
  deleteManySubmissionsConnection: SubmissionConnection;
  /** Publish many Submission documents */
  publishManySubmissionsConnection: SubmissionConnection;
  /** Find many Submission documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySubmissionsConnection: SubmissionConnection;
  /**
   * Update many submissions
   * @deprecated Please use the new paginated many mutation (updateManySubmissionsConnection)
   */
  updateManySubmissions: BatchPayload;
  /**
   * Delete many Submission documents
   * @deprecated Please use the new paginated many mutation (deleteManySubmissionsConnection)
   */
  deleteManySubmissions: BatchPayload;
  /**
   * Publish many Submission documents
   * @deprecated Please use the new paginated many mutation (publishManySubmissionsConnection)
   */
  publishManySubmissions: BatchPayload;
  /**
   * Unpublish many Submission documents
   * @deprecated Please use the new paginated many mutation (unpublishManySubmissionsConnection)
   */
  unpublishManySubmissions: BatchPayload;
  /** Create one talk */
  createTalk?: Maybe<Talk>;
  /** Update one talk */
  updateTalk?: Maybe<Talk>;
  /** Delete one talk from _all_ existing stages. Returns deleted document. */
  deleteTalk?: Maybe<Talk>;
  /** Upsert one talk */
  upsertTalk?: Maybe<Talk>;
  /** Publish one talk */
  publishTalk?: Maybe<Talk>;
  /** Unpublish one talk from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTalk?: Maybe<Talk>;
  /** Update many Talk documents */
  updateManyTalksConnection: TalkConnection;
  /** Delete many Talk documents, return deleted documents */
  deleteManyTalksConnection: TalkConnection;
  /** Publish many Talk documents */
  publishManyTalksConnection: TalkConnection;
  /** Find many Talk documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTalksConnection: TalkConnection;
  /**
   * Update many talks
   * @deprecated Please use the new paginated many mutation (updateManyTalksConnection)
   */
  updateManyTalks: BatchPayload;
  /**
   * Delete many Talk documents
   * @deprecated Please use the new paginated many mutation (deleteManyTalksConnection)
   */
  deleteManyTalks: BatchPayload;
  /**
   * Publish many Talk documents
   * @deprecated Please use the new paginated many mutation (publishManyTalksConnection)
   */
  publishManyTalks: BatchPayload;
  /**
   * Unpublish many Talk documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTalksConnection)
   */
  unpublishManyTalks: BatchPayload;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateCompanyArgs = {
  data: CompanyCreateInput;
};


export type MutationUpdateCompanyArgs = {
  where: CompanyWhereUniqueInput;
  data: CompanyUpdateInput;
};


export type MutationDeleteCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type MutationUpsertCompanyArgs = {
  where: CompanyWhereUniqueInput;
  upsert: CompanyUpsertInput;
};


export type MutationPublishCompanyArgs = {
  where: CompanyWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishCompanyArgs = {
  where: CompanyWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyCompaniesConnectionArgs = {
  where?: Maybe<CompanyManyWhereInput>;
  data: CompanyUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyCompaniesConnectionArgs = {
  where?: Maybe<CompanyManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyCompaniesConnectionArgs = {
  where?: Maybe<CompanyManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyCompaniesConnectionArgs = {
  where?: Maybe<CompanyManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyCompaniesArgs = {
  where?: Maybe<CompanyManyWhereInput>;
  data: CompanyUpdateManyInput;
};


export type MutationDeleteManyCompaniesArgs = {
  where?: Maybe<CompanyManyWhereInput>;
};


export type MutationPublishManyCompaniesArgs = {
  where?: Maybe<CompanyManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyCompaniesArgs = {
  where?: Maybe<CompanyManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationUpdateEventArgs = {
  where: EventWhereUniqueInput;
  data: EventUpdateInput;
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationUpsertEventArgs = {
  where: EventWhereUniqueInput;
  upsert: EventUpsertInput;
};


export type MutationPublishEventArgs = {
  where: EventWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishEventArgs = {
  where: EventWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyEventsConnectionArgs = {
  where?: Maybe<EventManyWhereInput>;
  data: EventUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyEventsConnectionArgs = {
  where?: Maybe<EventManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyEventsConnectionArgs = {
  where?: Maybe<EventManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyEventsConnectionArgs = {
  where?: Maybe<EventManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyEventsArgs = {
  where?: Maybe<EventManyWhereInput>;
  data: EventUpdateManyInput;
};


export type MutationDeleteManyEventsArgs = {
  where?: Maybe<EventManyWhereInput>;
};


export type MutationPublishManyEventsArgs = {
  where?: Maybe<EventManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyEventsArgs = {
  where?: Maybe<EventManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateFormArgs = {
  data: FormCreateInput;
};


export type MutationUpdateFormArgs = {
  where: FormWhereUniqueInput;
  data: FormUpdateInput;
};


export type MutationDeleteFormArgs = {
  where: FormWhereUniqueInput;
};


export type MutationUpsertFormArgs = {
  where: FormWhereUniqueInput;
  upsert: FormUpsertInput;
};


export type MutationPublishFormArgs = {
  where: FormWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishFormArgs = {
  where: FormWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyFormsConnectionArgs = {
  where?: Maybe<FormManyWhereInput>;
  data: FormUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyFormsConnectionArgs = {
  where?: Maybe<FormManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyFormsConnectionArgs = {
  where?: Maybe<FormManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyFormsConnectionArgs = {
  where?: Maybe<FormManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyFormsArgs = {
  where?: Maybe<FormManyWhereInput>;
  data: FormUpdateManyInput;
};


export type MutationDeleteManyFormsArgs = {
  where?: Maybe<FormManyWhereInput>;
};


export type MutationPublishManyFormsArgs = {
  where?: Maybe<FormManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyFormsArgs = {
  where?: Maybe<FormManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateFormCheckboxArgs = {
  data: FormCheckboxCreateInput;
};


export type MutationUpdateFormCheckboxArgs = {
  where: FormCheckboxWhereUniqueInput;
  data: FormCheckboxUpdateInput;
};


export type MutationDeleteFormCheckboxArgs = {
  where: FormCheckboxWhereUniqueInput;
};


export type MutationUpsertFormCheckboxArgs = {
  where: FormCheckboxWhereUniqueInput;
  upsert: FormCheckboxUpsertInput;
};


export type MutationPublishFormCheckboxArgs = {
  where: FormCheckboxWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishFormCheckboxArgs = {
  where: FormCheckboxWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyFormCheckboxesConnectionArgs = {
  where?: Maybe<FormCheckboxManyWhereInput>;
  data: FormCheckboxUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyFormCheckboxesConnectionArgs = {
  where?: Maybe<FormCheckboxManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyFormCheckboxesConnectionArgs = {
  where?: Maybe<FormCheckboxManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyFormCheckboxesConnectionArgs = {
  where?: Maybe<FormCheckboxManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyFormCheckboxesArgs = {
  where?: Maybe<FormCheckboxManyWhereInput>;
  data: FormCheckboxUpdateManyInput;
};


export type MutationDeleteManyFormCheckboxesArgs = {
  where?: Maybe<FormCheckboxManyWhereInput>;
};


export type MutationPublishManyFormCheckboxesArgs = {
  where?: Maybe<FormCheckboxManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyFormCheckboxesArgs = {
  where?: Maybe<FormCheckboxManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateFormInputArgs = {
  data: FormInputCreateInput;
};


export type MutationUpdateFormInputArgs = {
  where: FormInputWhereUniqueInput;
  data: FormInputUpdateInput;
};


export type MutationDeleteFormInputArgs = {
  where: FormInputWhereUniqueInput;
};


export type MutationUpsertFormInputArgs = {
  where: FormInputWhereUniqueInput;
  upsert: FormInputUpsertInput;
};


export type MutationPublishFormInputArgs = {
  where: FormInputWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishFormInputArgs = {
  where: FormInputWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyFormInputsConnectionArgs = {
  where?: Maybe<FormInputManyWhereInput>;
  data: FormInputUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyFormInputsConnectionArgs = {
  where?: Maybe<FormInputManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyFormInputsConnectionArgs = {
  where?: Maybe<FormInputManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyFormInputsConnectionArgs = {
  where?: Maybe<FormInputManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyFormInputsArgs = {
  where?: Maybe<FormInputManyWhereInput>;
  data: FormInputUpdateManyInput;
};


export type MutationDeleteManyFormInputsArgs = {
  where?: Maybe<FormInputManyWhereInput>;
};


export type MutationPublishManyFormInputsArgs = {
  where?: Maybe<FormInputManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyFormInputsArgs = {
  where?: Maybe<FormInputManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateFormTextareaArgs = {
  data: FormTextareaCreateInput;
};


export type MutationUpdateFormTextareaArgs = {
  where: FormTextareaWhereUniqueInput;
  data: FormTextareaUpdateInput;
};


export type MutationDeleteFormTextareaArgs = {
  where: FormTextareaWhereUniqueInput;
};


export type MutationUpsertFormTextareaArgs = {
  where: FormTextareaWhereUniqueInput;
  upsert: FormTextareaUpsertInput;
};


export type MutationPublishFormTextareaArgs = {
  where: FormTextareaWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishFormTextareaArgs = {
  where: FormTextareaWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyFormTextareasConnectionArgs = {
  where?: Maybe<FormTextareaManyWhereInput>;
  data: FormTextareaUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyFormTextareasConnectionArgs = {
  where?: Maybe<FormTextareaManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyFormTextareasConnectionArgs = {
  where?: Maybe<FormTextareaManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyFormTextareasConnectionArgs = {
  where?: Maybe<FormTextareaManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyFormTextareasArgs = {
  where?: Maybe<FormTextareaManyWhereInput>;
  data: FormTextareaUpdateManyInput;
};


export type MutationDeleteManyFormTextareasArgs = {
  where?: Maybe<FormTextareaManyWhereInput>;
};


export type MutationPublishManyFormTextareasArgs = {
  where?: Maybe<FormTextareaManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyFormTextareasArgs = {
  where?: Maybe<FormTextareaManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationUpdatePageArgs = {
  where: PageWhereUniqueInput;
  data: PageUpdateInput;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  where: PageWhereUniqueInput;
  upsert: PageUpsertInput;
};


export type MutationPublishPageArgs = {
  where: PageWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishPageArgs = {
  where: PageWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  data: PageUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  data: PageUpdateManyInput;
};


export type MutationDeleteManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
};


export type MutationPublishManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateSpeakerArgs = {
  data: SpeakerCreateInput;
};


export type MutationUpdateSpeakerArgs = {
  where: SpeakerWhereUniqueInput;
  data: SpeakerUpdateInput;
};


export type MutationDeleteSpeakerArgs = {
  where: SpeakerWhereUniqueInput;
};


export type MutationUpsertSpeakerArgs = {
  where: SpeakerWhereUniqueInput;
  upsert: SpeakerUpsertInput;
};


export type MutationPublishSpeakerArgs = {
  where: SpeakerWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishSpeakerArgs = {
  where: SpeakerWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManySpeakersConnectionArgs = {
  where?: Maybe<SpeakerManyWhereInput>;
  data: SpeakerUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManySpeakersConnectionArgs = {
  where?: Maybe<SpeakerManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManySpeakersConnectionArgs = {
  where?: Maybe<SpeakerManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManySpeakersConnectionArgs = {
  where?: Maybe<SpeakerManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManySpeakersArgs = {
  where?: Maybe<SpeakerManyWhereInput>;
  data: SpeakerUpdateManyInput;
};


export type MutationDeleteManySpeakersArgs = {
  where?: Maybe<SpeakerManyWhereInput>;
};


export type MutationPublishManySpeakersArgs = {
  where?: Maybe<SpeakerManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManySpeakersArgs = {
  where?: Maybe<SpeakerManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateSubmissionArgs = {
  data: SubmissionCreateInput;
};


export type MutationUpdateSubmissionArgs = {
  where: SubmissionWhereUniqueInput;
  data: SubmissionUpdateInput;
};


export type MutationDeleteSubmissionArgs = {
  where: SubmissionWhereUniqueInput;
};


export type MutationUpsertSubmissionArgs = {
  where: SubmissionWhereUniqueInput;
  upsert: SubmissionUpsertInput;
};


export type MutationPublishSubmissionArgs = {
  where: SubmissionWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishSubmissionArgs = {
  where: SubmissionWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManySubmissionsConnectionArgs = {
  where?: Maybe<SubmissionManyWhereInput>;
  data: SubmissionUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManySubmissionsConnectionArgs = {
  where?: Maybe<SubmissionManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManySubmissionsConnectionArgs = {
  where?: Maybe<SubmissionManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManySubmissionsConnectionArgs = {
  where?: Maybe<SubmissionManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManySubmissionsArgs = {
  where?: Maybe<SubmissionManyWhereInput>;
  data: SubmissionUpdateManyInput;
};


export type MutationDeleteManySubmissionsArgs = {
  where?: Maybe<SubmissionManyWhereInput>;
};


export type MutationPublishManySubmissionsArgs = {
  where?: Maybe<SubmissionManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManySubmissionsArgs = {
  where?: Maybe<SubmissionManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateTalkArgs = {
  data: TalkCreateInput;
};


export type MutationUpdateTalkArgs = {
  where: TalkWhereUniqueInput;
  data: TalkUpdateInput;
};


export type MutationDeleteTalkArgs = {
  where: TalkWhereUniqueInput;
};


export type MutationUpsertTalkArgs = {
  where: TalkWhereUniqueInput;
  upsert: TalkUpsertInput;
};


export type MutationPublishTalkArgs = {
  where: TalkWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishTalkArgs = {
  where: TalkWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyTalksConnectionArgs = {
  where?: Maybe<TalkManyWhereInput>;
  data: TalkUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyTalksConnectionArgs = {
  where?: Maybe<TalkManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyTalksConnectionArgs = {
  where?: Maybe<TalkManyWhereInput>;
  from?: Maybe<Stage>;
  to?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyTalksConnectionArgs = {
  where?: Maybe<TalkManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: Array<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyTalksArgs = {
  where?: Maybe<TalkManyWhereInput>;
  data: TalkUpdateManyInput;
};


export type MutationDeleteManyTalksArgs = {
  where?: Maybe<TalkManyWhereInput>;
};


export type MutationPublishManyTalksArgs = {
  where?: Maybe<TalkManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyTalksArgs = {
  where?: Maybe<TalkManyWhereInput>;
  from?: Array<Stage>;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  stage: Stage;
  revision: Scalars['Int'];
};

export type FormInputUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: FormInputWhereInput;
  /** Update many input */
  data: FormInputUpdateManyInput;
};

export type PageUpdateOneInlineInput = {
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
  /** Update single Page document */
  update?: Maybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: Maybe<PageUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
  /** Disconnect currently connected Page document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Page document */
  delete?: Maybe<Scalars['Boolean']>;
};

/** A connection to a list of items. */
export type FormConnection = {
  __typename?: 'FormConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<FormEdge>;
  aggregate: Aggregate;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type EventConnectInput = {
  /** Document to connect */
  where: EventWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

/** Identifies documents */
export type CompanyManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CompanyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CompanyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CompanyWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  url_not_ends_with?: Maybe<Scalars['String']>;
  participants_every?: Maybe<SpeakerWhereInput>;
  participants_some?: Maybe<SpeakerWhereInput>;
  participants_none?: Maybe<SpeakerWhereInput>;
};

export type CompanyCreateManyInlineInput = {
  /** Create and connect multiple existing Company documents */
  create?: Maybe<Array<CompanyCreateInput>>;
  /** Connect multiple existing Company documents */
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
};

export type SpeakerCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  picture: AssetCreateOneInlineInput;
  company?: Maybe<CompanyCreateOneInlineInput>;
  role: Scalars['String'];
  talks?: Maybe<TalkCreateManyInlineInput>;
};

/** References Talk record uniquely */
export type TalkWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type FormFieldsCreateManyInlineInput = {
  /** Create and connect multiple existing FormFields documents */
  create?: Maybe<Array<FormFieldsCreateInput>>;
  /** Connect multiple existing FormFields documents */
  connect?: Maybe<Array<FormFieldsWhereUniqueInput>>;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput;
  /** Document to update */
  data: AssetUpdateInput;
};

export type FormTextareaUpdateInput = {
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  form?: Maybe<FormUpdateOneInlineInput>;
  placeholder?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
};

export type EventUpdateInput = {
  meetupId?: Maybe<Scalars['String']>;
  isComplete?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  schedule?: Maybe<TalkUpdateManyInlineInput>;
  form?: Maybe<FormUpdateOneInlineInput>;
};

export type FormCreateOneInlineInput = {
  /** Create and connect one Form document */
  create?: Maybe<FormCreateInput>;
  /** Connect one existing Form document */
  connect?: Maybe<FormWhereUniqueInput>;
};

export type PageUpdateManyInput = {
  title: Scalars['String'];
  slug: Scalars['String'];
};

export type SubmissionCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  formData?: Maybe<Scalars['Json']>;
  form?: Maybe<FormCreateOneInlineInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type EventUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: EventWhereUniqueInput;
  /** Document to update */
  data: EventUpdateInput;
};


export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type FormCheckboxUpdateOneInlineInput = {
  /** Create and connect one FormCheckbox document */
  create?: Maybe<FormCheckboxCreateInput>;
  /** Update single FormCheckbox document */
  update?: Maybe<FormCheckboxUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormCheckbox document */
  upsert?: Maybe<FormCheckboxUpsertWithNestedWhereUniqueInput>;
  /** Connect existing FormCheckbox document */
  connect?: Maybe<FormCheckboxWhereUniqueInput>;
  /** Disconnect currently connected FormCheckbox document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected FormCheckbox document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type SpeakerConnectInput = {
  /** Document to connect */
  where: SpeakerWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type SpeakerUpsertInput = {
  /** Create document if it didn't exist */
  create: SpeakerCreateInput;
  /** Update document if it exists */
  update: SpeakerUpdateInput;
};


/** A connection to a list of items. */
export type EventConnection = {
  __typename?: 'EventConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<EventEdge>;
  aggregate: Aggregate;
};

export type FormConnectInput = {
  /** Document to connect */
  where: FormWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageWhereUniqueInput;
  /** Document to update */
  data: PageUpdateInput;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** The item at the end of the edge. */
  node: Page;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum PageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC'
}

export type PageCreateManyInlineInput = {
  /** Create and connect multiple existing Page documents */
  create?: Maybe<Array<PageCreateInput>>;
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageWhereUniqueInput>>;
};

export type SpeakerUpdateInput = {
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<AssetUpdateOneInlineInput>;
  company?: Maybe<CompanyUpdateOneInlineInput>;
  role?: Maybe<Scalars['String']>;
  talks?: Maybe<TalkUpdateManyInlineInput>;
};

/** An edge in a connection. */
export type CompanyEdge = {
  __typename?: 'CompanyEdge';
  /** The item at the end of the edge. */
  node: Company;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type CompanyCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  url: Scalars['String'];
  participants?: Maybe<SpeakerCreateManyInlineInput>;
};

export type EventUpsertInput = {
  /** Create document if it didn't exist */
  create: EventCreateInput;
  /** Update document if it exists */
  update: EventUpdateInput;
};

export type FormTextareaUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormTextareaWhereUniqueInput;
  /** Document to update */
  data: FormTextareaUpdateInput;
};

export type FormFields = FormInput | FormTextarea | FormCheckbox;

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

/** A connection to a list of items. */
export type SpeakerConnection = {
  __typename?: 'SpeakerConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<SpeakerEdge>;
  aggregate: Aggregate;
};

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export type FormUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>;
};

export enum FormInputOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  PlaceholderAsc = 'placeholder_ASC',
  PlaceholderDesc = 'placeholder_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC'
}

export type FormInputConnectInput = {
  /** Document to connect */
  where: FormInputWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type FormTextareaCreateManyInlineInput = {
  /** Create and connect multiple existing FormTextarea documents */
  create?: Maybe<Array<FormTextareaCreateInput>>;
  /** Connect multiple existing FormTextarea documents */
  connect?: Maybe<Array<FormTextareaWhereUniqueInput>>;
};

export type PageUpdateInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  form?: Maybe<FormUpdateOneInlineInput>;
};

/** Identifies documents */
export type SubmissionWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SubmissionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SubmissionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SubmissionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  form?: Maybe<FormWhereInput>;
};

export type TalkCreateManyInlineInput = {
  /** Create and connect multiple existing Talk documents */
  create?: Maybe<Array<TalkCreateInput>>;
  /** Connect multiple existing Talk documents */
  connect?: Maybe<Array<TalkWhereUniqueInput>>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  speakerPicture_every?: Maybe<SpeakerWhereInput>;
  speakerPicture_some?: Maybe<SpeakerWhereInput>;
  speakerPicture_none?: Maybe<SpeakerWhereInput>;
};

export type CompanyUpdateManyInput = {
  url: Scalars['String'];
};

export type EventCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  meetupId: Scalars['String'];
  isComplete: Scalars['Boolean'];
  date: Scalars['Date'];
  title: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  schedule?: Maybe<TalkCreateManyInlineInput>;
  form?: Maybe<FormCreateOneInlineInput>;
};

export type Company = Node & {
  __typename?: 'Company';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Company>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  url: Scalars['String'];
  participants: Array<Speaker>;
  /** List of Company versions */
  history: Array<Version>;
};


export type CompanyDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type CompanyParticipantsArgs = {
  where?: Maybe<SpeakerWhereInput>;
  orderBy?: Maybe<SpeakerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type CompanyHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type CompanyUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: CompanyWhereInput;
  /** Update many input */
  data: CompanyUpdateManyInput;
};

export type TalkConnectInput = {
  /** Document to connect */
  where: TalkWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type TalkUpdateOneInlineInput = {
  /** Create and connect one Talk document */
  create?: Maybe<TalkCreateInput>;
  /** Update single Talk document */
  update?: Maybe<TalkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Talk document */
  upsert?: Maybe<TalkUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Talk document */
  connect?: Maybe<TalkWhereUniqueInput>;
  /** Disconnect currently connected Talk document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Talk document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type SubmissionConnectInput = {
  /** Document to connect */
  where: SubmissionWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type TalkCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  time: Scalars['DateTime'];
  speaker?: Maybe<SpeakerCreateOneInlineInput>;
  title: Scalars['String'];
  description: Scalars['String'];
  event?: Maybe<EventCreateOneInlineInput>;
};

/** A connection to a list of items. */
export type SubmissionConnection = {
  __typename?: 'SubmissionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<SubmissionEdge>;
  aggregate: Aggregate;
};

export type SubmissionUpdateManyInlineInput = {
  /** Create and connect multiple Submission documents */
  create?: Maybe<Array<SubmissionCreateInput>>;
  /** Connect multiple existing Submission documents */
  connect?: Maybe<Array<SubmissionConnectInput>>;
  /** Override currently-connected documents with multiple existing Submission documents */
  set?: Maybe<Array<SubmissionWhereUniqueInput>>;
  /** Update multiple Submission documents */
  update?: Maybe<Array<SubmissionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Submission documents */
  upsert?: Maybe<Array<SubmissionUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Submission documents */
  disconnect?: Maybe<Array<SubmissionWhereUniqueInput>>;
  /** Delete multiple Submission documents */
  delete?: Maybe<Array<SubmissionWhereUniqueInput>>;
};

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
};

/** A connection to a list of items. */
export type FormCheckboxConnection = {
  __typename?: 'FormCheckboxConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<FormCheckboxEdge>;
  aggregate: Aggregate;
};

export enum FormCheckboxOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC'
}

/** An edge in a connection. */
export type FormTextareaEdge = {
  __typename?: 'FormTextareaEdge';
  /** The item at the end of the edge. */
  node: FormTextarea;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type SubmissionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SubmissionWhereUniqueInput;
  /** Upsert data */
  data: SubmissionUpsertInput;
};

export type EventCreateOneInlineInput = {
  /** Create and connect one Event document */
  create?: Maybe<EventCreateInput>;
  /** Connect one existing Event document */
  connect?: Maybe<EventWhereUniqueInput>;
};

/** Identifies documents */
export type FormCheckboxManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormCheckboxWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormCheckboxWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormCheckboxWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  label_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  label_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  required_not?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type FormInputWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormInputWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormInputWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormInputWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<FormInputType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<FormInputType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<FormInputType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<FormInputType>>;
  label?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  label_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  label_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  placeholder_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  placeholder_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  placeholder_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  placeholder_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  placeholder_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  placeholder_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  placeholder_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  placeholder_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  placeholder_not_ends_with?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  required_not?: Maybe<Scalars['Boolean']>;
};

export type FormTextareaUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
};

export type FormInputCreateManyInlineInput = {
  /** Create and connect multiple existing FormInput documents */
  create?: Maybe<Array<FormInputCreateInput>>;
  /** Connect multiple existing FormInput documents */
  connect?: Maybe<Array<FormInputWhereUniqueInput>>;
};

export type FormInputUpdateManyInlineInput = {
  /** Create and connect multiple FormInput documents */
  create?: Maybe<Array<FormInputCreateInput>>;
  /** Connect multiple existing FormInput documents */
  connect?: Maybe<Array<FormInputConnectInput>>;
  /** Override currently-connected documents with multiple existing FormInput documents */
  set?: Maybe<Array<FormInputWhereUniqueInput>>;
  /** Update multiple FormInput documents */
  update?: Maybe<Array<FormInputUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FormInput documents */
  upsert?: Maybe<Array<FormInputUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple FormInput documents */
  disconnect?: Maybe<Array<FormInputWhereUniqueInput>>;
  /** Delete multiple FormInput documents */
  delete?: Maybe<Array<FormInputWhereUniqueInput>>;
};

/** An edge in a connection. */
export type SubmissionEdge = {
  __typename?: 'SubmissionEdge';
  /** The item at the end of the edge. */
  node: Submission;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type TalkManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TalkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TalkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TalkWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  time?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  time_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  time_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  time_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  time_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  time_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  time_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  time_gte?: Maybe<Scalars['DateTime']>;
  speaker?: Maybe<SpeakerWhereInput>;
  title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>;
  event?: Maybe<EventWhereInput>;
};


/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type FormInputUpdateInput = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<FormInputType>;
  form?: Maybe<FormUpdateOneInlineInput>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
};

export type FormFieldsUpdateInput = {
  FormInput?: Maybe<FormInputUpdateInput>;
  FormTextarea?: Maybe<FormTextareaUpdateInput>;
  FormCheckbox?: Maybe<FormCheckboxUpdateInput>;
};


/** Identifies documents */
export type FormCheckboxWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormCheckboxWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormCheckboxWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormCheckboxWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  label_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values containing the given string. */
  label_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  required_not?: Maybe<Scalars['Boolean']>;
};

export type FormCheckboxUpdateInput = {
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  form?: Maybe<FormUpdateOneInlineInput>;
  required?: Maybe<Scalars['Boolean']>;
};

export type SubmissionUpdateManyInput = {
  formData?: Maybe<Scalars['Json']>;
};

export type CompanyConnectInput = {
  /** Document to connect */
  where: CompanyWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
};

export type SubmissionCreateOneInlineInput = {
  /** Create and connect one Submission document */
  create?: Maybe<SubmissionCreateInput>;
  /** Connect one existing Submission document */
  connect?: Maybe<SubmissionWhereUniqueInput>;
};

export type FormFieldsUpsertWithNestedWhereUniqueInput = {
  FormInput?: Maybe<FormInputUpsertWithNestedWhereUniqueInput>;
  FormTextarea?: Maybe<FormTextareaUpsertWithNestedWhereUniqueInput>;
  FormCheckbox?: Maybe<FormCheckboxUpsertWithNestedWhereUniqueInput>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type SubmissionCreateManyInlineInput = {
  /** Create and connect multiple existing Submission documents */
  create?: Maybe<Array<SubmissionCreateInput>>;
  /** Connect multiple existing Submission documents */
  connect?: Maybe<Array<SubmissionWhereUniqueInput>>;
};

export type TalkUpdateManyInput = {
  time: Scalars['DateTime'];
  title: Scalars['String'];
  description: Scalars['String'];
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
};

export type FormCheckboxUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormCheckboxWhereUniqueInput;
  /** Upsert data */
  data: FormCheckboxUpsertInput;
};

/** A connection to a list of items. */
export type FormTextareaConnection = {
  __typename?: 'FormTextareaConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<FormTextareaEdge>;
  aggregate: Aggregate;
};

/** Identifies documents */
export type SubmissionManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SubmissionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SubmissionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SubmissionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  form?: Maybe<FormWhereInput>;
};

/** An edge in a connection. */
export type EventEdge = {
  __typename?: 'EventEdge';
  /** The item at the end of the edge. */
  node: Event;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type SubmissionUpdateOneInlineInput = {
  /** Create and connect one Submission document */
  create?: Maybe<SubmissionCreateInput>;
  /** Update single Submission document */
  update?: Maybe<SubmissionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Submission document */
  upsert?: Maybe<SubmissionUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Submission document */
  connect?: Maybe<SubmissionWhereUniqueInput>;
  /** Disconnect currently connected Submission document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Submission document */
  delete?: Maybe<Scalars['Boolean']>;
};


export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput;
  /** Update many input */
  data: AssetUpdateManyInput;
};

export type FormInputUpdateManyInput = {
  name?: Maybe<Scalars['String']>;
  type?: Maybe<FormInputType>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple companies */
  companies: Array<Company>;
  /** Retrieve a single company */
  company?: Maybe<Company>;
  /** Retrieve multiple companies using the Relay connection interface */
  companiesConnection: CompanyConnection;
  /** Retrieve document version */
  companyVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple events */
  events: Array<Event>;
  /** Retrieve a single event */
  event?: Maybe<Event>;
  /** Retrieve multiple events using the Relay connection interface */
  eventsConnection: EventConnection;
  /** Retrieve document version */
  eventVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple forms */
  forms: Array<Form>;
  /** Retrieve a single form */
  form?: Maybe<Form>;
  /** Retrieve multiple forms using the Relay connection interface */
  formsConnection: FormConnection;
  /** Retrieve document version */
  formVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple formCheckboxes */
  formCheckboxes: Array<FormCheckbox>;
  /** Retrieve a single formCheckbox */
  formCheckbox?: Maybe<FormCheckbox>;
  /** Retrieve multiple formCheckboxes using the Relay connection interface */
  formCheckboxesConnection: FormCheckboxConnection;
  /** Retrieve document version */
  formCheckboxVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple formInputs */
  formInputs: Array<FormInput>;
  /** Retrieve a single formInput */
  formInput?: Maybe<FormInput>;
  /** Retrieve multiple formInputs using the Relay connection interface */
  formInputsConnection: FormInputConnection;
  /** Retrieve document version */
  formInputVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple formTextareas */
  formTextareas: Array<FormTextarea>;
  /** Retrieve a single formTextarea */
  formTextarea?: Maybe<FormTextarea>;
  /** Retrieve multiple formTextareas using the Relay connection interface */
  formTextareasConnection: FormTextareaConnection;
  /** Retrieve document version */
  formTextareaVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple speakers */
  speakers: Array<Speaker>;
  /** Retrieve a single speaker */
  speaker?: Maybe<Speaker>;
  /** Retrieve multiple speakers using the Relay connection interface */
  speakersConnection: SpeakerConnection;
  /** Retrieve document version */
  speakerVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple submissions */
  submissions: Array<Submission>;
  /** Retrieve a single submission */
  submission?: Maybe<Submission>;
  /** Retrieve multiple submissions using the Relay connection interface */
  submissionsConnection: SubmissionConnection;
  /** Retrieve document version */
  submissionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple talks */
  talks: Array<Talk>;
  /** Retrieve a single talk */
  talk?: Maybe<Talk>;
  /** Retrieve multiple talks using the Relay connection interface */
  talksConnection: TalkConnection;
  /** Retrieve document version */
  talkVersion?: Maybe<DocumentVersion>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCompaniesArgs = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<CompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryCompanyArgs = {
  where: CompanyWhereUniqueInput;
  stage?: Stage;
};


export type QueryCompaniesConnectionArgs = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<CompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryCompanyVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEventsArgs = {
  where?: Maybe<EventWhereInput>;
  orderBy?: Maybe<EventOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
  stage?: Stage;
};


export type QueryEventsConnectionArgs = {
  where?: Maybe<EventWhereInput>;
  orderBy?: Maybe<EventOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryEventVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFormsArgs = {
  where?: Maybe<FormWhereInput>;
  orderBy?: Maybe<FormOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryFormArgs = {
  where: FormWhereUniqueInput;
  stage?: Stage;
};


export type QueryFormsConnectionArgs = {
  where?: Maybe<FormWhereInput>;
  orderBy?: Maybe<FormOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryFormVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFormCheckboxesArgs = {
  where?: Maybe<FormCheckboxWhereInput>;
  orderBy?: Maybe<FormCheckboxOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryFormCheckboxArgs = {
  where: FormCheckboxWhereUniqueInput;
  stage?: Stage;
};


export type QueryFormCheckboxesConnectionArgs = {
  where?: Maybe<FormCheckboxWhereInput>;
  orderBy?: Maybe<FormCheckboxOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryFormCheckboxVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFormInputsArgs = {
  where?: Maybe<FormInputWhereInput>;
  orderBy?: Maybe<FormInputOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryFormInputArgs = {
  where: FormInputWhereUniqueInput;
  stage?: Stage;
};


export type QueryFormInputsConnectionArgs = {
  where?: Maybe<FormInputWhereInput>;
  orderBy?: Maybe<FormInputOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryFormInputVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFormTextareasArgs = {
  where?: Maybe<FormTextareaWhereInput>;
  orderBy?: Maybe<FormTextareaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryFormTextareaArgs = {
  where: FormTextareaWhereUniqueInput;
  stage?: Stage;
};


export type QueryFormTextareasConnectionArgs = {
  where?: Maybe<FormTextareaWhereInput>;
  orderBy?: Maybe<FormTextareaOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryFormTextareaVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  where?: Maybe<PageWhereInput>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryPageArgs = {
  where: PageWhereUniqueInput;
  stage?: Stage;
};


export type QueryPagesConnectionArgs = {
  where?: Maybe<PageWhereInput>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySpeakersArgs = {
  where?: Maybe<SpeakerWhereInput>;
  orderBy?: Maybe<SpeakerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QuerySpeakerArgs = {
  where: SpeakerWhereUniqueInput;
  stage?: Stage;
};


export type QuerySpeakersConnectionArgs = {
  where?: Maybe<SpeakerWhereInput>;
  orderBy?: Maybe<SpeakerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QuerySpeakerVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySubmissionsArgs = {
  where?: Maybe<SubmissionWhereInput>;
  orderBy?: Maybe<SubmissionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QuerySubmissionArgs = {
  where: SubmissionWhereUniqueInput;
  stage?: Stage;
};


export type QuerySubmissionsConnectionArgs = {
  where?: Maybe<SubmissionWhereInput>;
  orderBy?: Maybe<SubmissionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QuerySubmissionVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTalksArgs = {
  where?: Maybe<TalkWhereInput>;
  orderBy?: Maybe<TalkOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryTalkArgs = {
  where: TalkWhereUniqueInput;
  stage?: Stage;
};


export type QueryTalksConnectionArgs = {
  where?: Maybe<TalkWhereInput>;
  orderBy?: Maybe<TalkOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryTalkVersionArgs = {
  where: VersionWhereInput;
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** System stage field */
  stage: Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  speakerPicture: Array<Speaker>;
  /** List of Asset versions */
  history: Array<Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetSpeakerPictureArgs = {
  where?: Maybe<SpeakerWhereInput>;
  orderBy?: Maybe<SpeakerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type PageUpdateManyInlineInput = {
  /** Create and connect multiple Page documents */
  create?: Maybe<Array<PageCreateInput>>;
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageConnectInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: Maybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: Maybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: Maybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: Maybe<Array<PageWhereUniqueInput>>;
  /** Delete multiple Page documents */
  delete?: Maybe<Array<PageWhereUniqueInput>>;
};

/** A connection to a list of items. */
export type TalkConnection = {
  __typename?: 'TalkConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<TalkEdge>;
  aggregate: Aggregate;
};

export type FormInput = Node & {
  __typename?: 'FormInput';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<FormInput>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<FormInputType>;
  form?: Maybe<Form>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  /** List of FormInput versions */
  history: Array<Version>;
};


export type FormInputDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type FormInputHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type FormTextareaUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: FormTextareaWhereInput;
  /** Update many input */
  data: FormTextareaUpdateManyInput;
};

/** References Company record uniquely */
export type CompanyWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type CompanyUpdateOneInlineInput = {
  /** Create and connect one Company document */
  create?: Maybe<CompanyCreateInput>;
  /** Update single Company document */
  update?: Maybe<CompanyUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Company document */
  upsert?: Maybe<CompanyUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Company document */
  connect?: Maybe<CompanyWhereUniqueInput>;
  /** Disconnect currently connected Company document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Company document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type Event = Node & {
  __typename?: 'Event';
  /** System stage field */
  stage: Stage;
  /** Get the document in other stages */
  documentInStages: Array<Event>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  meetupId: Scalars['String'];
  isComplete: Scalars['Boolean'];
  date: Scalars['Date'];
  title: Scalars['String'];
  slug: Scalars['String'];
  description: Scalars['String'];
  schedule: Array<Talk>;
  form?: Maybe<Form>;
  /** List of Event versions */
  history: Array<Version>;
};


export type EventDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type EventScheduleArgs = {
  where?: Maybe<TalkWhereInput>;
  orderBy?: Maybe<TalkOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EventHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

/** References Event record uniquely */
export type EventWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  meetupId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type FormTextareaCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  form?: Maybe<FormCreateOneInlineInput>;
  placeholder?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
};

export type TalkUpdateInput = {
  time?: Maybe<Scalars['DateTime']>;
  speaker?: Maybe<SpeakerUpdateOneInlineInput>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  event?: Maybe<EventUpdateOneInlineInput>;
};

export type FormFieldsWhereInput = {
  FormInput?: Maybe<FormInputWhereInput>;
  FormTextarea?: Maybe<FormTextareaWhereInput>;
  FormCheckbox?: Maybe<FormCheckboxWhereInput>;
};

export type FormTextareaUpdateManyInlineInput = {
  /** Create and connect multiple FormTextarea documents */
  create?: Maybe<Array<FormTextareaCreateInput>>;
  /** Connect multiple existing FormTextarea documents */
  connect?: Maybe<Array<FormTextareaConnectInput>>;
  /** Override currently-connected documents with multiple existing FormTextarea documents */
  set?: Maybe<Array<FormTextareaWhereUniqueInput>>;
  /** Update multiple FormTextarea documents */
  update?: Maybe<Array<FormTextareaUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FormTextarea documents */
  upsert?: Maybe<Array<FormTextareaUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple FormTextarea documents */
  disconnect?: Maybe<Array<FormTextareaWhereUniqueInput>>;
  /** Delete multiple FormTextarea documents */
  delete?: Maybe<Array<FormTextareaWhereUniqueInput>>;
};

export type SpeakerUpdateOneInlineInput = {
  /** Create and connect one Speaker document */
  create?: Maybe<SpeakerCreateInput>;
  /** Update single Speaker document */
  update?: Maybe<SpeakerUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Speaker document */
  upsert?: Maybe<SpeakerUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Speaker document */
  connect?: Maybe<SpeakerWhereUniqueInput>;
  /** Disconnect currently connected Speaker document */
  disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Speaker document */
  delete?: Maybe<Scalars['Boolean']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** The item at the end of the edge. */
  node: Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type FormCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  page?: Maybe<PageCreateOneInlineInput>;
  fields?: Maybe<FormFieldsCreateManyInlineInput>;
  event?: Maybe<EventCreateOneInlineInput>;
  submissions?: Maybe<SubmissionCreateManyInlineInput>;
};

export type FormUpdateInput = {
  page?: Maybe<PageUpdateOneInlineInput>;
  fields?: Maybe<FormFieldsUpdateManyInlineInput>;
  event?: Maybe<EventUpdateOneInlineInput>;
  submissions?: Maybe<SubmissionUpdateManyInlineInput>;
};

export type PageCreateOneInlineInput = {
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
  /** Connect one existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
};

export type FormFieldsCreateOneInlineInput = {
  /** Create and connect one FormFields document */
  create?: Maybe<FormFieldsCreateInput>;
  /** Connect one existing FormFields document */
  connect?: Maybe<FormFieldsWhereUniqueInput>;
};

/** Stage system enumeration */
export enum Stage {
  /** System Published Stage */
  Published = 'PUBLISHED',
  /** System Draft Stage */
  Draft = 'DRAFT'
}

export enum FormInputType {
  Email = 'EMAIL',
  Tel = 'TEL',
  Text = 'TEXT'
}

export enum CompanyOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type GetEventForEventPageQueryVariables = Exact<{
  stage: Stage;
  slug: Scalars['String'];
}>;


export type GetEventForEventPageQuery = (
  { __typename?: 'Query' }
  & { event?: Maybe<(
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'isComplete' | 'slug' | 'date' | 'title' | 'meetupId' | 'description'>
    & { schedule: Array<(
      { __typename?: 'Talk' }
      & Pick<Talk, 'id' | 'time' | 'title' | 'description'>
      & { speaker?: Maybe<(
        { __typename?: 'Speaker' }
        & Pick<Speaker, 'id' | 'name' | 'role'>
        & { picture: (
          { __typename?: 'Asset' }
          & Pick<Asset, 'url'>
        ), company?: Maybe<(
          { __typename?: 'Company' }
          & Pick<Company, 'name' | 'url'>
        )> }
      )> }
    )>, form?: Maybe<(
      { __typename?: 'Form' }
      & Pick<Form, 'id'>
      & { fields: Array<(
        { __typename: 'FormInput' }
        & Pick<FormInput, 'name' | 'type' | 'placeholder' | 'required'>
        & { inputLabel: FormInput['label'] }
      ) | (
        { __typename: 'FormTextarea' }
        & Pick<FormTextarea, 'name' | 'placeholder' | 'required'>
        & { textareaLabel: FormTextarea['label'] }
      ) | (
        { __typename: 'FormCheckbox' }
        & Pick<FormCheckbox, 'name' | 'required'>
        & { checkboxLabel: FormCheckbox['label'] }
      )> }
    )> }
  )> }
);

export type GetEventForOgImageQueryVariables = Exact<{
  stage: Stage;
  id: Scalars['ID'];
}>;


export type GetEventForOgImageQuery = (
  { __typename?: 'Query' }
  & { event?: Maybe<(
    { __typename?: 'Event' }
    & Pick<Event, 'date' | 'title'>
  )> }
);

export type GetTalkForOgImageQueryVariables = Exact<{
  stage: Stage;
  id: Scalars['ID'];
}>;


export type GetTalkForOgImageQuery = (
  { __typename?: 'Query' }
  & { talk?: Maybe<(
    { __typename?: 'Talk' }
    & Pick<Talk, 'title'>
    & { speaker?: Maybe<(
      { __typename?: 'Speaker' }
      & Pick<Speaker, 'name'>
      & { picture: (
        { __typename?: 'Asset' }
        & Pick<Asset, 'url'>
      ) }
    )> }
  )> }
);


export const GetEventForEventPageDocument = gql`
    query getEventForEventPage($stage: Stage!, $slug: String!) {
  event(stage: $stage, where: {slug: $slug}) {
    id
    isComplete
    slug
    date
    title
    meetupId
    description
    schedule {
      id
      time
      title
      description
      speaker {
        id
        picture {
          url
        }
        name
        role
        company {
          name
          url
        }
      }
    }
    form {
      id
      fields {
        __typename
        ... on FormInput {
          name
          type
          inputLabel: label
          placeholder
          required
        }
        ... on FormTextarea {
          name
          textareaLabel: label
          placeholder
          required
        }
        ... on FormCheckbox {
          name
          checkboxLabel: label
          required
        }
      }
    }
  }
}
    `;
export const GetEventForOgImageDocument = gql`
    query getEventForOgImage($stage: Stage!, $id: ID!) {
  event(stage: $stage, where: {id: $id}) {
    date
    title
  }
}
    `;
export const GetTalkForOgImageDocument = gql`
    query getTalkForOgImage($stage: Stage!, $id: ID!) {
  talk(stage: $stage, where: {id: $id}) {
    title
    speaker {
      name
      picture {
        url
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getEventForEventPage(variables: GetEventForEventPageQueryVariables): Promise<GetEventForEventPageQuery> {
      return withWrapper(() => client.request<GetEventForEventPageQuery>(print(GetEventForEventPageDocument), variables));
    },
    getEventForOgImage(variables: GetEventForOgImageQueryVariables): Promise<GetEventForOgImageQuery> {
      return withWrapper(() => client.request<GetEventForOgImageQuery>(print(GetEventForOgImageDocument), variables));
    },
    getTalkForOgImage(variables: GetTalkForOgImageQueryVariables): Promise<GetTalkForOgImageQuery> {
      return withWrapper(() => client.request<GetTalkForOgImageQuery>(print(GetTalkForOgImageDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;