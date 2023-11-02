import { SortOrder } from "../../util/SortOrder";

export type MatLibOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isDelete?: SortOrder;
  matName?: SortOrder;
  matTag?: SortOrder;
  updatedAt?: SortOrder;
};
