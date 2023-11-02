import { MatLib as TMatLib } from "../api/matLib/MatLib";

export const MATLIB_TITLE_FIELD = "matName";

export const MatLibTitle = (record: TMatLib): string => {
  return record.matName?.toString() || String(record.id);
};
