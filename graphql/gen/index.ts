import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    ObjectId: any;
};

export type Connected_Service = {
    __typename?: 'Connected_service';
    _id?: Maybe<Scalars['ObjectId']>;
    bakalari?: Maybe<Scalars['Boolean']>;
    edmodo?: Maybe<Scalars['Boolean']>;
    facebook?: Maybe<Scalars['Boolean']>;
    googleClassroom?: Maybe<Scalars['Boolean']>;
    user_id?: Maybe<Scalars['String']>;
};

export type Connected_ServiceInsertInput = {
    user_id?: Maybe<Scalars['String']>;
    bakalari?: Maybe<Scalars['Boolean']>;
    facebook?: Maybe<Scalars['Boolean']>;
    edmodo?: Maybe<Scalars['Boolean']>;
    googleClassroom?: Maybe<Scalars['Boolean']>;
    _id?: Maybe<Scalars['ObjectId']>;
};

export type Connected_ServiceQueryInput = {
    user_id_lte?: Maybe<Scalars['String']>;
    _id_lte?: Maybe<Scalars['ObjectId']>;
    user_id?: Maybe<Scalars['String']>;
    _id_exists?: Maybe<Scalars['Boolean']>;
    facebook_exists?: Maybe<Scalars['Boolean']>;
    user_id_exists?: Maybe<Scalars['Boolean']>;
    _id_lt?: Maybe<Scalars['ObjectId']>;
    edmodo_exists?: Maybe<Scalars['Boolean']>;
    bakalari_exists?: Maybe<Scalars['Boolean']>;
    _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
    googleClassroom?: Maybe<Scalars['Boolean']>;
    _id?: Maybe<Scalars['ObjectId']>;
    AND?: Maybe<Array<Connected_ServiceQueryInput>>;
    facebook_ne?: Maybe<Scalars['Boolean']>;
    googleClassroom_ne?: Maybe<Scalars['Boolean']>;
    _id_gte?: Maybe<Scalars['ObjectId']>;
    googleClassroom_exists?: Maybe<Scalars['Boolean']>;
    bakalari?: Maybe<Scalars['Boolean']>;
    facebook?: Maybe<Scalars['Boolean']>;
    user_id_lt?: Maybe<Scalars['String']>;
    edmodo_ne?: Maybe<Scalars['Boolean']>;
    bakalari_ne?: Maybe<Scalars['Boolean']>;
    edmodo?: Maybe<Scalars['Boolean']>;
    user_id_gte?: Maybe<Scalars['String']>;
    OR?: Maybe<Array<Connected_ServiceQueryInput>>;
    _id_gt?: Maybe<Scalars['ObjectId']>;
    _id_ne?: Maybe<Scalars['ObjectId']>;
    user_id_gt?: Maybe<Scalars['String']>;
    user_id_ne?: Maybe<Scalars['String']>;
    user_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
    _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
    user_id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum Connected_ServiceSortByInput {
    IdAsc = '_ID_ASC',
    IdDesc = '_ID_DESC',
    UserIdAsc = 'USER_ID_ASC',
    UserIdDesc = 'USER_ID_DESC',
}

export type Connected_ServiceUpdateInput = {
    user_id?: Maybe<Scalars['String']>;
    bakalari?: Maybe<Scalars['Boolean']>;
    edmodo?: Maybe<Scalars['Boolean']>;
    googleClassroom_unset?: Maybe<Scalars['Boolean']>;
    bakalari_unset?: Maybe<Scalars['Boolean']>;
    googleClassroom?: Maybe<Scalars['Boolean']>;
    _id_unset?: Maybe<Scalars['Boolean']>;
    user_id_unset?: Maybe<Scalars['Boolean']>;
    facebook?: Maybe<Scalars['Boolean']>;
    facebook_unset?: Maybe<Scalars['Boolean']>;
    edmodo_unset?: Maybe<Scalars['Boolean']>;
    _id?: Maybe<Scalars['ObjectId']>;
};

export type DeleteManyPayload = {
    __typename?: 'DeleteManyPayload';
    deletedCount: Scalars['Int'];
};

export type InsertManyPayload = {
    __typename?: 'InsertManyPayload';
    insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Mutation = {
    __typename?: 'Mutation';
    deleteManyConnected_services?: Maybe<DeleteManyPayload>;
    deleteManySettings?: Maybe<DeleteManyPayload>;
    deleteManyTasks?: Maybe<DeleteManyPayload>;
    deleteManyUsers?: Maybe<DeleteManyPayload>;
    deleteOneConnected_service?: Maybe<Connected_Service>;
    deleteOneSetting?: Maybe<Setting>;
    deleteOneTask?: Maybe<Task>;
    deleteOneUser?: Maybe<User>;
    insertManyConnected_services?: Maybe<InsertManyPayload>;
    insertManySettings?: Maybe<InsertManyPayload>;
    insertManyTasks?: Maybe<InsertManyPayload>;
    insertManyUsers?: Maybe<InsertManyPayload>;
    insertOneConnected_service?: Maybe<Connected_Service>;
    insertOneSetting?: Maybe<Setting>;
    insertOneTask?: Maybe<Task>;
    insertOneUser?: Maybe<User>;
    replaceOneConnected_service?: Maybe<Connected_Service>;
    replaceOneSetting?: Maybe<Setting>;
    replaceOneTask?: Maybe<Task>;
    replaceOneUser?: Maybe<User>;
    updateManyConnected_services?: Maybe<UpdateManyPayload>;
    updateManySettings?: Maybe<UpdateManyPayload>;
    updateManyTasks?: Maybe<UpdateManyPayload>;
    updateManyUsers?: Maybe<UpdateManyPayload>;
    updateOneConnected_service?: Maybe<Connected_Service>;
    updateOneSetting?: Maybe<Setting>;
    updateOneTask?: Maybe<Task>;
    updateOneUser?: Maybe<User>;
    upsertOneConnected_service?: Maybe<Connected_Service>;
    upsertOneSetting?: Maybe<Setting>;
    upsertOneTask?: Maybe<Task>;
    upsertOneUser?: Maybe<User>;
};

export type MutationDeleteManyConnected_ServicesArgs = {
    query?: Maybe<Connected_ServiceQueryInput>;
};

export type MutationDeleteManySettingsArgs = {
    query?: Maybe<SettingQueryInput>;
};

export type MutationDeleteManyTasksArgs = {
    query?: Maybe<TaskQueryInput>;
};

export type MutationDeleteManyUsersArgs = {
    query?: Maybe<UserQueryInput>;
};

export type MutationDeleteOneConnected_ServiceArgs = {
    query: Connected_ServiceQueryInput;
};

export type MutationDeleteOneSettingArgs = {
    query: SettingQueryInput;
};

export type MutationDeleteOneTaskArgs = {
    query: TaskQueryInput;
};

export type MutationDeleteOneUserArgs = {
    query: UserQueryInput;
};

export type MutationInsertManyConnected_ServicesArgs = {
    data: Array<Connected_ServiceInsertInput>;
};

export type MutationInsertManySettingsArgs = {
    data: Array<SettingInsertInput>;
};

export type MutationInsertManyTasksArgs = {
    data: Array<TaskInsertInput>;
};

export type MutationInsertManyUsersArgs = {
    data: Array<UserInsertInput>;
};

export type MutationInsertOneConnected_ServiceArgs = {
    data: Connected_ServiceInsertInput;
};

export type MutationInsertOneSettingArgs = {
    data: SettingInsertInput;
};

export type MutationInsertOneTaskArgs = {
    data: TaskInsertInput;
};

export type MutationInsertOneUserArgs = {
    data: UserInsertInput;
};

export type MutationReplaceOneConnected_ServiceArgs = {
    data: Connected_ServiceInsertInput;
    query?: Maybe<Connected_ServiceQueryInput>;
};

export type MutationReplaceOneSettingArgs = {
    data: SettingInsertInput;
    query?: Maybe<SettingQueryInput>;
};

export type MutationReplaceOneTaskArgs = {
    query?: Maybe<TaskQueryInput>;
    data: TaskInsertInput;
};

export type MutationReplaceOneUserArgs = {
    query?: Maybe<UserQueryInput>;
    data: UserInsertInput;
};

export type MutationUpdateManyConnected_ServicesArgs = {
    query?: Maybe<Connected_ServiceQueryInput>;
    set: Connected_ServiceUpdateInput;
};

export type MutationUpdateManySettingsArgs = {
    set: SettingUpdateInput;
    query?: Maybe<SettingQueryInput>;
};

export type MutationUpdateManyTasksArgs = {
    query?: Maybe<TaskQueryInput>;
    set: TaskUpdateInput;
};

export type MutationUpdateManyUsersArgs = {
    query?: Maybe<UserQueryInput>;
    set: UserUpdateInput;
};

export type MutationUpdateOneConnected_ServiceArgs = {
    query?: Maybe<Connected_ServiceQueryInput>;
    set: Connected_ServiceUpdateInput;
};

export type MutationUpdateOneSettingArgs = {
    query?: Maybe<SettingQueryInput>;
    set: SettingUpdateInput;
};

export type MutationUpdateOneTaskArgs = {
    query?: Maybe<TaskQueryInput>;
    set: TaskUpdateInput;
};

export type MutationUpdateOneUserArgs = {
    query?: Maybe<UserQueryInput>;
    set: UserUpdateInput;
};

export type MutationUpsertOneConnected_ServiceArgs = {
    query?: Maybe<Connected_ServiceQueryInput>;
    data: Connected_ServiceInsertInput;
};

export type MutationUpsertOneSettingArgs = {
    data: SettingInsertInput;
    query?: Maybe<SettingQueryInput>;
};

export type MutationUpsertOneTaskArgs = {
    query?: Maybe<TaskQueryInput>;
    data: TaskInsertInput;
};

export type MutationUpsertOneUserArgs = {
    query?: Maybe<UserQueryInput>;
    data: UserInsertInput;
};

export type Query = {
    __typename?: 'Query';
    connected_service?: Maybe<Connected_Service>;
    connected_services: Array<Maybe<Connected_Service>>;
    setting?: Maybe<Setting>;
    settings: Array<Maybe<Setting>>;
    task?: Maybe<Task>;
    tasks: Array<Maybe<Task>>;
    user?: Maybe<User>;
    users: Array<Maybe<User>>;
};

export type QueryConnected_ServiceArgs = {
    query?: Maybe<Connected_ServiceQueryInput>;
};

export type QueryConnected_ServicesArgs = {
    sortBy?: Maybe<Connected_ServiceSortByInput>;
    query?: Maybe<Connected_ServiceQueryInput>;
    limit?: Maybe<Scalars['Int']>;
};

export type QuerySettingArgs = {
    query?: Maybe<SettingQueryInput>;
};

export type QuerySettingsArgs = {
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<SettingSortByInput>;
    query?: Maybe<SettingQueryInput>;
};

export type QueryTaskArgs = {
    query?: Maybe<TaskQueryInput>;
};

export type QueryTasksArgs = {
    query?: Maybe<TaskQueryInput>;
    limit?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<TaskSortByInput>;
};

export type QueryUserArgs = {
    query?: Maybe<UserQueryInput>;
};

export type QueryUsersArgs = {
    sortBy?: Maybe<UserSortByInput>;
    query?: Maybe<UserQueryInput>;
    limit?: Maybe<Scalars['Int']>;
};

export type Setting = {
    __typename?: 'Setting';
    _id?: Maybe<Scalars['ObjectId']>;
    store_credentials_locally?: Maybe<Scalars['Boolean']>;
    user_id?: Maybe<Scalars['String']>;
};

export type SettingInsertInput = {
    store_credentials_locally?: Maybe<Scalars['Boolean']>;
    _id?: Maybe<Scalars['ObjectId']>;
    user_id?: Maybe<Scalars['String']>;
};

export type SettingQueryInput = {
    _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
    _id_gte?: Maybe<Scalars['ObjectId']>;
    _id_lt?: Maybe<Scalars['ObjectId']>;
    user_id_lte?: Maybe<Scalars['String']>;
    user_id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    _id_ne?: Maybe<Scalars['ObjectId']>;
    user_id_gte?: Maybe<Scalars['String']>;
    AND?: Maybe<Array<SettingQueryInput>>;
    user_id_ne?: Maybe<Scalars['String']>;
    store_credentials_locally_exists?: Maybe<Scalars['Boolean']>;
    store_credentials_locally?: Maybe<Scalars['Boolean']>;
    _id_exists?: Maybe<Scalars['Boolean']>;
    user_id_gt?: Maybe<Scalars['String']>;
    _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
    store_credentials_locally_ne?: Maybe<Scalars['Boolean']>;
    _id_lte?: Maybe<Scalars['ObjectId']>;
    _id_gt?: Maybe<Scalars['ObjectId']>;
    user_id_exists?: Maybe<Scalars['Boolean']>;
    OR?: Maybe<Array<SettingQueryInput>>;
    user_id_lt?: Maybe<Scalars['String']>;
    user_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
    _id?: Maybe<Scalars['ObjectId']>;
    user_id?: Maybe<Scalars['String']>;
};

export enum SettingSortByInput {
    UserIdAsc = 'USER_ID_ASC',
    UserIdDesc = 'USER_ID_DESC',
    IdAsc = '_ID_ASC',
    IdDesc = '_ID_DESC',
}

export type SettingUpdateInput = {
    store_credentials_locally_unset?: Maybe<Scalars['Boolean']>;
    _id?: Maybe<Scalars['ObjectId']>;
    _id_unset?: Maybe<Scalars['Boolean']>;
    user_id?: Maybe<Scalars['String']>;
    user_id_unset?: Maybe<Scalars['Boolean']>;
    store_credentials_locally?: Maybe<Scalars['Boolean']>;
};

export type Task = {
    __typename?: 'Task';
    _id?: Maybe<Scalars['ObjectId']>;
    body?: Maybe<Scalars['String']>;
    date?: Maybe<Scalars['Float']>;
    props?: Maybe<Scalars['String']>;
    resolved?: Maybe<Scalars['Boolean']>;
    sender?: Maybe<Scalars['String']>;
    service?: Maybe<Scalars['String']>;
    starred?: Maybe<Scalars['Boolean']>;
    user_id?: Maybe<Scalars['String']>;
};

export type TaskInsertInput = {
    body?: Maybe<Scalars['String']>;
    starred?: Maybe<Scalars['Boolean']>;
    user_id?: Maybe<Scalars['String']>;
    date?: Maybe<Scalars['Float']>;
    resolved?: Maybe<Scalars['Boolean']>;
    _id?: Maybe<Scalars['ObjectId']>;
    sender?: Maybe<Scalars['String']>;
    props?: Maybe<Scalars['String']>;
    service?: Maybe<Scalars['String']>;
};

export type TaskQueryInput = {
    props_lte?: Maybe<Scalars['String']>;
    props_in?: Maybe<Array<Maybe<Scalars['String']>>>;
    body_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    service?: Maybe<Scalars['String']>;
    sender_lte?: Maybe<Scalars['String']>;
    resolved_exists?: Maybe<Scalars['Boolean']>;
    service_in?: Maybe<Array<Maybe<Scalars['String']>>>;
    _id_ne?: Maybe<Scalars['ObjectId']>;
    props?: Maybe<Scalars['String']>;
    body_exists?: Maybe<Scalars['Boolean']>;
    sender_gte?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['ObjectId']>;
    service_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    date_gt?: Maybe<Scalars['Float']>;
    props_gt?: Maybe<Scalars['String']>;
    sender_gt?: Maybe<Scalars['String']>;
    date_nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
    body_in?: Maybe<Array<Maybe<Scalars['String']>>>;
    service_ne?: Maybe<Scalars['String']>;
    date_lte?: Maybe<Scalars['Float']>;
    sender?: Maybe<Scalars['String']>;
    _id_exists?: Maybe<Scalars['Boolean']>;
    props_ne?: Maybe<Scalars['String']>;
    user_id_gt?: Maybe<Scalars['String']>;
    OR?: Maybe<Array<TaskQueryInput>>;
    starred?: Maybe<Scalars['Boolean']>;
    props_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    service_gt?: Maybe<Scalars['String']>;
    sender_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    user_id_ne?: Maybe<Scalars['String']>;
    date_exists?: Maybe<Scalars['Boolean']>;
    service_gte?: Maybe<Scalars['String']>;
    AND?: Maybe<Array<TaskQueryInput>>;
    date?: Maybe<Scalars['Float']>;
    user_id_lte?: Maybe<Scalars['String']>;
    service_lte?: Maybe<Scalars['String']>;
    props_gte?: Maybe<Scalars['String']>;
    date_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
    user_id_lt?: Maybe<Scalars['String']>;
    sender_ne?: Maybe<Scalars['String']>;
    starred_ne?: Maybe<Scalars['Boolean']>;
    service_exists?: Maybe<Scalars['Boolean']>;
    starred_exists?: Maybe<Scalars['Boolean']>;
    body_gte?: Maybe<Scalars['String']>;
    user_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
    _id_lt?: Maybe<Scalars['ObjectId']>;
    body_lt?: Maybe<Scalars['String']>;
    user_id?: Maybe<Scalars['String']>;
    user_id_gte?: Maybe<Scalars['String']>;
    sender_exists?: Maybe<Scalars['Boolean']>;
    _id_gt?: Maybe<Scalars['ObjectId']>;
    _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
    sender_in?: Maybe<Array<Maybe<Scalars['String']>>>;
    body_lte?: Maybe<Scalars['String']>;
    _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
    props_exists?: Maybe<Scalars['Boolean']>;
    resolved_ne?: Maybe<Scalars['Boolean']>;
    date_ne?: Maybe<Scalars['Float']>;
    body?: Maybe<Scalars['String']>;
    _id_lte?: Maybe<Scalars['ObjectId']>;
    props_lt?: Maybe<Scalars['String']>;
    body_ne?: Maybe<Scalars['String']>;
    user_id_exists?: Maybe<Scalars['Boolean']>;
    date_lt?: Maybe<Scalars['Float']>;
    resolved?: Maybe<Scalars['Boolean']>;
    date_gte?: Maybe<Scalars['Float']>;
    service_lt?: Maybe<Scalars['String']>;
    sender_lt?: Maybe<Scalars['String']>;
    _id_gte?: Maybe<Scalars['ObjectId']>;
    body_gt?: Maybe<Scalars['String']>;
    user_id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum TaskSortByInput {
    UserIdDesc = 'USER_ID_DESC',
    SenderDesc = 'SENDER_DESC',
    DateDesc = 'DATE_DESC',
    IdAsc = '_ID_ASC',
    UserIdAsc = 'USER_ID_ASC',
    ServiceDesc = 'SERVICE_DESC',
    BodyDesc = 'BODY_DESC',
    IdDesc = '_ID_DESC',
    PropsDesc = 'PROPS_DESC',
    BodyAsc = 'BODY_ASC',
    SenderAsc = 'SENDER_ASC',
    PropsAsc = 'PROPS_ASC',
    ServiceAsc = 'SERVICE_ASC',
    DateAsc = 'DATE_ASC',
}

export type TaskUpdateInput = {
    props_unset?: Maybe<Scalars['Boolean']>;
    body_unset?: Maybe<Scalars['Boolean']>;
    resolved?: Maybe<Scalars['Boolean']>;
    service_unset?: Maybe<Scalars['Boolean']>;
    date?: Maybe<Scalars['Float']>;
    starred?: Maybe<Scalars['Boolean']>;
    props?: Maybe<Scalars['String']>;
    body?: Maybe<Scalars['String']>;
    service?: Maybe<Scalars['String']>;
    sender_unset?: Maybe<Scalars['Boolean']>;
    _id_unset?: Maybe<Scalars['Boolean']>;
    _id?: Maybe<Scalars['ObjectId']>;
    user_id?: Maybe<Scalars['String']>;
    starred_unset?: Maybe<Scalars['Boolean']>;
    user_id_unset?: Maybe<Scalars['Boolean']>;
    date_unset?: Maybe<Scalars['Boolean']>;
    resolved_unset?: Maybe<Scalars['Boolean']>;
    date_inc?: Maybe<Scalars['Float']>;
    sender?: Maybe<Scalars['String']>;
};

export type UpdateManyPayload = {
    __typename?: 'UpdateManyPayload';
    matchedCount: Scalars['Int'];
    modifiedCount: Scalars['Int'];
};

export type User = {
    __typename?: 'User';
    _id?: Maybe<Scalars['ObjectId']>;
    email?: Maybe<Scalars['String']>;
    user_id?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
};

export type UserInsertInput = {
    _id?: Maybe<Scalars['ObjectId']>;
    user_id?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
};

export type UserQueryInput = {
    _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
    username_ne?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
    email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    email_gte?: Maybe<Scalars['String']>;
    user_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
    email_gt?: Maybe<Scalars['String']>;
    AND?: Maybe<Array<UserQueryInput>>;
    email_lt?: Maybe<Scalars['String']>;
    _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
    username_gt?: Maybe<Scalars['String']>;
    username_lt?: Maybe<Scalars['String']>;
    email_lte?: Maybe<Scalars['String']>;
    email_ne?: Maybe<Scalars['String']>;
    _id_gt?: Maybe<Scalars['ObjectId']>;
    user_id_lte?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    user_id_gte?: Maybe<Scalars['String']>;
    username_gte?: Maybe<Scalars['String']>;
    user_id_gt?: Maybe<Scalars['String']>;
    email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
    _id_gte?: Maybe<Scalars['ObjectId']>;
    _id_ne?: Maybe<Scalars['ObjectId']>;
    user_id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    user_id_exists?: Maybe<Scalars['Boolean']>;
    username_in?: Maybe<Array<Maybe<Scalars['String']>>>;
    user_id_ne?: Maybe<Scalars['String']>;
    _id_lte?: Maybe<Scalars['ObjectId']>;
    email_exists?: Maybe<Scalars['Boolean']>;
    user_id_lt?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['ObjectId']>;
    username_lte?: Maybe<Scalars['String']>;
    _id_exists?: Maybe<Scalars['Boolean']>;
    user_id?: Maybe<Scalars['String']>;
    username_exists?: Maybe<Scalars['Boolean']>;
    username_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    OR?: Maybe<Array<UserQueryInput>>;
    _id_lt?: Maybe<Scalars['ObjectId']>;
};

export enum UserSortByInput {
    UsernameAsc = 'USERNAME_ASC',
    UsernameDesc = 'USERNAME_DESC',
    EmailAsc = 'EMAIL_ASC',
    EmailDesc = 'EMAIL_DESC',
    IdAsc = '_ID_ASC',
    IdDesc = '_ID_DESC',
    UserIdAsc = 'USER_ID_ASC',
    UserIdDesc = 'USER_ID_DESC',
}

export type UserUpdateInput = {
    email_unset?: Maybe<Scalars['Boolean']>;
    _id?: Maybe<Scalars['ObjectId']>;
    _id_unset?: Maybe<Scalars['Boolean']>;
    user_id?: Maybe<Scalars['String']>;
    user_id_unset?: Maybe<Scalars['Boolean']>;
    username?: Maybe<Scalars['String']>;
    username_unset?: Maybe<Scalars['Boolean']>;
    email?: Maybe<Scalars['String']>;
};

export type ConnectedServiceFragment = {
    __typename?: 'Connected_service';
} & Pick<
    Connected_Service,
    '_id' | 'bakalari' | 'edmodo' | 'facebook' | 'googleClassroom'
>;

export type TaskFragment = { __typename?: 'Task' } & Pick<
    Task,
    '_id' | 'body' | 'sender' | 'date' | 'service' | 'resolved' | 'starred'
>;

export type ConnectBakalariMutationVariables = {
    user_id: Scalars['String'];
    value: Scalars['Boolean'];
};

export type ConnectBakalariMutation = { __typename?: 'Mutation' } & {
    updateOneConnected_service?: Maybe<
        { __typename?: 'Connected_service' } & ConnectedServiceFragment
    >;
};

export type CreateDefaultConnectedServiceMutationVariables = {
    user_id: Scalars['String'];
};

export type CreateDefaultConnectedServiceMutation = {
    __typename?: 'Mutation';
} & {
    insertOneConnected_service?: Maybe<
        { __typename?: 'Connected_service' } & ConnectedServiceFragment
    >;
};

export type CreateManyTasksMutationVariables = {
    tasks: Array<TaskInsertInput>;
};

export type CreateManyTasksMutation = { __typename?: 'Mutation' } & {
    insertManyTasks?: Maybe<
        { __typename?: 'InsertManyPayload' } & Pick<
            InsertManyPayload,
            'insertedIds'
        >
    >;
};

export type CreateTaskMutationVariables = {
    task: TaskInsertInput;
};

export type CreateTaskMutation = { __typename?: 'Mutation' } & {
    insertOneTask?: Maybe<{ __typename?: 'Task' } & TaskFragment>;
};

export type DeleteConnectedServiceTasksMutationVariables = {};

export type DeleteConnectedServiceTasksMutation = {
    __typename?: 'Mutation';
} & {
    deleteManyTasks?: Maybe<
        { __typename?: 'DeleteManyPayload' } & Pick<
            DeleteManyPayload,
            'deletedCount'
        >
    >;
};

export type DeleteTaskMutationVariables = {
    taskId: Scalars['ObjectId'];
};

export type DeleteTaskMutation = { __typename?: 'Mutation' } & {
    deleteOneTask?: Maybe<{ __typename?: 'Task' } & Pick<Task, '_id'>>;
};

export type EditTaskMutationVariables = {
    taskId: Scalars['ObjectId'];
    newTask: TaskUpdateInput;
};

export type EditTaskMutation = { __typename?: 'Mutation' } & {
    updateOneTask?: Maybe<
        { __typename?: 'Task' } & Pick<
            Task,
            '_id' | 'body' | 'date' | 'resolved' | 'sender' | 'starred'
        >
    >;
};

export type ResolveTaskMutationVariables = {
    taskId: Scalars['ObjectId'];
    value: Scalars['Boolean'];
};

export type ResolveTaskMutation = { __typename?: 'Mutation' } & {
    updateOneTask?: Maybe<{ __typename?: 'Task' } & TaskFragment>;
};

export type StarTaskMutationVariables = {
    taskId: Scalars['ObjectId'];
    value: Scalars['Boolean'];
};

export type StarTaskMutation = { __typename?: 'Mutation' } & {
    updateOneTask?: Maybe<{ __typename?: 'Task' } & TaskFragment>;
};

export type ConnectedServicesQueryVariables = {};

export type ConnectedServicesQuery = { __typename?: 'Query' } & {
    connected_service?: Maybe<
        { __typename?: 'Connected_service' } & ConnectedServiceFragment
    >;
};

export type TasksQueryVariables = {};

export type TasksQuery = { __typename?: 'Query' } & {
    tasks: Array<Maybe<{ __typename?: 'Task' } & TaskFragment>>;
};

export const ConnectedServiceFragmentDoc = gql`
    fragment connectedService on Connected_service {
        _id
        bakalari
        edmodo
        facebook
        googleClassroom
    }
`;
export const TaskFragmentDoc = gql`
    fragment task on Task {
        _id
        body
        sender
        date
        service
        resolved
        starred
    }
`;
export const ConnectBakalariDocument = gql`
    mutation connectBakalari($user_id: String!, $value: Boolean!) {
        updateOneConnected_service(
            query: { user_id: $user_id }
            set: { bakalari: $value }
        ) {
            ...connectedService
        }
    }
    ${ConnectedServiceFragmentDoc}
`;
export type ConnectBakalariMutationFn = ApolloReactCommon.MutationFunction<
    ConnectBakalariMutation,
    ConnectBakalariMutationVariables
>;

/**
 * __useConnectBakalariMutation__
 *
 * To run a mutation, you first call `useConnectBakalariMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConnectBakalariMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [connectBakalariMutation, { data, loading, error }] = useConnectBakalariMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useConnectBakalariMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        ConnectBakalariMutation,
        ConnectBakalariMutationVariables
    >,
) {
    return ApolloReactHooks.useMutation<
        ConnectBakalariMutation,
        ConnectBakalariMutationVariables
    >(ConnectBakalariDocument, baseOptions);
}
export type ConnectBakalariMutationHookResult = ReturnType<
    typeof useConnectBakalariMutation
>;
export type ConnectBakalariMutationResult = ApolloReactCommon.MutationResult<
    ConnectBakalariMutation
>;
export type ConnectBakalariMutationOptions = ApolloReactCommon.BaseMutationOptions<
    ConnectBakalariMutation,
    ConnectBakalariMutationVariables
>;
export const CreateDefaultConnectedServiceDocument = gql`
    mutation createDefaultConnectedService($user_id: String!) {
        insertOneConnected_service(
            data: {
                user_id: $user_id
                bakalari: false
                facebook: false
                edmodo: false
                googleClassroom: false
            }
        ) {
            ...connectedService
        }
    }
    ${ConnectedServiceFragmentDoc}
`;
export type CreateDefaultConnectedServiceMutationFn = ApolloReactCommon.MutationFunction<
    CreateDefaultConnectedServiceMutation,
    CreateDefaultConnectedServiceMutationVariables
>;

/**
 * __useCreateDefaultConnectedServiceMutation__
 *
 * To run a mutation, you first call `useCreateDefaultConnectedServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDefaultConnectedServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDefaultConnectedServiceMutation, { data, loading, error }] = useCreateDefaultConnectedServiceMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useCreateDefaultConnectedServiceMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        CreateDefaultConnectedServiceMutation,
        CreateDefaultConnectedServiceMutationVariables
    >,
) {
    return ApolloReactHooks.useMutation<
        CreateDefaultConnectedServiceMutation,
        CreateDefaultConnectedServiceMutationVariables
    >(CreateDefaultConnectedServiceDocument, baseOptions);
}
export type CreateDefaultConnectedServiceMutationHookResult = ReturnType<
    typeof useCreateDefaultConnectedServiceMutation
>;
export type CreateDefaultConnectedServiceMutationResult = ApolloReactCommon.MutationResult<
    CreateDefaultConnectedServiceMutation
>;
export type CreateDefaultConnectedServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<
    CreateDefaultConnectedServiceMutation,
    CreateDefaultConnectedServiceMutationVariables
>;
export const CreateManyTasksDocument = gql`
    mutation createManyTasks($tasks: [TaskInsertInput!]!) {
        insertManyTasks(data: $tasks) {
            insertedIds
        }
    }
`;
export type CreateManyTasksMutationFn = ApolloReactCommon.MutationFunction<
    CreateManyTasksMutation,
    CreateManyTasksMutationVariables
>;

/**
 * __useCreateManyTasksMutation__
 *
 * To run a mutation, you first call `useCreateManyTasksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateManyTasksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createManyTasksMutation, { data, loading, error }] = useCreateManyTasksMutation({
 *   variables: {
 *      tasks: // value for 'tasks'
 *   },
 * });
 */
export function useCreateManyTasksMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        CreateManyTasksMutation,
        CreateManyTasksMutationVariables
    >,
) {
    return ApolloReactHooks.useMutation<
        CreateManyTasksMutation,
        CreateManyTasksMutationVariables
    >(CreateManyTasksDocument, baseOptions);
}
export type CreateManyTasksMutationHookResult = ReturnType<
    typeof useCreateManyTasksMutation
>;
export type CreateManyTasksMutationResult = ApolloReactCommon.MutationResult<
    CreateManyTasksMutation
>;
export type CreateManyTasksMutationOptions = ApolloReactCommon.BaseMutationOptions<
    CreateManyTasksMutation,
    CreateManyTasksMutationVariables
>;
export const CreateTaskDocument = gql`
    mutation createTask($task: TaskInsertInput!) {
        insertOneTask(data: $task) {
            ...task
        }
    }
    ${TaskFragmentDoc}
`;
export type CreateTaskMutationFn = ApolloReactCommon.MutationFunction<
    CreateTaskMutation,
    CreateTaskMutationVariables
>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      task: // value for 'task'
 *   },
 * });
 */
