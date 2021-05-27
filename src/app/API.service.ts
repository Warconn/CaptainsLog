/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateEntryInput = {
  id?: string | null;
  timestamp: string;
  log: string;
  captain: string;
};

export type ModelEntryConditionInput = {
  timestamp?: ModelStringInput | null;
  log?: ModelStringInput | null;
  captain?: ModelStringInput | null;
  and?: Array<ModelEntryConditionInput | null> | null;
  or?: Array<ModelEntryConditionInput | null> | null;
  not?: ModelEntryConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Entry = {
  __typename: "Entry";
  id: string;
  timestamp: string;
  log: string;
  captain: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEntryInput = {
  id: string;
  timestamp?: string | null;
  log?: string | null;
  captain?: string | null;
};

export type DeleteEntryInput = {
  id: string;
};

export type CreateCaptainInput = {
  id?: string | null;
  name: string;
};

export type ModelCaptainConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelCaptainConditionInput | null> | null;
  or?: Array<ModelCaptainConditionInput | null> | null;
  not?: ModelCaptainConditionInput | null;
};

export type Captain = {
  __typename: "Captain";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCaptainInput = {
  id: string;
  name?: string | null;
};

export type DeleteCaptainInput = {
  id: string;
};

export type ModelEntryFilterInput = {
  id?: ModelIDInput | null;
  timestamp?: ModelStringInput | null;
  log?: ModelStringInput | null;
  captain?: ModelStringInput | null;
  and?: Array<ModelEntryFilterInput | null> | null;
  or?: Array<ModelEntryFilterInput | null> | null;
  not?: ModelEntryFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelEntryConnection = {
  __typename: "ModelEntryConnection";
  items?: Array<Entry | null> | null;
  nextToken?: string | null;
};

export type ModelCaptainFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCaptainFilterInput | null> | null;
  or?: Array<ModelCaptainFilterInput | null> | null;
  not?: ModelCaptainFilterInput | null;
};

export type ModelCaptainConnection = {
  __typename: "ModelCaptainConnection";
  items?: Array<Captain | null> | null;
  nextToken?: string | null;
};

export type CreateEntryMutation = {
  __typename: "Entry";
  id: string;
  timestamp: string;
  log: string;
  captain: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEntryMutation = {
  __typename: "Entry";
  id: string;
  timestamp: string;
  log: string;
  captain: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteEntryMutation = {
  __typename: "Entry";
  id: string;
  timestamp: string;
  log: string;
  captain: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateCaptainMutation = {
  __typename: "Captain";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCaptainMutation = {
  __typename: "Captain";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCaptainMutation = {
  __typename: "Captain";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type GetEntryQuery = {
  __typename: "Entry";
  id: string;
  timestamp: string;
  log: string;
  captain: string;
  createdAt: string;
  updatedAt: string;
};

export type ListEntrysQuery = {
  __typename: "ModelEntryConnection";
  items?: Array<{
    __typename: "Entry";
    id: string;
    timestamp: string;
    log: string;
    captain: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCaptainQuery = {
  __typename: "Captain";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCaptainsQuery = {
  __typename: "ModelCaptainConnection";
  items?: Array<{
    __typename: "Captain";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateEntrySubscription = {
  __typename: "Entry";
  id: string;
  timestamp: string;
  log: string;
  captain: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateEntrySubscription = {
  __typename: "Entry";
  id: string;
  timestamp: string;
  log: string;
  captain: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteEntrySubscription = {
  __typename: "Entry";
  id: string;
  timestamp: string;
  log: string;
  captain: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCaptainSubscription = {
  __typename: "Captain";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCaptainSubscription = {
  __typename: "Captain";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCaptainSubscription = {
  __typename: "Captain";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateEntry(
    input: CreateEntryInput,
    condition?: ModelEntryConditionInput
  ): Promise<CreateEntryMutation> {
    const statement = `mutation CreateEntry($input: CreateEntryInput!, $condition: ModelEntryConditionInput) {
        createEntry(input: $input, condition: $condition) {
          __typename
          id
          timestamp
          log
          captain
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEntryMutation>response.data.createEntry;
  }
  async UpdateEntry(
    input: UpdateEntryInput,
    condition?: ModelEntryConditionInput
  ): Promise<UpdateEntryMutation> {
    const statement = `mutation UpdateEntry($input: UpdateEntryInput!, $condition: ModelEntryConditionInput) {
        updateEntry(input: $input, condition: $condition) {
          __typename
          id
          timestamp
          log
          captain
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEntryMutation>response.data.updateEntry;
  }
  async DeleteEntry(
    input: DeleteEntryInput,
    condition?: ModelEntryConditionInput
  ): Promise<DeleteEntryMutation> {
    const statement = `mutation DeleteEntry($input: DeleteEntryInput!, $condition: ModelEntryConditionInput) {
        deleteEntry(input: $input, condition: $condition) {
          __typename
          id
          timestamp
          log
          captain
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEntryMutation>response.data.deleteEntry;
  }
  async CreateCaptain(
    input: CreateCaptainInput,
    condition?: ModelCaptainConditionInput
  ): Promise<CreateCaptainMutation> {
    const statement = `mutation CreateCaptain($input: CreateCaptainInput!, $condition: ModelCaptainConditionInput) {
        createCaptain(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCaptainMutation>response.data.createCaptain;
  }
  async UpdateCaptain(
    input: UpdateCaptainInput,
    condition?: ModelCaptainConditionInput
  ): Promise<UpdateCaptainMutation> {
    const statement = `mutation UpdateCaptain($input: UpdateCaptainInput!, $condition: ModelCaptainConditionInput) {
        updateCaptain(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCaptainMutation>response.data.updateCaptain;
  }
  async DeleteCaptain(
    input: DeleteCaptainInput,
    condition?: ModelCaptainConditionInput
  ): Promise<DeleteCaptainMutation> {
    const statement = `mutation DeleteCaptain($input: DeleteCaptainInput!, $condition: ModelCaptainConditionInput) {
        deleteCaptain(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCaptainMutation>response.data.deleteCaptain;
  }
  async GetEntry(id: string): Promise<GetEntryQuery> {
    const statement = `query GetEntry($id: ID!) {
        getEntry(id: $id) {
          __typename
          id
          timestamp
          log
          captain
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEntryQuery>response.data.getEntry;
  }
  async ListEntrys(
    filter?: ModelEntryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEntrysQuery> {
    const statement = `query ListEntrys($filter: ModelEntryFilterInput, $limit: Int, $nextToken: String) {
        listEntrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            timestamp
            log
            captain
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEntrysQuery>response.data.listEntrys;
  }
  async GetCaptain(id: string): Promise<GetCaptainQuery> {
    const statement = `query GetCaptain($id: ID!) {
        getCaptain(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCaptainQuery>response.data.getCaptain;
  }
  async ListCaptains(
    filter?: ModelCaptainFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCaptainsQuery> {
    const statement = `query ListCaptains($filter: ModelCaptainFilterInput, $limit: Int, $nextToken: String) {
        listCaptains(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCaptainsQuery>response.data.listCaptains;
  }
  OnCreateEntryListener: Observable<
    SubscriptionResponse<OnCreateEntrySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateEntry {
        onCreateEntry {
          __typename
          id
          timestamp
          log
          captain
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateEntrySubscription>>;

  OnUpdateEntryListener: Observable<
    SubscriptionResponse<OnUpdateEntrySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEntry {
        onUpdateEntry {
          __typename
          id
          timestamp
          log
          captain
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateEntrySubscription>>;

  OnDeleteEntryListener: Observable<
    SubscriptionResponse<OnDeleteEntrySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEntry {
        onDeleteEntry {
          __typename
          id
          timestamp
          log
          captain
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteEntrySubscription>>;

  OnCreateCaptainListener: Observable<
    SubscriptionResponse<OnCreateCaptainSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCaptain {
        onCreateCaptain {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCaptainSubscription>>;

  OnUpdateCaptainListener: Observable<
    SubscriptionResponse<OnUpdateCaptainSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCaptain {
        onUpdateCaptain {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCaptainSubscription>>;

  OnDeleteCaptainListener: Observable<
    SubscriptionResponse<OnDeleteCaptainSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCaptain {
        onDeleteCaptain {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCaptainSubscription>>;
}
