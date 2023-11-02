import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MatLibWhereInput = {
  id?: StringFilter;
  isDelete?: BooleanNullableFilter;
  matName?: StringNullableFilter;
  matTag?: StringNullableFilter;
};