export function useCreateTaskMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        CreateTaskMutation,
        CreateTaskMutationVariables
    >,
) {
    return ApolloReactHooks.useMutation<
        CreateTaskMutation,
        CreateTaskMutationVariables
    >(CreateTaskDocument, baseOptions);
}
export type CreateTaskMutationHookResult = ReturnType<
    typeof useCreateTaskMutation
>;
export type CreateTaskMutationResult = ApolloReactCommon.MutationResult<
    CreateTaskMutation
>;
export type CreateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<
    CreateTaskMutation,
    CreateTaskMutationVariables
>;
export const DeleteConnectedServiceTasksDocument = gql`
    mutation deleteConnectedServiceTasks {
        deleteManyTasks(query: { service_exists: true }) {
            deletedCount
        }
    }
`;
export type DeleteConnectedServiceTasksMutationFn = ApolloReactCommon.MutationFunction<
    DeleteConnectedServiceTasksMutation,
    DeleteConnectedServiceTasksMutationVariables
>;

/**
 * __useDeleteConnectedServiceTasksMutation__
 *
 * To run a mutation, you first call `useDeleteConnectedServiceTasksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteConnectedServiceTasksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteConnectedServiceTasksMutation, { data, loading, error }] = useDeleteConnectedServiceTasksMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteConnectedServiceTasksMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        DeleteConnectedServiceTasksMutation,
        DeleteConnectedServiceTasksMutationVariables
    >,
) {
    return ApolloReactHooks.useMutation<
        DeleteConnectedServiceTasksMutation,
        DeleteConnectedServiceTasksMutationVariables
    >(DeleteConnectedServiceTasksDocument, baseOptions);
}
export type DeleteConnectedServiceTasksMutationHookResult = ReturnType<
    typeof useDeleteConnectedServiceTasksMutation
>;
export type DeleteConnectedServiceTasksMutationResult = ApolloReactCommon.MutationResult<
    DeleteConnectedServiceTasksMutation
>;
export type DeleteConnectedServiceTasksMutationOptions = ApolloReactCommon.BaseMutationOptions<
    DeleteConnectedServiceTasksMutation,
    DeleteConnectedServiceTasksMutationVariables
>;
export const DeleteTaskDocument = gql`
    mutation deleteTask($taskId: ObjectId!) {
        deleteOneTask(query: { _id: $taskId }) {
            _id
        }
    }
`;
export type DeleteTaskMutationFn = ApolloReactCommon.MutationFunction<
    DeleteTaskMutation,
    DeleteTaskMutationVariables
>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useDeleteTaskMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        DeleteTaskMutation,
        DeleteTaskMutationVariables
    >,
) {
    return ApolloReactHooks.useMutation<
        DeleteTaskMutation,
        DeleteTaskMutationVariables
    >(DeleteTaskDocument, baseOptions);
}
export type DeleteTaskMutationHookResult = ReturnType<
    typeof useDeleteTaskMutation
>;
export type DeleteTaskMutationResult = ApolloReactCommon.MutationResult<
    DeleteTaskMutation
>;
export type DeleteTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<
    DeleteTaskMutation,
    DeleteTaskMutationVariables
>;
export const EditTaskDocument = gql`
    mutation editTask($taskId: ObjectId!, $newTask: TaskUpdateInput!) {
        updateOneTask(query: { _id: $taskId }, set: $newTask) {
            _id
            body
            date
            resolved
            sender
            starred
        }
    }
`;
export type EditTaskMutationFn = ApolloReactCommon.MutationFunction<
    EditTaskMutation,
    EditTaskMutationVariables
>;

/**
 * __useEditTaskMutation__
 *
 * To run a mutation, you first call `useEditTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTaskMutation, { data, loading, error }] = useEditTaskMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *      newTask: // value for 'newTask'
 *   },
 * });
 */
