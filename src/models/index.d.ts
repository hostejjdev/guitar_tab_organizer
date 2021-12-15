import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TabModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TabModel {
  readonly id: string;
  readonly songname?: string;
  readonly artistname?: string;
  readonly learned?: boolean;
  readonly recorded?: boolean;
  readonly tab?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TabModel, TabModelMetaData>);
  static copyOf(source: TabModel, mutator: (draft: MutableModel<TabModel, TabModelMetaData>) => MutableModel<TabModel, TabModelMetaData> | void): TabModel;
}