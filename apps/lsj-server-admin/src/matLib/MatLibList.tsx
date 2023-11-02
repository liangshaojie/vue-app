import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const MatLibList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MatLibs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsDelete" source="isDelete" />
        <TextField label="MatName" source="matName" />
        <TextField label="MatTag" source="matTag" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