export function useEditTaskMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        EditTaskMutation,
        EditTaskMutationVariables
    >,
) {
    return ApolloReactHooks.useMutation<
        EditTaskMutation,
        EditTaskMutationVariables
    >(EditTaskDocument, baseOptions);
}
export type EditTaskMutationHookResult = ReturnType<typeof useEditTaskMutation>;
export type EditTaskMutationResult = ApolloReactCommon.MutationResult<
    EditTaskMutation
>;
export type EditTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<
    EditTaskMutation,
    EditTaskMutationVariables
>;
export const ResolveTaskDocument = gql`
    mutation resolveTask($taskId: ObjectId!, $value: Boolean!) {
        updateOneTask(query: { _id: $taskId }, set: { resolved: $value }) {
            ...task
        }
    }
    ${TaskFragmentDoc}
`;
export type ResolveTaskMutationFn = ApolloReactCommon.MutationFunction<
    ResolveTaskMutation,
    ResolveTaskMutationVariables
>;

/**
 * __useResolveTaskMutation__
 *
 * To run a mutation, you first call `useResolveTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResolveTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resolveTaskMutation, { data, loading, error }] = useResolveTaskMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useResolveTaskMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        ResolveTaskMutation,
        ResolveTaskMutationVariables
    >,
) {
    return ApolloReactHooks.useMutation<
        ResolveTaskMutation,
        ResolveTaskMutationVariables
    >(ResolveTaskDocument, baseOptions);
}
export type ResolveTaskMutationHookResult = ReturnType<
    typeof useResolveTaskMutation
>;
export type ResolveTaskMutationResult = ApolloReactCommon.MutationResult<
    ResolveTaskMutation
>;
export type ResolveTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<
    ResolveTaskMutation,
    ResolveTaskMutationVariables
>;
export const StarTaskDocument = gql`
    mutation starTask($taskId: ObjectId!, $value: Boolean!) {
        updateOneTask(query: { _id: $taskId }, set: { starred: $value }) {
            ...task
        }
    }
    ${TaskFragmentDoc}
`;
export type StarTaskMutationFn = ApolloReactCommon.MutationFunction<
    StarTaskMutation,
    StarTaskMutationVariables
>;

/**
 * __useStarTaskMutation__
 *
 * To run a mutation, you first call `useStarTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStarTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [starTaskMutation, { data, loading, error }] = useStarTaskMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useStarTaskMutation(
    baseOptions?: ApolloReactHooks.MutationHookOptions<
        StarTaskMutation,
        StarTaskMutationVariables
    >,
) {
    return ApolloReactHooks.useMutation<
        StarTaskMutation,
        StarTaskMutationVariables
    >(StarTaskDocument, baseOptions);
}
export type StarTaskMutationHookResult = ReturnType<typeof useStarTaskMutation>;
export type StarTaskMutationResult = ApolloReactCommon.MutationResult<
    StarTaskMutation
>;
export type StarTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<
    StarTaskMutation,
    StarTaskMutationVariables
>;
export const ConnectedServicesDocument = gql`
    query connectedServices {
        connected_service {
            ...connectedService
        }
    }
    ${ConnectedServiceFragmentDoc}
`;

/**
 * __useConnectedServicesQuery__
 *
 * To run a query within a React component, call `useConnectedServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useConnectedServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConnectedServicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useConnectedServicesQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        ConnectedServicesQuery,
        ConnectedServicesQueryVariables
    >,
) {
    return ApolloReactHooks.useQuery<
        ConnectedServicesQuery,
        ConnectedServicesQueryVariables
    >(ConnectedServicesDocument, baseOptions);
}
export function useConnectedServicesLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        ConnectedServicesQuery,
        ConnectedServicesQueryVariables
    >,
) {
    return ApolloReactHooks.useLazyQuery<
        ConnectedServicesQuery,
        ConnectedServicesQueryVariables
    >(ConnectedServicesDocument, baseOptions);
}
export type ConnectedServicesQueryHookResult = ReturnType<
    typeof useConnectedServicesQuery
>;
export type ConnectedServicesLazyQueryHookResult = ReturnType<
    typeof useConnectedServicesLazyQuery
>;
export type ConnectedServicesQueryResult = ApolloReactCommon.QueryResult<
    ConnectedServicesQuery,
    ConnectedServicesQueryVariables
>;
export const TasksDocument = gql`
    query tasks {
        tasks(sortBy: DATE_DESC) {
            ...task
        }
    }
    ${TaskFragmentDoc}
`;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTasksQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        TasksQuery,
        TasksQueryVariables
    >,
) {
    return ApolloReactHooks.useQuery<TasksQuery, TasksQueryVariables>(
        TasksDocument,
        baseOptions,
    );
}
export function useTasksLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        TasksQuery,
        TasksQueryVariables
    >,
) {
    return ApolloReactHooks.useLazyQuery<TasksQuery, TasksQueryVariables>(
        TasksDocument,
        baseOptions,
    );
}
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksQueryResult = ApolloReactCommon.QueryResult<
    TasksQuery,
    TasksQueryVariables
>;

export interface IntrospectionResultData {
    __schema: {
        types: {
            kind: string;
            name: string;
            possibleTypes: {
                name: string;
            }[];
        }[];
    };
}
const result: IntrospectionResultData = {
    __schema: {
        types: [],
    },
};
export default result;
