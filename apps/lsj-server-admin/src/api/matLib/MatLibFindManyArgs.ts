import { MatLibWhereInput } from "./MatLibWhereInput";
import { MatLibOrderByInput } from "./MatLibOrderByInput";

export type MatLibFindManyArgs = {
  where?: MatLibWhereInput;
  orderBy?: Array<MatLibOrderByInput>;
  skip?: number;
  take?: number;
};
